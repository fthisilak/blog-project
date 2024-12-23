// src/app/profile/page.js
'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Header from '@/components/layout/Header/Header'
import Footer from '@/components/layout/Footer/Footer'
import styles from './page.module.css'

const userData = {
  name: 'Ahmet Yılmaz',
  email: 'ahmet@example.com',
  avatar: '/images/authors/author-1.jpg',
  bio: 'Teknoloji ve yazılım üzerine yazılar yazıyorum.',
  stats: {
    posts: 23,
    views: 12500,
    likes: 840,
    followers: 156
  },
  posts: [
    {
      id: 1,
      title: 'React Hooks Kullanımı',
      status: 'published',
      publishDate: '10 Aralık 2024',
      views: 450,
      likes: 32
    }
  ]
}

export default function ProfilePage() {
  const [isClient, setIsClient] = useState(false)
  const [activeTab, setActiveTab] = useState('posts')

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null // İlk render için boş dönüyoruz
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.profileHeader}>
            <div className={styles.profileInfo}>
              <div className={styles.avatarSection}>
                {userData.avatar && (
                  <img 
                    src={userData.avatar} 
                    alt={userData.name} 
                    className={styles.avatar}
                  />
                )}
              </div>
              <div className={styles.userInfo}>
                <div className={styles.nameSection}>
                  <h1>{userData.name}</h1>
                  <Link href="/profile/settings" className={styles.settingsButton}>
                    <svg 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="3"/>
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                    </svg>
                    <span>Ayarlar</span>
                  </Link>
                </div>
                <p className={styles.bio}>{userData.bio}</p>
              </div>
            </div>

            <div className={styles.statsGrid}>
              {Object.entries(userData.stats).map(([key, value]) => (
                <div key={key} className={styles.statItem}>
                  <strong>{value.toLocaleString()}</strong>
                  <span>{key === 'posts' ? 'Yazı' : 
                         key === 'views' ? 'Görüntülenme' :
                         key === 'likes' ? 'Beğeni' : 'Takipçi'}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.content}>
            <div className={styles.tabs}>
              <button
                type="button"
                className={`${styles.tab} ${activeTab === 'posts' ? styles.active : ''}`}
                onClick={() => setActiveTab('posts')}
              >
                Yazılarım
              </button>
              <button
                type="button"
                className={`${styles.tab} ${activeTab === 'drafts' ? styles.active : ''}`}
                onClick={() => setActiveTab('drafts')}
              >
                Taslaklar
              </button>
            </div>

            {activeTab === 'posts' && (
              <div className={styles.posts}>
                {userData.posts.map(post => (
                  <div key={post.id} className={styles.postCard}>
                    <div className={styles.postInfo}>
                      <h3>{post.title}</h3>
                      <span>{post.publishDate}</span>
                    </div>
                    <div className={styles.postStats}>
                      <span>{post.views.toLocaleString()} görüntülenme</span>
                      <span>{post.likes.toLocaleString()} beğeni</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}