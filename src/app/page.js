// src/app/page.js
'use client'
import { useState, useEffect } from 'react'
import Header from '@/components/layout/Header/Header'
import Footer from '@/components/layout/Footer/Footer'
import SearchBar from '@/components/home/SearchBar/SearchBar'
import HeroSlider from '@/components/home/HeroSlider/HeroSlider'
import ContentCard from '@/components/home/ContentList/ContentCard'
import ScrollTopButton from '@/components/common/ScrollTopButton/ScrollTopButton'
import styles from './page.module.css'

const samplePosts = [
  {
    id: 1,
    title: 'Modern Web Teknolojileri ve Geleceği',
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
  {
    id: 3,
    title: 'Minimal Yaşam Sanatı',
    excerpt: 'Sade yaşamın incelikleri ve minimalist bir hayat tarzının mutluluğa etkileri üzerine düşünceler...',
    author: { 
      name: 'Mehmet Demir', 
      avatar: '/images/authors/author-3.jpg' 
    },
    image: '/images/blog/post-3.jpg',
    views: 967,
    likes: 72,
    date: '9 Aralık 2024',
    category: 'Yaşam'
  },
  {
    id: 4,
    title: 'Yapay Zeka ve Günlük Hayatımız',
    excerpt: 'Yapay zekanın günlük hayatımıza etkileri ve gelecekte bizi bekleyen teknolojik yenilikler...',
    author: { 
      name: 'Ayşe Yıldız', 
      avatar: '/images/authors/author-4.jpg' 
    },
    image: '/images/blog/post-4.jpg',
    views: 1567,
    likes: 89,
    date: '8 Aralık 2024',
    category: 'Teknoloji'
  },
  {
    id: 5,
    title: 'Dünya Mutfaklarından Lezzetler',
    excerpt: 'Farklı kültürlerin mutfaklarından özel tarifler ve yemek kültürü üzerine bilgiler...',
    author: { 
      name: 'Can Öztürk', 
      avatar: '/images/authors/author-5.jpg' 
    },
    image: '/images/blog/post-5.jpg',
    views: 743,
    likes: 38,
    date: '7 Aralık 2024',
    category: 'Yemek'
  }
];

// HeroSlider için slide'lar
const heroSlides = [
  {
    id: 1,
    image: '/images/hero/slide-1.jpg',
    title: 'Teknoloji Dünyasındaki Son Gelişmeler',
    description: 'Teknoloji dünyasının en son trendleri ve gelişmeleri'
  },
  {
    id: 2,
    image: '/images/hero/slide-2.jpg',
    title: 'Sürdürülebilir Yaşam Rehberi',
    description: 'Daha yeşil bir dünya için ipuçları'
  },
  {
    id: 3,
    image: '/images/blog/hero-3.jpg',
    title: 'Sağlıklı Yaşam ve Beslenme',
    description: 'Sağlıklı bir yaşam için öneriler'
  }
];

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarBox}>
        <h3>Platform İstatistikleri</h3>
        <div className={styles.statItem}>
          <span>Toplam Üye</span>
          <strong>1,234</strong>
        </div>
        <div className={styles.statItem}>
          <span>Toplam Yazı</span>
          <strong>3,567</strong>
        </div>
      </div>

      <div className={styles.sidebarBox}>
        <h3>Sosyal Medya</h3>
        <div className={styles.socialLinks}>
          <a href="#" className={styles.socialLink}>Twitter</a>
          <a href="#" className={styles.socialLink}>Instagram</a>
          <a href="#" className={styles.socialLink}>LinkedIn</a>
        </div>
      </div>

      <div className={styles.sidebarBox}>
        <h3>En Çok Okunanlar</h3>
        <div className={styles.popularPosts}>
          {samplePosts.slice(0, 3).map(post => (
            <div key={post.id} className={styles.popularPost}>
              <h4>{post.title}</h4>
              <span>{post.views} okuma</span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}

export default function Home() {
  const [showAllPosts, setShowAllPosts] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const displayedPosts = showAllPosts ? samplePosts : samplePosts.slice(0, 3)

  if (!isClient) {
    return null // İlk render için boş dön
  }

  return (
    <>
      <Header />
      <main className={styles.mainContent}>
        <SearchBar />
        <HeroSlider slides={heroSlides} />
        
        <div className={styles.contentWrapper}>
          <div className={styles.mainColumn}>
            <section className={styles.featuredPosts}>
              {displayedPosts.map(post => (
                <ContentCard key={post.id} post={post} />
              ))}
              
              <button 
                className={styles.showMoreButton}
                onClick={() => setShowAllPosts(!showAllPosts)}
              >
                <span>{showAllPosts ? 'Daha Az Göster' : 'Tümünü Göster'}</span>
                <svg 
                  className={`${styles.arrow} ${showAllPosts ? styles.arrowUp : ''}`}
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </button>
            </section>
          </div>
          <Sidebar />
        </div>
      </main>
      <Footer />
      <ScrollTopButton />
    </>
  )
}