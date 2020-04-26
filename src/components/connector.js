import axios from 'axios'

const apiUrl = 'https://api.ldjam.com/vx/'
const nodeUrl = `${apiUrl}/node/`
const staticUrl = 'https://static.jam.vg/'
const feedLimit = 50 // 50 is max limit in ldjam API. won't hit that in a while
const get = url => axios.get(url)
const stream = url => axios({ url, responseType: 'stream' })

class LDJam {
  static getProfile (name) {
    return get(`${nodeUrl}walk/1/users/${name}`)
  }

  static getFeed (id) {
    return get(`${nodeUrl}feed/${id}/authors/item/game?limit=${feedLimit}`)
  }

  static getNodes (nodeIds) {
    return get(`${apiUrl}/node2/get/${nodeIds.join('+')}`)
  }

  static getPlatforms () {
    return get(`${apiUrl}/tag/get/platform`)
  }

  static getComments (nodeId) {
    return get(`${apiUrl}/comment/getbynode/${nodeId}`)
  }

  static staticUrl (url) {
    return `${staticUrl}/${url}`
  }
}

class LudumDare {
  static getProfile (name) {
    return get(`http://ludumdare.com/compo/author/${name}/`)
  }

  static getEntry (link) {
    return get(link)
  }
}

export { LDJam, LudumDare, stream }
