import Image from "next/image";

import styles from "./cardPost.module.css";

import { Avatar } from "@/components/Avatar";

export const CardPost = ({ post }) => {
  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <figure>
          <Image
            src={post.cover}
            alt={`Post cover ${post.title}`}
            width={438}
            height={134}
            priority
          />
        </figure>
      </header>

      <section className={styles.section}>
        <h2>{post.title}</h2>
        <p>{post.text}</p>
      </section>

      <footer className={styles.footer}>
        <Avatar imageSrc={post.author.avatar} author={post.author.username} />
      </footer>
    </article>
  );
};
