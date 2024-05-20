import Image from "next/image";
import Link from "next/link";
import styles from "./cardPost.module.css";

import { Avatar } from "@/components/Avatar";

export const CardPost = ({ post, highlight }) => {
  return (
    <Link href={`/posts/${post.slug}`} className={styles.link}>
      <article className={styles.card} style={{ width: highlight ? 993 : 486}}>
        <header className={styles.header}>
          <figure style={{ height: highlight ? 300 : 133}}>
            <Image
              src={post.cover}
              fill
              alt={`Post cover ${post.title}`}
            />
          </figure>
        </header>

        <section className={styles.section}>
          <h2>{post.title}</h2>
          <p>{post.text}</p>
        </section>

        <footer className={styles.footer}>
          <Avatar 
            imageSrc={post.author.avatar} 
            name={post.author.username} 
          />
        </footer>
      </article>
    </Link>
  );
};
