// src/components/blog/PostDetail/PostDetail.js
export default function PostDetail({ post }) {
    return (
      <article className={styles.article}>
        <div className={styles.heroImage}>
          <img src={post.image} alt={post.title} />
        </div>
        <div className={styles.content}>
          <header className={styles.header}>
            <span className={styles.category}>{post.category}</span>
            <h1 className={styles.title}>{post.title}</h1>
            <div className={styles.meta}>
              <span>{post.publishDate}</span>
              <span>{post.readTime}</span>
            </div>
          </header>
          <div 
            className={styles.body}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          <footer className={styles.footer}>
            <div className={styles.tags}>
              {post.tags?.map(tag => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
            <div className={styles.stats}>
              <span>{post.views} görüntülenme</span>
              <span>{post.likes} beğeni</span>
            </div>
          </footer>
        </div>
      </article>
    )
  }