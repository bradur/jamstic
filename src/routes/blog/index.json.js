// src/routes/blog/index.json.js

import fs from 'fs'
import path from 'path'
import grayMatter from 'gray-matter'

const getAllPosts = () =>
  fs.readdirSync('content/blogs/', { withFileTypes: true })
    .filter(file => file.isFile())
    .map(file => {
      const post = fs.readFileSync(path.resolve('content/blogs/', file.name), 'utf-8')
      const gmed = grayMatter(post)
      return gmed.data
    })

export function get (request, response) {
  response.writeHead(200, {
    'Content-Type': 'application/json'
  })
  const posts = getAllPosts()
  response.end(JSON.stringify(posts))
}
