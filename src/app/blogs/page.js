// src/app/blogs/page.js
'use client'
import { useState } from 'react'
import Header from '@/components/layout/Header/Header'
import Footer from '@/components/layout/Footer/Footer'
import PostList from '@/components/blog/PostList/PostList'
import styles from './page.module.css'

// Örnek veriler
const posts = [
  {
    id: 1,
    title: 'Modern Web Teknolojileri ve Geleceği',
    slug: 'modern-web-teknolojileri',
    excerpt: 'Günümüzde web teknolojileri hızla gelişiyor. Bu yazıda modern web teknolojilerini ve gelecekteki trendleri inceliyoruz...',
    author: { 
      name: 'Ahmet Yılmaz', 
      avatar: '/images/authors/author-1.jpg' 
    },
    image: '/images/blog/post-1.jpg',
    views: 1234,
    likes: 56,
    date: '11 Aralık 2024',
    category: 'Teknoloji'
  },
  {
    id: 2,
    title: 'Sürdürülebilir Yaşam İçin İpuçları',
    slug: 'surdurulebilir-yasam',
    excerpt: 'Doğayı korumak için günlük hayatımızda yapabileceğimiz küçük ama etkili değişiklikleri keşfedin...',
    author: { 
      name: 'Zeynep Kaya', 
      avatar: '/images/authors/author-2.jpg' 
    },
    image: '/images/blog/post-2.jpg',
    views: 856,
    likes: 43,
    date: '10 Aralık 2024',
    category: 'Yaşam'
  },
  // ... diğer blog yazıları
];

const categories = [
  'Tümü',
  'Teknoloji',
  'Yaşam',
  'Seyahat',
  'Bilim',
  'Sanat'
];

export default function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState('Tümü')
  const [sortBy, setSortBy] = useState('latest')

  // Kategoriye göre filtreleme
  const filteredPosts = selectedCategory === 'Tümü'
    ? posts
    : posts.filter(post => post.category === selectedCategory);

  // Sıralama
  const sortedPosts = [...filteredPosts].sort((a, b) => {
    if (sortBy === 'latest') {
      return new Date(b.date) - new Date(a.date);
    }
    if (sortBy === 'popular') {
      return b.views - a.views;
    }
    return 0;
  });

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.pageHeader}>
          <h1>Blog Yazıları</h1>
          <p>En güncel yazıları keşfedin</p>
        </div>

        <div className={styles.filters}>
          <div className={styles.categories}>
            {categories.map(category => (
              <button
                key={category}
                className={`${styles.categoryButton} ${selectedCategory === category ? styles.active : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className={styles.sortOptions}>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className={styles.sortSelect}
            >
              <option value="latest">En Yeni</option>
              <option value="popular">En Popüler</option>
            </select>
          </div>
        </div>

        <PostList posts={sortedPosts} />
      </main>
      <Footer />
    </>
  )
}