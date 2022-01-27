import axios from 'axios'

const get = url => axios.get(url)
const stream = url => axios({ url, responseType: 'stream' })

class LDJam {
  static _staticUrl() { return 'https://static.jam.vg/' }
  static apiUrl() { return 'https://api.ldjam.com/vx/' }
  static nodeUrl() { return `${this.apiUrl()}/node/` }
  static feedLimit() { return 50 } // 50 is max limit in ldjam API. won't hit that in a while
  static getProfile(name) {
    return get(`${this.nodeUrl()}walk/1/users/${name}`)
  }

  static getFeed(id) {
    return get(`${this.nodeUrl()}feed/${id}/authors/item/game?limit=${this.feedLimit()}`)
  }

  static getNodes(nodeIds) {
    return get(`${this.apiUrl()}/node2/get/${nodeIds.join('+')}`)
  }

  static getPlatforms() {
    return get(`${this.apiUrl()}/tag/get/platform`)
  }

  static getComments(nodeId) {
    return get(`${this.apiUrl()}/comment/getbynode/${nodeId}`)
  }

  static staticUrl(url) {
    return `${this._staticUrl()}/${url}`
  }
}

class LudumDare {
  static getProfile(name) {
    return get(`http://ludumdare.com/compo/author/${name}/`)
  }

  static getEntry(link) {
    return get(link)
  }
}

class Alakajam {
  static _staticUrl() { return 'https://alakajam.com' }
  static getProfile(name) {
    return get(`${this._staticUrl()}/api/user/${name}`)
  }
  static getEntry(entryId) {
    return get(`${this._staticUrl()}/api/entry/${entryId}`)
  }
  static getEvent(eventId) {
    return get(`${this._staticUrl()}/api/event/${eventId}`)
  }
  static staticUrl(url) {
    return `${this._staticUrl()}/${url}`
  }
  static getRatingTitle(index) {
    return [
      "Overall",
      "Graphics",
      "Audio",
      "Gameplay",
      "Originality",
      "Theme"
    ][index - 1]
  }
}

class GlobalGameJam {
  static _staticUrl () { return 'https://globalgamejam.org' }
  static getProfile (name) {
    return get(`${this._staticUrl()}/users/${name}/`)
  }

  static getEntry (link) {
    return get(link)
  }
}

export { LDJam, LudumDare, Alakajam, GlobalGameJam, stream }
