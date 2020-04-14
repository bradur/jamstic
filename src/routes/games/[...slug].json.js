// src/routes/blog/[slug].json.js

import path from 'path'
import fs from 'fs'
import grayMatter from 'gray-matter'
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

    const { data, content } = grayMatter(game.body)
    const html = marked(content, { renderer })

    if (html) {
        response.writeHead(200, {
            'Content-Type': 'application/json'
        })
        response.end(JSON.stringify({ ...game, body: html }))
    } else {
        respondNotFound(response)
    }

}