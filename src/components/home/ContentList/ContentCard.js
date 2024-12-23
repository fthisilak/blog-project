// src/components/home/ContentList/ContentCard.js
import styles from './ContentCard.module.css'

export default function ContentCard({ post }) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={post.image} alt={post.title} />
        <span className={styles.category}>{post.category}</span>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{post.title}</h3>
        <p className={styles.excerpt}>{post.excerpt}</p>
        <div className={styles.meta}>
          <div className={styles.author}>
            <img src={post.author.avatar} alt={post.author.name} />
            <span>{post.author.name}</span>
          </div>
          <div className={styles.stats}>
            <span>{post.views} okuma</span>
            <span>•</span>
            <span>{post.likes} beğeni</span>
            <span>•</span>
            <span>{post.date}</span>
          </div>
        </div>
      </div>
    </article>
  )
}
