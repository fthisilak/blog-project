// src/app/categories/[slug]/page.js
import Header from '@/components/layout/Header/Header'
import Footer from '@/components/layout/Footer/Footer'
import ContentCard from '@/components/home/ContentList/ContentCard'
import styles from './page.module.css'

// Örnek veri - normalde bu veriler API'den gelecek
const categoryDetails = {
  'teknoloji': {
    name: 'Teknoloji',
    description: 'Yazılım, donanım ve dijital dünya hakkında her şey',
    posts: [
      {
        id: 1,
        title: 'Modern Web Teknolojileri ve Geleceği',
        excerpt: 'Günümüzde web teknolojileri hızla gelişiyor. Bu yazıda modern web teknolojilerini ve gelecekteki trendleri inceliyoruz...',
        author: { name: 'Ahmet Yılmaz', avatar: '/images/authors/author-1.jpg' },
        image: '/images/blog/post-1.jpg',
        views: 1234,
        likes: 56,
        date: '11 Aralık 2024',
        category: 'Teknoloji'
      },
      // Diğer yazılar...
    ]
  },
  'yaşam': {
    name: 'Yaşam',
    description: 'Yaşam tarzı, sağlık ve kişisel gelişim üzerine yazılar',
    posts: [
      // Kategori yazıları
    ]
  }
  // Diğer kategoriler...
}

export default function CategoryPage({ params }) {
  const { slug } = params
  const category = categoryDetails[slug]

  if (!category) {
    return <div>Kategori bulunamadı</div>
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <section className={styles.header}>
            <h1>{category.name}</h1>
            <p>{category.description}</p>
          </section>

          <div className={styles.posts}>
            {category.posts.map(post => (
              <ContentCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}