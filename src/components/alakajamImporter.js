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
import { Alakajam } from './connector'
import date from './date'

const cleanUpUrl = url => url.replace(/\/\/\//g, '')

const findImages = (data) => {
  const images = []
  data.forEach(game => {
    images.push(...findImageUrls(game.body))
    images.push({ url: Alakajam.staticUrl(cleanUpUrl(game.cover)), path: game.path })
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



const filterOutExistingGames = (oldGames, feed) => {
  const oldGameIds = oldGames.map(game => game.id)
  return feed.filter(game => {
    return !oldGameIds.includes(game.id)
  }).map(game => game.id)
}

const loadAllSavedGames = () => glob
  .sync('content/games/**/*.json', {})
  .map(file => readJson(file))
  .filter(game => game.eventType === 'Alakajam')

const saveData = (games) => {
  games.forEach(game => {
    const filePath = join(resolve('./content/games/'), cleanUpGamePath(game.path), 'game.json')
    createFolderIfItDoesntExist(filePath)
    writeJson(filePath, game)
  })
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

const transformGrades = (game) => {
  const all = []
  for (let index = 1; index <= game.rating_count / 2; index += 1) {
    all.push({
      title: Alakajam.getRatingTitle(index),
      result: _.get(game.results, `result_{index}`, ''),
      ratings: _.get(game.ratings, `rating_{index}`, '')
    })
  }
  const overall = all.find(result => result.title === 'Overall')
  return {
    all,
    overall: _.isUndefined(overall) ? {title: '', result: null} : overall
  };
}


const getLinks = (game) => {
  return game.links.map(link => ({
    url: link.url,
    title: link.label
  }))
}

const transformData = async (data) => {

  return data.reverse().map(game => {
    //const events = await Alakajam.getNodes(data.map(g => g.parent))
    //const event = events.data.node.find(event => event.id === game.parent)
    //event.timestamp = date.format(event.published)
    //event.ago = date.ago(event.published)
    game.comments.forEach(comment => {
      comment.body = makeUrlsLocal(comment.body, game.path)
    })

    return {
      ...game,
      timestamp: "?",
      ago: "?",
      event: game.event_name,
      results: transformGrades(game),
      body: game.body,
      //body: makeUrlsLocal(game.body, game.path),
      eventName: game.event_name,
      cover: createLocalImagePath(game.cover, game.path),
      url: join('games/', cleanUpGamePath(game.path)),
      links: getLinks(game),
      eventType: 'Alakajam'
    }
  })
}

const findCoverColors = async games => {
  for (let index = 0; index < games.length; index++) {
    const game = games[index]
    game.cover = createLocalImagePath(game.cover, game.path)
    game.coverColors = await findGameCoverColors(game)
  }
}

const fetchDetails = async (entries) => {
  for (let index = 0; index < entries.length; index++) {
    const entry = entries[index]
    const fetchedEntry = await fetchEntryDetails(entry)
    entries[index] = { ...entry, ...fetchedEntry.data }
  }
}

const fetchEntryDetails = async (entry) => {
  return await Alakajam.getEntry(entry.id)
}

const setUpGamePaths = entries => {
  entries.forEach(entry => {
    entry.path = `alakajam/${entry.event_name}/${entry.name}`
    entry.cover = entry.pictures.previews[0]
  })
}

const downloadAll = async (games) => {
  const profile = await Alakajam.getProfile(config.alakajam.profileName)
  let data = profile.data.entries
  await fetchDetails(data)
  data = data.filter(entry => entry.event_id !== null)
  setUpGamePaths(data)
  //console.log(data)
  const images = findImages(data)
  console.log("images:")
  console.log(images)
  await downloadAndSaveImages(images)
  await findCoverColors(data)
  data = await transformData(data)
  /*
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
  const data = await transformData(games)*/
  saveData(data)
  console.log(data)
  return data
}



async function getAll(download) {
  let games = loadAllSavedGames()
  download = true
  if (download) {
    games = downloadAll(games)
  }
  return games
}

export { getAll }
export default { getAll }