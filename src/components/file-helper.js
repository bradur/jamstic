import fs from 'fs'
import path from 'path'

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
const readJson = file => JSON.parse(fs.readFileSync(file))
const join = function () {
    return path.posix.join(...arguments);
}
const resolve = function () {
    return path.resolve(...arguments)
}
const cleanUpGamePath = gamePath => gamePath.replace('/events/', '')

const createLocalImagePath = (url, gamePath, imagePath = '') => {
    return join(imagePath, cleanUpGamePath(gamePath), "/images/", path.basename(url))
}

export {
    writeStream,
    writeJson,
    readJson,
    createFolderIfItDoesntExist,
    join,
    resolve,
    createLocalImagePath,
    cleanUpGamePath
}