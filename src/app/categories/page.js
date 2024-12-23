// src/app/categories/page.js
'use client'
import { useState } from 'react'
import Header from '@/components/layout/Header/Header'
import Footer from '@/components/layout/Footer/Footer'
import CategoryCard from '@/components/categories/CategoryCard/CategoryCard'
import styles from './page.module.css'

const categories = [
  {
    id: 1,
    name: 'Teknoloji',
    slug: 'teknoloji',
    postCount: 42,
    description: 'Yazılım, donanım ve dijital dünya hakkında her şey'
  },
  {
    id: 2,
    name: 'Yaşam',
    slug: 'yasam',
    postCount: 35,
    description: 'Yaşam tarzı, sağlık ve kişisel gelişim'
  },
  {
    id: 3,
    name: 'Yemek',
    slug: 'yemek',
    postCount: 28,
    description: 'Tarifler, restoran önerileri ve mutfak kültürü'
  },
  {
    id: 4,
    name: 'Seyahat',
    slug: 'seyahat',
    postCount: 31,
    description: 'Gezi yazıları, seyahat önerileri ve deneyimler'
  },
  {
    id: 5,
    name: 'Fotoğraf',
    slug: 'fotograf',
    postCount: 24,
    description: 'Fotoğrafçılık teknikleri ve ekipman tavsiyeleri'
  },
  {
    id: 6,
    name: 'Edebiyat',
    slug: 'edebiyat',
    postCount: 38,
    description: 'Kitap incelemeleri, şiir ve edebiyat dünyası'
  },
  {
    id: 7,
    name: 'Sanat',
    slug: 'sanat',
    postCount: 27,
    description: 'Görsel sanatlar, müze ve sergi haberleri'
  },
  {
    id: 8,
    name: 'Müzik',
    slug: 'muzik',
    postCount: 33,
    description: 'Müzik dünyasından haberler ve incelemeler'
  }
];

export default function CategoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <section className={styles.header}>
            <h1>Kategoriler</h1>
            <p>İlgilendiğiniz konulardaki yazıları keşfedin</p>
          </section>

          <div className={styles.grid}>
            {categories.map(category => (
              <CategoryCard 
                key={category.id} 
                category={category}
                onClick={() => setSelectedCategory(category.slug)}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}