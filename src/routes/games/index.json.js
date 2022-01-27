// src/routes/games/index.json.js
import ldjam from './../../components/ldjamImporter'
import ludumdare from './../../components/ludumdareImporter'
import alakajam from './../../components/alakajamImporter'
import globalgamejam from './../../components/globalgamejamimporter'
import _ from 'lodash'

export async function get(request, response) {
  response.writeHead(200, {
    'Content-Type': 'application/json'
  })
  console.log("noerror")
  const download = true
  const ggjGames = await globalgamejam.getAll(download)
  let alakajamGames = await alakajam.getAll(download)
  let ldjamGames = await ldjam.getAll(download)
  let ludumDareGames = await ludumdare.getAll(download)
  ldjamGames = _.orderBy(ldjamGames, 'eventName', 'desc')
  ludumDareGames = _.orderBy(ludumDareGames, 'eventName', 'desc')
  alakajamGames = _.orderBy(alakajamGames, 'event_id', 'desc')
  const games = [
    { name: "LDJam", games: ldjamGames },
    { name: "Ludum Dare", games: ludumDareGames },
    { name: "Alakajam", games: alakajamGames },
    { name: "Global Game Jam", games: ggjGames }
  ]
  response.end(JSON.stringify(games))
}
