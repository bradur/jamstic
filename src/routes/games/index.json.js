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
  let alakajamGames = await alakajam.getAll(download)
  alakajamGames = _.orderBy(alakajamGames, 'event_id', 'desc')

  let ldjamGames = await ldjam.getAll(download)
  ldjamGames = _.orderBy(ldjamGames, 'eventName', 'desc')
  let ludumDareGames = await ludumdare.getAll(download)
  ludumDareGames = _.orderBy(ludumDareGames, 'eventName', 'desc')

  const ggjGames = await globalgamejam.getAll(download)

  const games = [
    { name: "LDJam", games: ldjamGames },
    { name: "Alakajam", games: alakajamGames },
    { name: "Ludum Dare", games: ludumDareGames },
    { name: "Global Game Jam", games: ggjGames }
  ]
  response.end(JSON.stringify(games))
}
