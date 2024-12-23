// src/app/authors/[id]/page.js
'use client'
import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/layout/Header/Header'
import Footer from '@/components/layout/Footer/Footer'
import styles from './page.module.css'

const authorData = {
  id: 1,
  name: 'Ahmet Yılmaz',
  avatar: '/images/authors/author-1.jpg',
  bio: '10+ yıllık deneyimli teknoloji yazarı. Yazılım geliştirme ve modern teknolojiler üzerine yazılar yazıyorum.',
  stats: {
    followers: 1200,
    posts: 45,
    likes: 2300,
    views: 15000
  },
  badges: [
    { id: 1, name: 'Teknoloji Uzmanı', icon: '🖥️' },
    { id: 2, name: 'Top Yazar', icon: '⭐' },
    { id: 3, name: 'Web Geliştirme', icon: '🌐' }
  ],
  posts: [
    {
      id: 1,
      title: 'Modern Web Teknolojileri',
      excerpt: 'Web teknolojilerinin geleceği ve modern yaklaşımlar hakkında detaylı bir inceleme...',
      image: '/images/blog/post-1.jpg',
      date: '10 Aralık 2024',
      readTime: '5 dk',
      category: 'Teknoloji'
    },
    {
      id: 2,
      title: 'React ve Next.js ile Modern Web Uygulamaları',
      excerpt: 'Modern web framework\'lerini kullanarak nasıl hızlı ve etkili uygulamalar geliştirebiliriz...',
      image: '/images/blog/post-2.jpg',
      date: '8 Aralık 2024',
      readTime: '7 dk',
      category: 'Yazılım'
    },
    // ... diğer yazılar
  ]
};

export default function AuthorDetailPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        {/* Profil Bölümü */}
        <section className={styles.profileSection}>
          <div className={styles.profileHeader}>
            <img src={authorData.avatar} alt={authorData.name} className={styles.profileImage} />
            <h1>{authorData.name}</h1>
            <p className={styles.bio}>{authorData.bio}</p>
          </div>

          <div className={styles.statsContainer}>
            <div className={styles.statsGrid}>
              <div className={styles.statItem}>
                <strong>{authorData.stats.followers}</strong>
                <span>Takipçi</span>
              </div>
              <div className={styles.statItem}>
                <strong>{authorData.stats.posts}</strong>
                <span>Yazı</span>
              </div>
              <div className={styles.statItem}>
                <strong>{authorData.stats.likes}</strong>
                <span>Beğeni</span>
              </div>
              <div className={styles.statItem}>
                <strong>{authorData.stats.views}</strong>
                <span>Okunma</span>
              </div>
            </div>
          </div>

          <div className={styles.badges}>
            {authorData.badges.map(badge => (
              <div key={badge.id} className={styles.badge}>
                <span>{badge.icon}</span>
                <span>{badge.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Yazılar Bölümü */}
        <section className={styles.postsSection}>
          <h2 className={styles.sectionTitle}>Yazılar</h2>
          <div className={styles.postsGrid}>
            {authorData.posts.map(post => (
              <Link href={`/post/${post.id}`} key={post.id} className={styles.postCard}>
                <div className={styles.postImage}>
                  <img src={post.image} alt={post.title} />
                  <span className={styles.category}>{post.category}</span>
                </div>
                <div className={styles.postContent}>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <div className={styles.postMeta}>
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime} okuma</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}