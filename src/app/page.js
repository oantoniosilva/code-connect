import styles from "./page.module.css"

import { CardPost } from "@/components/CardPost";
import { logger } from "@/logger";

async function getAllPosts() {
  const response = await fetch("http://localhost:3042/posts")
  if (!response.ok) {
    logger.error("Posts not found!")
    return []
  }
  logger.info("Posts successfully obtained.")
  return response.json()
}

export default async function Home() {
  const posts = await getAllPosts()

  return (
    <main className={styles.main}>
      {posts.map(post => <CardPost key={post.id} post={post} /> )}
    </main>
  );
}
