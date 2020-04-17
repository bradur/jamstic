// src/routes/blog/[slug].json.js

import path from 'path'
import fs from 'fs'
import marked from 'marked'
import hljs from 'highlight.js'

const getGame = gamePath => {
    const resPath = path.resolve(path.join('content/games/', gamePath.join(path.sep), '/game.json'))
    let fileContents
    try {
        fileContents = fs.readFileSync(resPath, 'utf-8')
    } catch (err) {
        return false
    }
    return JSON.parse(fileContents)
}

const respondNotFound = (response) => {
    response.writeHead(404, {
        'Content-Type': 'application/json'
    })
    response.end(
        JSON.stringify({
            message: `Not found`
        })
    )
}

export function get(request, response, next) {
    const { slug } = request.params
    const game = getGame(slug)

    if (!game) {
        respondNotFound(response)
        return
    }

    const renderer = new marked.Renderer()

    renderer.code = (source, lang) => {
        const { value: highlighted } = hljs.highlight(lang, source)
        return `<pre class='language-javascriptreact'><code>${highlighted}</code></pre>`
    }

    game.comments = game.comments.map(comment => {
        return {
            ...comment,
            html: marked(comment.body, { renderer })
        }
    })

    response.writeHead(200, {
        'Content-Type': 'application/json'
    })
    response.end(JSON.stringify({
        ...game,
        html: marked(game.body, { renderer })
    }))


}