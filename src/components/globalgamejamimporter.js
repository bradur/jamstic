import cheerio from 'cheerio'
import sanitizer from 'sanitize'
import slugify from 'slugify'
import glob from 'glob'
import config from './../../config/config'
import { GlobalGameJam } from './connector'
import date from './date'
import {
  readJson,
  createFolderIfItDoesntExist,
  createLocalImagePath,
  downloadAndSaveImages,
  findGameCoverColors,
  join,
  resolve,
  writeJson
} from './file-helper'

const profileName = config.globalgamejam.profileName
const sanitize = sanitizer()
const sanitizeString = str => sanitize.value(str, 'str')

const themes = {
  2009: 'As long as we have each other, we will never run out of problems',
  2010: 'Deception',
  2011: 'Extinction',
  2012: 'An image of "Ouroboros"',
  2013: 'The Sound of a Heartbeat',
  2014: "We don't see things as they are, we see them as we are",
  2015: 'What do we do now?',
  2016: 'Ritual',
  2017: 'Waves',
  2018: 'Transmission',
  2019: 'What home means to you',
  2020: 'Repair',
  2021: 'Lost and Found'
}

const getEntries = async () => {

  const rawPage = await GlobalGameJam.getProfile(profileName)

  const $ = cheerio.load(rawPage.data)

  const entries = []
  $('.past-games .game').each((index, elem) => {
    const entry = {}
    $(elem).find('.game-image a').each((index, anchorElem) => {
      const href = $(anchorElem).attr('href')
      entry.link = `${GlobalGameJam._staticUrl()}${href}`
    })
    entry.cover = ''
    $(elem).find(".game-image source[media='(min-width: 0)']").each((index, mediaElem) => {
      const href = $(mediaElem).attr('srcset').split("?")[0]
      entry.cover = `${href}`
    })
    entries.push(entry)
  })

  return entries
}

const fetchDetails = async (entries) => {
  const games = []
  for (const entry of entries) {
    games.push(await fetchGame(entry.link, entry.cover))
  }
  return games
}

const fetchGame = async (gameLink, coverUrl) => {
  const rawPage = await GlobalGameJam.getEntry(gameLink)
  const $ = cheerio.load(rawPage.data)

  const links = $(".field--type-link-field").map((index, link) => {
    return {
      title: $(link).find('.field__label').text().trim(),
      url: $(link).find('a').attr("href").trim()
    }
  }).get()

  links.push({
    title: 'GGJ Entry page',
    url: gameLink
  })

  const images = []

  $('.field--type-image img').each((index, elem) => {
    images.push(elem.attribs["srcset"].split("?")[0])
  })

  $('.field--type-file').each((index, elem) => {
    $(elem).find("a").each((fileIndex, fileElem) => {
      links.push({
        title: $(elem).text(),
        url: fileElem.attribs["href"]
      })
    })
  })

  const eventDate = $("meta[property='article:published_time']")[0].attribs["content"]
  const year = new Date(eventDate).getFullYear()
  const title = $("meta[property='og:title']")[0].attribs["content"]
  const eventName = 'Global Game Jam'
  const splitEventName = eventName.toLowerCase().split(' ')
  const slugifiedName = slugify(title, { lower: true, remove: /[*+,~.()'"!:@]/g })

  const texts = []
  $(".field--type-text-long").each((index, elem) => {
    let textTitle = $(elem).find('.field__label').text().trim()
    if (textTitle !== '') {
      textTitle = `# ${textTitle}\n\n`
    } else {
      textTitle = `# ${title}\n\n`
    }
    const items = $(elem).find('.field__items').text()
    texts.push(`${textTitle}${items}`)
  })

  $(".field--type-list-text").each((index, elem) => {
    let textTitle = $(elem).find('.field__label').text().trim()
    if (textTitle !== '') {
      textTitle = `# ${textTitle}\n\n`
    } else {
      textTitle = `# ${title}\n\n`
    }
    const items = $(elem).find('.field__items').text()
    texts.push(`${textTitle}${items}`)
  })

  const path = `${splitEventName.join('-')}/${year}/${slugifiedName}`

  let originalCoverUrl = coverUrl
  if (originalCoverUrl === '') {
    if (images.length > 0) {
      originalCoverUrl = images[0]
    }
  }

  return {
    comments: [],
    name: title,
    published: eventDate,
    originalUrl: gameLink,
    timestamp: date.format(eventDate),
    ago: date.ago(eventDate),
    theme: themes[year],
    coverOriginal: originalCoverUrl,
    cover: originalCoverUrl !== '' ? createLocalImagePath(originalCoverUrl, path) : '',
    body: sanitizeString(texts.join("\n")),
    results: {
      all: [{
        title: "Hearts",
        result: $('.rate-heart-info').text()
      }],
      overall: {
        result: null
      }
    },
    subsubtype: 'Jam',
    url: join('games/', path),
    eventName,
    path,
    links,
    images
  }
}

const findImages = (entries) => {
  const images = []
  entries.forEach(game => {
    if (game.coverOriginal !== '') {
      images.push({ url: game.coverOriginal, path: game.path })
    }
    game.images.forEach(image => {
      images.push({ url: image, path: game.path })
    })
  })
  return images
}

const findCoverColors = async games => {
  for (let index = 0; index < games.length; index++) {
    games[index].coverColors = await findGameCoverColors(games[index])
  }
}

const saveData = (games) => {
  games.forEach(game => {
    const filePath = join(resolve('./content/games/'), game.path, 'game.json')
    createFolderIfItDoesntExist(filePath)
    writeJson(filePath, game)
  })
}

const loadAllSavedGames = () => glob
  .sync('content/games/**/*.json', {})
  .map(file => readJson(file))
  .filter(game => game.eventType === 'Global Game Jam')

const filterOutExistingGames = (oldGames, data) => {
  const oldGameUrls = oldGames.map(game => game.originalUrl)
  return data.filter(game => {
    return !oldGameUrls.includes(game.link)
  })
}

const downloadAll = async (oldGames) => {
  const entries = await getEntries()
  const newGameEntries = filterOutExistingGames(oldGames, entries)
  let data = [...oldGames]
  if (newGameEntries.length > 0) {
    const newGames = await fetchDetails(newGameEntries)
    data = data.concat(newGames)
    const images = findImages(data)
    await downloadAndSaveImages(images)
  }
  await findCoverColors(data)
  saveData(data)
  return data
}

async function getAll (download) {
  let games = loadAllSavedGames()
  if (download) {
    games = await downloadAll(games)
  }
  return games
}

export { getAll }
export default { getAll }
