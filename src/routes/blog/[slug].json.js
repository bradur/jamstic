// src/routes/blog/[slug].json.js

import path from 'path'
import fs from 'fs'
import grayMatter from 'gray-matter'
import marked from 'marked'
import hljs from 'highlight.js'

const getPost = fileName =>
  fs.readFileSync(path.resolve('content/blogs/', `${fileName}.md`), 'utf-8')

export function get (request, response, next) {
  const { slug } = request.params

  const post = getPost(slug)
  const renderer = new marked.Renderer()

  renderer.code = (source, lang) => {
    const { value: highlighted } = hljs.highlight(lang, source)
    return `<pre class='language-javascriptreact'><code>${highlighted}</code></pre>`
  }

  const { data, content } = grayMatter(post)
  const html = marked(content, { renderer })

  if (html) {
    response.writeHead(200, {
      'Content-Type': 'application/json'
    })
    response.end(JSON.stringify({ html, ...data }))
  } else {
    response.writeHead(404, {
      'Content-Type': 'application/json'
    })
    response.end(
      JSON.stringify({
        message: 'Not found'
      })
    )
  }
}
