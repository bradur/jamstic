// src/routes/games/index.json.js
import ldjam from './../../components/ldjamImporter'
import ludumdare from './../../components/ludumdareImporter'
import _ from 'lodash'

export async function get (request, response) {
  response.writeHead(200, {
    'Content-Type': 'application/json'
  })
  const ldjamGames = await (ldjam.getAll())
  const ludumDareGames = await (ludumdare.getAll())
  const games = _.orderBy(ldjamGames.concat(ludumDareGames), 'eventName', 'desc')
  response.end(JSON.stringify(games))
}
