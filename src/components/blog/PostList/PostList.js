// src/components/blog/PostList/PostList.js
import PostCard from '../PostCard/PostCard'
import styles from './PostList.module.css'

export default function PostList({ posts, title }) {
  return (
    <section className={styles.postList}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <div className={styles.grid}>
        {posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  )
}