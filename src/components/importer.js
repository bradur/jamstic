import axios from 'axios'
import fs from 'fs'
import _ from 'lodash'
import path from 'path'
import config from './../../config/config'

const apiUrl = 'https://api.ldjam.com/vx/node/'
const staticUrl = "https://static.jam.vg/"
const feedLimit = 50 // 50 is max limit in ldjam API. won't hit that in a while

const getProfile = (name) => axios.get(`${apiUrl}walk/1/users/${name}`);
const getFeed = (id) => axios.get(`${apiUrl}feed/${id}/authors/item/game?limit=${feedLimit}`)
const getGames = (feed) => axios.get(`${apiUrl}get/${feed.map(g => g.id).join('+')}`)

const cleanUpUrl = (url) => {
    return url.replace(/\(\/\/\//g, '').replace(/\)/g, '')
}

const urlRegex = /(\(\/\/\/.*?\))/g // matches start: '(///' end: ')'
const formats = [".png", ".jpg", '.gif']

const findImages = (string) => {
    return string
        .match(urlRegex)
        .map(url => cleanUpUrl(url))
        .filter(match => {
            return formats.some(
                format => match.toLowerCase().endsWith(format)
            )
        })
}

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

const getImages = (data) => {
    const images = []
    data.forEach(game => {
        images.push(...findImages(game.body).map(url => ({ url, path: game.path })))
        images.push({ url: game.meta.cover.replace(/\/\/\//g, ''), path: game.path })
    })
    return images
}

const createLocalImagePath = (url, gamePath, imagePath = '') => {
    return path.posix.join(imagePath, cleanUpGamePath(gamePath), "/images/", path.basename(url))
}

const makeUrlsLocal = (string, gamePath) => {
    findImages(string).forEach(url => {
        string = string.replace(url, createLocalImagePath(url, gamePath))
    })
    return string
}

const getEventNameFromPath = (path) => {
    const parts = path.split("/")
    return _.startCase(parts[2].replace(/-/g, " ") + " " + parts[3])
}

const transformData = (data) => {
    return data.reverse().map(game => {
        return {
            ...game,
            body: makeUrlsLocal(game.body, game.path),
            eventName: getEventNameFromPath(game.path),
            cover: createLocalImagePath(game.meta.cover, game.path),
        }
    })
}


async function getAll(profileName) {
    const profile = await getProfile(config.ldjam.profileName)
    const feed = await getFeed(profile.data.path[1])
    const games = await getGames(feed.data.feed) // has a limit of 250 in the API
    const images = getImages(games.data.node)
    await downloadAndSaveImages(images)
    return transformData(games.data.node)
}

export { getAll }
export default { getAll }