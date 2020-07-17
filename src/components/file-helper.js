import fs from 'fs'
import path from 'path'
import { stream } from './connector'
import getColors from 'get-image-colors'
import imageType from 'image-type'

const jsonIndentLength = 4
const writeStream = savePath => fs.createWriteStream(savePath)
const createFolderIfItDoesntExist = folderPath => {
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(path.dirname(folderPath), { recursive: true })
    return true
  }
  return false
}
const writeJson = (filePath, data) => fs.writeFileSync(filePath, JSON.stringify(data, null, jsonIndentLength))
const readJson = file => {
  if (!fs.existsSync(file)) {
    return null
  }
  return JSON.parse(fs.readFileSync(file))
}
const readFile = file => fs.readFileSync(file)
const join = function () {
  return path.posix.join(...arguments)
}
const resolve = function () {
  return path.resolve(...arguments)
}
const cleanUpGamePath = gamePath => gamePath.replace('/events/', '')

const createLocalImagePath = (url, gamePath, imagePath = '') => {
  return join(imagePath, cleanUpGamePath(gamePath), '/images/', path.basename(url))
}

const downloadAndSaveFile = (url, savePath) =>
  stream(url).then(
    response =>
      new Promise((resolve, reject) => {
        response.data
          .pipe(writeStream(savePath))
          .on('finish', () => resolve())
          .on('error', e => reject(e))
      })
  )

const downloadAndSaveImages = async (images) => {
  console.log('Checking for new images...')
  let count = 0
  for (const image of images) {
    const imagePath = createLocalImagePath(image.url, image.path, resolve('./static/'))
    if (createFolderIfItDoesntExist(imagePath)) {
      count += 1
      await downloadAndSaveFile(image.url, imagePath)
    }
  }
  if (count > 0) {
    console.log(`Done! Downloaded & saved ${count} images.`)
  } else {
    console.log('No new images detected.')
  }
}

const findGameCoverColors = async game => {
  const coverPath = createLocalImagePath(game.cover, game.path, resolve('./static/'))
  console.log('Attempting to read colors...')
  console.log(coverPath)
  const imgFile = readFile(coverPath)
  const imgType = imageType(imgFile)
  let colorsRGBA = []
  let colors = []
  await getColors(imgFile, imgType.mime).then(clrs => {
    colors = clrs
    colorsRGBA = colors.map(color => `rgba(${color._rgb.join(',')})`)
  })
  console.log("Finished!")
  return {
    colors: colors,
    css: Object.entries({
      one: colorsRGBA[0],
      two: colorsRGBA[1],
      three: colorsRGBA[2],
      four: colorsRGBA[3],
      five: colorsRGBA[4]
    }).map(entry => `--${entry[0]}: ${entry[1]};`).join('')
  }

}

export {
  writeStream,
  writeJson,
  readJson,
  readFile,
  createFolderIfItDoesntExist,
  join,
  resolve,
  createLocalImagePath,
  cleanUpGamePath,
  downloadAndSaveImages,
  findGameCoverColors
}
