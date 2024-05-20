import Link from "next/link";
import { logger } from "@/logger";

import styles from "./page.module.css"

import { CardPost } from "@/components/CardPost";

async function getAllPosts(page) {
  const response = await fetch(`http://localhost:3042/posts?_page=${page}&_per_page=6`)
  if (!response.ok) {
    logger.error("Posts not found!")
    return []
  }
  logger.info("Posts successfully obtained.")
  return response.json()
}

export default async function Home({ searchParams }) {
  const currentPage = searchParams?.page || 1
  const { data: posts, prev, next } = await getAllPosts(currentPage)

  return (
    <main className={styles.grid}>
      {posts.map(post => <CardPost key={post.id} post={post} />)}
      <div className={styles.links}>
        {prev && <Link href={`/?page=${prev}`}>Previous Page</Link>}
        {next && <Link href={`/?page=${next}`}>Next Page</Link>}
      </div>
    </main>
  );
}
