// src/app/authors/page.js
'use client'
import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/layout/Header/Header'
import Footer from '@/components/layout/Footer/Footer'
import styles from './page.module.css'

const authors = [
  {
    id: 1,
    name: 'Ahmet Yılmaz',
    role: 'Senior Teknoloji Yazarı',
    bio: 'Yazılım geliştirme ve teknoloji alanında 10+ yıl deneyim',
    avatar: '/images/authors/author-1.jpg',
    stats: {
      posts: 45,
      followers: 1200,
      views: 15000
    },
    socialLinks: {
      twitter: '#',
      linkedin: '#',
      website: '#'
    }
  },
  // ... diğer yazarlar
];

export default function AuthorsPage() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredAuthors = authors.filter(author =>
    author.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.pageHeader}>
          <h1>Yazarlarımız</h1>
          <p>Deneyimli yazarlarımızla tanışın</p>
          
          <div className={styles.searchBox}>
            <input
              type="text"
              placeholder="Yazar ara..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.searchInput}
            />
          </div>
        </div>

        <div className={styles.authorGrid}>
          {filteredAuthors.map(author => (
            <Link 
              href={`/authors/${author.id}`} 
              key={author.id} 
              className={styles.authorLink}
            >
              <div className={styles.authorCard}>
                <div className={styles.authorHeader}>
                  <img 
                    src={author.avatar} 
                    alt={author.name} 
                    className={styles.avatar}
                  />
                  <h2>{author.name}</h2>
                  <span className={styles.role}>{author.role}</span>
                </div>

                <p className={styles.bio}>{author.bio}</p>

                <div className={styles.stats}>
                  <div className={styles.statItem}>
                    <strong>{author.stats.posts}</strong>
                    <span>Yazı</span>
                  </div>
                  <div className={styles.statItem}>
                    <strong>{author.stats.followers}</strong>
                    <span>Takipçi</span>
                  </div>
                  <div className={styles.statItem}>
                    <strong>{author.stats.views}</strong>
                    <span>Görüntülenme</span>
                  </div>
                </div>

                <div className={styles.socialLinks}>
                  <span className={styles.socialLink}>Twitter</span>
                  <span className={styles.socialLink}>LinkedIn</span>
                  <span className={styles.socialLink}>Website</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}