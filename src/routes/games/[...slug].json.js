// src/routes/blog/[slug].json.js

import path from 'path'
import fs from 'fs'
import grayMatter from 'gray-matter'
import marked from 'marked'
import hljs from 'highlight.js'

const getGame = gamePath => {
    const resPath = path.resolve(path.join('content/games/', gamePath.join(path.sep),  '/game.json'))
    return JSON.parse(fs.readFileSync(resPath, 'utf-8'))
}

export function get(request, response, next) {
    const { slug } = request.params
    const game = getGame(slug)
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
        response.writeHead(404, {
            'Content-Type': 'application/json'
        })
        response.end(
            JSON.stringify({
                message: `Not found`
            })
        )
    }
}