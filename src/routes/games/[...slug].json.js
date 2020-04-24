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

    renderer.image = (href, title, text) => {
        return `<div class='jamstic-image'>
            <a href='${href}'><img src='${href}'></a>
            <div class='jamstic-image-title'>${text}</div>
        </div>`;
    }

    renderer.link = (href, title, text) => {
        const url = new URL(href);
        if (url.hostname === 'www.youtube.com') {
            const videoHash = url.searchParams.get('v');
            if (videoHash) {
                const iframeOptions = Object.entries({
                    width: 560,
                    height: 315,
                    frameborder: 0,
                    allowfullscreen: ""
                }).map(option => `${option[0]}='${option[1]}'`).join(" ")
                return `<iframe src="//www.youtube.com/embed/${videoHash}" ${iframeOptions}></iframe>`
            }
        }
        return `<a href='${href}' title='${title}'>${text}</a>`
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