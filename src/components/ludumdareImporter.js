import config from './../../config/config'
import { LudumDare } from './connector'
import cheerio from 'cheerio'
import sanitizer from 'sanitize'
import _ from 'lodash'
import date from './date'
import {
  createFolderIfItDoesntExist,
  findGameCoverColors,
  downloadAndSaveImages,
  resolve,
  createLocalImagePath,
  join,
  writeJson
} from './file-helper'
import slugify from 'slugify'

const profileName = config.ludumdare.profileName
const sanitize = sanitizer()
const sanitizeString = str => sanitize.value(str, 'str')

const getEntries = async () => {
  const rawPage = await LudumDare.getProfile(profileName)
  const entries = []
  const $ = cheerio.load(rawPage.data)

  $('#compo2 td a').each((index, elem) => {
    // Fetch info
    const title = $(elem).text()
    const link = $(elem).attr('href').replace('../../', 'http://ludumdare.com/compo/')
    const eventId = $(elem).attr('href').replace('../../', '').replace(/\/.*/, '')
    const eventName = sanitizeString(_.startCase(eventId.replace(/-/g, ' ')).replace('Minild', 'MiniLD'))
    const eventType = eventName.includes('mini') ? 'MiniLD' : 'LudumDare'
    const splitEventName = eventName.toLowerCase().split(' ')
    const eventNumber = splitEventName.pop()
    const eventDate = date.getLudumDareEventDate(eventType, eventNumber)
    const name = sanitizeString(title)
    entries.push({
      eventName: eventName,
      name: name,
      eventType: eventType,
      published: eventDate,
      originalUrl: link,
      timestamp: date.format(eventDate),
      ago: date.ago(eventDate),
      path: `${splitEventName.join('-')}/${eventNumber}/${slugify(name, { lower: true })}`
    })
  })
  return entries
}

const fetchDetails = async (entries) => {
  for (let index = 0; index < entries.length; index++) {
    const entry = entries[index]
    const fetchedEntry = await fetchEntryDetails(entry)
    entries[index] = { ...entry, ...fetchedEntry }
  }
}

const fetchEntryDetails = async (entry) => {
  const rawPage = await LudumDare.getEntry(entry.originalUrl)
  const $ = cheerio.load(rawPage.data)

  // Grab author info to make sure we're on a working entry page
  const authorLink = $('#compo2 a strong')
  if (authorLink.text()) {
    // Fetch detailed info
    const picture = $('#shotview img').attr('src')
    const body = $($('#compo2 h2').get(1)).prev().text()

    return {
      coverOriginal: picture,
      cover: createLocalImagePath(picture, entry.path),
      body: sanitizeString(body),
      links: parseLinks($, entry),
      results: parseRatings($),
      url: join('games/', entry.path)
    }
  }

  return { error: 'Entry page seems empty' }
}

const parseLinks = ($, entry) => {
  const links = $('#compo2 .links a').map((index, link) => {
    const $link = $(link)
    return {
      title: sanitizeString($link.text()),
      url: $link.attr('href')
    }
  }).get()
  links.push({
    title: 'Ludum Dare entry page',
    url: entry.originalUrl
  })
  return links
}

const parseRatings = ($) => {
  const ratings = $('#compo2 table[cellpadding=5] tr')
  const all = []
  ratings.each((index, row) => {
    const cells = $(row).children()
    let result = $(cells[0]).text().trim()
    if (result === '') {
      result = $(cells[0]).find('img').attr('src')
    } else {
      result = result.replace('#', '')
    }
    all.push({
      result: result,
      title: $(cells[1]).text().trim(),
      average: $(cells[2]).text().trim()
    })
  })
  const overall = all.find(result => result.title === 'Overall')
  return {
    all,
    overall: _.isUndefined(overall) ? { title: '', result: null } : overall
  }
}

const findImages = (entries) => {
  const images = []
  entries.forEach(game => {
    images.push({ url: game.coverOriginal, path: game.path })
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

const findComments = games => {
  for (const game of games) {
    game.comments = []
  }
}

async function getAll() {
  const entries = await getEntries()
  await fetchDetails(entries)
  const images = findImages(entries)
  await downloadAndSaveImages(images)
  await findCoverColors(entries)
  findComments(entries)
  saveData(entries)
  return entries
}

export { getAll }
export default { getAll }
