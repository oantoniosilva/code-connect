import { logger } from "@/logger"

async function getPostBySlug(slug) {
  const url = `http://localhost:3042/posts?slug=${slug}`
  const response = await fetch(url)
  if (!response.ok) {
    logger.error("Posts not found!")
    return {}
  }
  logger.info("Posts successfully obtained.")
  
  const data = await response.json()

  if (data.length == 0) {
    return {}
  }
  return data[0]
}

export default async function Posts({ params }) {
  const post = getPostBySlug(params.slug)

  return <h1>Posts</h1>
}