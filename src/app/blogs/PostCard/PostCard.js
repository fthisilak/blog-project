// src/components/blog/PostCard/PostCard.js
import Link from 'next/link'
import styles from './PostCard.module.css'

export default function PostCard({ post }) {
  // Post verisi kontrolü
  if (!post) return null;

  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img 
          src={post.image || '/images/blog/default-post.jpg'} 
          alt={post.title} 
        />
        {post.category && (
          <span className={styles.category}>{post.category}</span>
        )}
      </div>
      <div className={styles.content}>
        <Link href={`/blog/${post.slug}`} className={styles.title}>
          <h3>{post.title}</h3>
        </Link>
        {post.excerpt && (
          <p className={styles.excerpt}>{post.excerpt}</p>
        )}
        <div className={styles.meta}>
          {post.author && (
            <div className={styles.author}>
              <img 
                src={post.author.avatar || '/images/authors/default-avatar.jpg'} 
                alt={post.author.name || 'Yazar'} 
                className={styles.authorAvatar}
              />
              <span>{post.author.name || 'İsimsiz Yazar'}</span>
            </div>
          )}
          <div className={styles.stats}>
            {post.views !== undefined && (
              <span>{post.views} okuma</span>
            )}
            {post.likes !== undefined && (
              <span>{post.likes} beğeni</span>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}