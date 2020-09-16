import matter from 'gray-matter'
import marked from 'marked'

export async function getAllPosts() {
  const context = require.context('../../_posts', false, /\.md$/)
  const posts = []

  for (const key of context.keys()){
    const post = key.slice(2)
    const content = await import(`../../_posts/${post}`)
    const meta = matter(content.default)

    posts.push({
      slug: post.replace('.md', ''),
      title: meta.data.title
    })
  }

  return posts
}

export async function getPostBySlug(slug: string) {
  const fileContent = await import(`../../_posts/${slug}.md`)

  const meta = matter(fileContent.default)
  const content = marked(meta.content)   

  return {
    title: meta.data.title, 
    description: meta.data.description, 
    content,
  }
}