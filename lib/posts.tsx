import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import marked from 'marked'
import hljs from 'highlight.js'

const postsDirectory = path.join(process.cwd(), 'posts')

export async function getSortedPostsData () {
  const ids = getAllPostIds()
  const allPostsData =
    await Promise.all(ids.map(async id => (await getPostData(id))[0]))

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllPostIds () {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map(fileName => {
    return fileName.replace(/\.md$/, '')
  })
}

interface PostData {
    id: string,
    date: string,
    title: string,
}

export async function getPostData (id: string): Promise<[PostData, String]> {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const matterResult = matter(fileContents)

  return [{
    id: id,
    date: matterResult.data.date,
    title: matterResult.data.title
  }, matterResult.content]
}

export async function getPostDataAndHtml (id: string) {
  const [postData, fileContents] = await getPostData(id)

  // Use remark to generate html from the markdown
  const processedContent = marked(fileContents, {
    highlight: function (code, lang) {
      const validLanguage = hljs.getLanguage(lang) ? lang : 'plaintext'
      return hljs.highlight(validLanguage, code).value
    }
  })
  const contentHtml = processedContent.toString()

  return {
    contentHtml: contentHtml,
    ...postData
  }
}
