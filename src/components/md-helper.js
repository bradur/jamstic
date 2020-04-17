const urlRegex = /(\(\/\/\/.*?\))/g // matches start: '(///' end: ')'
const formats = ['.png)', '.jpg)', '.gif)']

const cleanUpUrl = url => url.replace(/\(\/\/\//g, '').replace(/\)/g, '')

const findImageUrls = string => {
    let urls = string.match(urlRegex)
    if (urls !== null) {
        urls = urls.filter(match => {
            return formats.some(
                format => match.toLowerCase().endsWith(format)
            )
        })
    } else {
        urls = []
    }
    return urls
}

const getCleanUrls = string => findImageUrls(string).map(url => cleanUpUrl(url))

export { findImageUrls, getCleanUrls }