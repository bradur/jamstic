// src/routes/games/index.json.js
import { getAll } from './../../components/importer'

export async function get(request, response) {
    response.writeHead(200, {
        "Content-Type": "application/json"
    });
    const games = await(getAll())
    response.end(JSON.stringify(games))
}