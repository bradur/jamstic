import axios from 'axios'
import fs from 'fs'
import _ from 'lodash'
import path from 'path'
import config from './../../config/config'
import mdHelper from './md-helper'
import glob from 'glob'

const apiUrl = 'https://api.ldjam.com/vx/node/'
const staticUrl = "https://static.jam.vg/"
const feedLimit = 50 // 50 is max limit in ldjam API. won't hit that in a while

const getProfile = (name) => axios.get(`${apiUrl}walk/1/users/${name}`);
const getFeed = (id) => axios.get(`${apiUrl}feed/${id}/authors/item/game?limit=${feedLimit}`)
const getGames = (feed) => axios.get(`${apiUrl}get/${feed.map(g => g.id).join('+')}`)

const downloadAndSaveFile = (url, savePath) => 
    axios({
        url,
        responseType: 'stream',
    }).then(
        response =>
            new Promise((resolve, reject) => {
                response.data
                    .pipe(fs.createWriteStream(savePath))
                    .on('finish', () => resolve())
                    .on('error', e => reject(e));
            }),
    )

const downloadAndSaveImages = async (images) => {
    console.log("Checking for new images...")
    const count = 0
    for (const image of images) {
        const imagePath = createLocalImagePath(image.url, image.path, path.resolve('./static/'))
        if (!fs.existsSync(imagePath)) {
            count += 1
            fs.mkdirSync(path.dirname(imagePath), { recursive: true })
            await downloadAndSaveFile(`${staticUrl}/${image.url}`, imagePath)
        }
    }
    if (count > 0) {
        console.log(`Done! Downloaded & saved ${count} images.`)
    } else {
        console.log('No new images detected.')
    }
}

const cleanUpGamePath = gamePath => gamePath.replace('/events/', '')
const cleanUpUrl = url => url.replace(/\/\/\//g, '')

const createLocalImagePath = (url, gamePath, imagePath = '') => {
    return path.posix.join(imagePath, cleanUpGamePath(gamePath), "/images/", path.basename(url))
}

const getImages = (data) => {
    const images = []
    data.forEach(game => {
        images.push(...mdHelper.getCleanUrls(game.body).map(url => ({ url, path: game.path })))
        images.push({ url: cleanUpUrl(game.meta.cover), path: game.path })
    })
    return images
}


const makeUrlsLocal = (string, gamePath) => {
    mdHelper.findImageUrls(string).forEach(url => {
        string = string.replace(url, `(${createLocalImagePath(url, gamePath)}`)
    })
    return string
}

const parseEventName = (path) => {
    const parts = path.split("/")
    return _.startCase(parts[2].replace(/-/g, " ") + " " + parts[3])
}

const transformData = (data) => 
    data.reverse().map(game => (
        {
            ...game,
            body: makeUrlsLocal(game.body, game.path),
            eventName: parseEventName(game.path),
            cover: createLocalImagePath(game.meta.cover, game.path),
            url: path.join("games/", cleanUpGamePath(game.path))
        }
    ))

const filterOutExistingGames = (oldGames, feed) => {
    const oldGameIds = oldGames.map(game => game.id)
    return feed.filter(game => {
        return !oldGameIds.includes(game.id)
    })
}

const getAllGames = () =>
    glob.sync("content/games/**/*.json", {})
        .map(file => {
            return JSON.parse(fs.readFileSync(file))
        })

const saveData = (games) => {
    games.forEach(game => {
        const filePath = path.join(path.resolve("./content/games/"), cleanUpGamePath(game.path), "game.json")
        if (!fs.existsSync(filePath)) {
            fs.mkdirSync(path.dirname(filePath), { recursive: true })
        }
        fs.writeFileSync(filePath, JSON.stringify(game, null, 4))
    })
}

async function getAll() {
    const profile = await getProfile(config.ldjam.profileName)
    const feed = await getFeed(profile.data.path[1])
    let games = getAllGames()
    const newGameIds = filterOutExistingGames(games, feed.data.feed)
    if (newGameIds.length > 0) {
        const newGames = await getGames(newGameIds) // has a limit of 250 in the API
        games = games.concat(newGames.data.node)
        const images = getImages(games)
        await downloadAndSaveImages(images)
        console.log(`Found ${newGameIds.length} new games!`)
    } else {
        console.log("No new games found!")
    }
    const data = transformData(games)
    saveData(data)
    return data
}

export { getAll }
export default { getAll }