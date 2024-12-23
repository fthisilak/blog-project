// src/components/blog/PostCard/PostCard.js
import Link from 'next/link'
import styles from './PostCard.module.css'

export default function PostCard({ post }) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={post.image} alt={post.title} />
        <span className={styles.category}>{post.category}</span>
      </div>
      <div className={styles.content}>
        <Link href={`/blog/${post.slug}`} className={styles.title}>
          <h3>{post.title}</h3>
        </Link>
        <p className={styles.excerpt}>{post.excerpt}</p>
        <div className={styles.meta}>
          <div className={styles.author}>
            <img src={post.author.avatar} alt={post.author.name} />
            <span>{post.author.name}</span>
          </div>
          <div className={styles.stats}>
            <span>{post.views} okuma</span>
            <span>{post.likes} beğeni</span>
          </div>
        </div>
      </div>
    </article>
  )
}