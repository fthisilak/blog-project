// src/components/home/NewPosts/NewPostsList.js
import styles from './NewPostsList.module.css'

export default function NewPostsList() {
  const posts = [
    {
      id: 1,
      title: 'Yeni Blog Yazısı 1',
      author: { name: 'Yazar 1', avatar: '/api/placeholder/40/40' },
      image: '/api/placeholder/120/120'
    },
    // ... diğer yazılar
  ]

  return (
    <div className={styles.newPosts}>
      <h2 className={styles.sectionTitle}>Yeni Yazılar</h2>
      {posts.map(post => (
        <div key={post.id} className={styles.postItem}>
          <img src={post.image} alt={post.title} />
          <div className={styles.postInfo}>
            <h3>{post.title}</h3>
            <div className={styles.author}>
              <img src={post.author.avatar} alt={post.author.name} />
              <span>{post.author.name}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}