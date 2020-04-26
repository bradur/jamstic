import config from './../../config/config'
import { getCleanUrls, findImageUrls } from './md-helper'
import glob from 'glob'
import _ from 'lodash'
import {
  writeJson,
  readJson,
  createFolderIfItDoesntExist,
  join,
  resolve,
  createLocalImagePath,
  cleanUpGamePath,
  downloadAndSaveImages,
  findGameCoverColors
} from './file-helper'
import { LDJam } from './connector'
import date from './date'

const cleanUpUrl = url => url.replace(/\/\/\//g, '')

const findImages = (data) => {
  const images = []
  data.forEach(game => {
    images.push(...getCleanUrls(game.body).map(url => ({
      url: LDJam.staticUrl(url), path: game.path
    })))
    images.push({ url: LDJam.staticUrl(cleanUpUrl(game.meta.cover)), path: game.path })
  })
  return images
}

const findCommentImages = (data) => {
  const images = []
  data.forEach(game => {
    game.comments.forEach(comment => {
      images.push(...getCleanUrls(comment.body).map(url => ({
        url: LDJam.staticUrl(url), path: game.path
      })))
    })
  })
  return images
}

const makeUrlsLocal = (string, gamePath) => {
  findImageUrls(string).forEach(url => {
    string = string.replace(url, `(${createLocalImagePath(url, gamePath)}`)
  })
  return string
}

const transformData = async (data) => {
  const platforms = await LDJam.getPlatforms()
  const events = await LDJam.getNodes(data.map(g => g.parent))
  return data.reverse().map(game => {
    const event = events.data.node.find(event => event.id === game.parent)
    event.timestamp = date.format(event.published)
    event.ago = date.ago(event.published)
    game.comments.forEach(comment => {
      comment.body = makeUrlsLocal(comment.body, game.path)
    })
    return {
      ...game,
      timestamp: date.format(game.published),
      ago: date.ago(game.published),
      event: event,
      results: transformGrades(game, event),
      body: makeUrlsLocal(game.body, game.path),
      eventName: event.name,
      cover: createLocalImagePath(game.meta.cover, game.path),
      url: join('games/', cleanUpGamePath(game.path)),
      links: getLinks(game, platforms.data.tag),
      eventType: 'LDJam'
    }
  })
}

const filterOutExistingGames = (oldGames, feed) => {
  const oldGameIds = oldGames.map(game => game.id)
  return feed.filter(game => {
    return !oldGameIds.includes(game.id)
  }).map(game => game.id)
}

const loadAllSavedGames = () => glob
  .sync('content/games/**/*.json', {})
  .map(file => readJson(file))
  .filter(game => game.eventType === 'LDJam')

const saveData = (games) => {
  games.forEach(game => {
    const filePath = join(resolve('./content/games/'), cleanUpGamePath(game.path), 'game.json')
    createFolderIfItDoesntExist(filePath)
    writeJson(filePath, game)
  })
}

const getLinks = (game, platforms) => {
  let index = 1
  let propName = `link-0${index}`
  const links = [{
    url: `https://ldjam.com${game.path}`,
    title: 'LDJam page'
  }]
  while (_.has(game.meta, propName)) {
    const tag = parseInt(game.meta[`${propName}-tag`], 10)
    const platform = platforms.find(platform => platform.id === tag)
    const url = game.meta[propName]
    if (url !== '') {
      links.push({
        url: url,
        title: platform === undefined ? 'Source' : platform.name
      })
    }
    index += 1
    propName = `link-0${index}`
  }
  return links
}

const downloadAndSaveComments = async (games) => {
  for (const game of games) {
    let comments = await LDJam.getComments(game.id)
    comments = _.get(comments, 'data.note', []).map(comment => ({
      ...comment,
      timestamp: date.format(comment.created),
      ago: date.ago(comment.created)
    }))
    game.comments = comments
  }
}

const transformGrades = (game, event) => {
  const all = Object.values(_.mapValues(
    _.pickBy(event.meta, (value, key) => key.includes('grade-') && !key.includes('-optional')),
    (value, key) => {
      return {
        title: value,
        average: _.get(game.magic, `${key}-average`, '-'),
        result: _.get(game.magic, `${key}-result`, '-')
      }
    }
  ))
  const overall = all.find(result => result.title === 'Overall')
  return {
    all,
    overall: _.isUndefined(overall) ? { title: '', result: null } : overall
  }
}

const findCoverColors = async games => {
  for (let index = 0; index < games.length; index++) {
    const game = games[index]
    game.cover = createLocalImagePath(game.meta.cover, game.path)
    game.coverColors = await findGameCoverColors(game)
  }
}

const downloadAll = async (games) => {
  const profile = await LDJam.getProfile(config.ldjam.profileName)
  const feed = await LDJam.getFeed(profile.data.path[1])
  const newGameIds = filterOutExistingGames(games, feed.data.feed)
  if (newGameIds.length > 0) {
    const newGames = await LDJam.getNodes(newGameIds) // has a limit of 250 in the API
    games = games.concat(newGames.data.node)
    const images = findImages(games)
    await downloadAndSaveImages(images)
    console.log(`Found ${newGameIds.length} new games!`)
  } else {
    console.log('No new games found!')
  }
  await downloadAndSaveComments(games)
  const commentImages = findCommentImages(games)
  await downloadAndSaveImages(commentImages)
  await findCoverColors(games)
  const data = await transformData(games)
  saveData(data)
  return data
}

async function getAll(download) {
  let games = loadAllSavedGames()
  if (download) {
    games = downloadAll(games)
  }
  return games
}

export { getAll }
export default { getAll }
