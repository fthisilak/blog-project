// src/app/blog/[slug]/page.js
'use client'
import { useState } from 'react'
import styles from './page.module.css'
import Header from '@/components/layout/Header/Header'
import Footer from '@/components/layout/Footer/Footer'
import AuthorCard from '@/components/blog/AuthorCard/AuthorCard'
import ShareButtons from '@/components/blog/ShareButtons/ShareButtons'
import CommentSection from '@/components/blog/CommentSection/CommentSection'
import RelatedPosts from '@/components/blog/RelatedPosts/RelatedPosts'

// Örnek blog verisi - normalde API'den gelecek
const blogPost = {
  id: 1,
  title: 'Modern Web Teknolojileri ve Geleceği',
  content: `
    <p>Modern web teknolojileri sürekli olarak gelişiyor ve değişiyor. Bu yazıda, günümüzün en önemli web teknolojilerini ve gelecekte bizi bekleyen yenilikleri inceleyeceğiz.</p>
    
    <h2>Web Teknolojilerinin Evrimi</h2>
    <p>Web teknolojileri, ilk ortaya çıktığı günden bu yana büyük bir evrim geçirdi. Statik HTML sayfalarından, dinamik ve etkileşimli web uygulamalarına uzanan bu yolculuk, teknolojinin gelişimiyle paralel ilerledi.</p>
    
    <h2>Modern Framework'ler</h2>
    <p>Günümüzde React, Vue ve Angular gibi modern JavaScript framework'leri, web geliştirme süreçlerini baştan aşağı değiştirdi. Bu framework'ler sayesinde daha modüler ve yönetilebilir uygulamalar geliştirebiliyoruz.</p>
  `,
  author: {
    id: 1,
    name: 'Ahmet Yılmaz',
    avatar: '/images/authors/author-1.jpg',
    bio: 'Senior Web Developer & Tech Blogger',
    followers: 1234
  },
  image: '/images/blog/post-1.jpg',
  category: 'Teknoloji',
  date: '11 Aralık 2024',
  readTime: '5 dk',
  views: 1234,
  likes: 56,
  comments: 23,
  tags: ['Web Development', 'JavaScript', 'Frontend']
}

export default function BlogDetail({ params }) {
  const [isLiked, setIsLiked] = useState(false)

  return (
    <>
      <Header />
      <main className={styles.main}>
        <article className={styles.article}>
          {/* Hero Bölümü */}
          <div className={styles.hero}>
            <img 
              src={blogPost.image} 
              alt={blogPost.title} 
              className={styles.heroImage}
            />
          </div>

          {/* Başlık ve Meta Bilgiler */}
          <div className={styles.header}>
            <div className={styles.meta}>
              <span className={styles.category}>{blogPost.category}</span>
              <span className={styles.date}>{blogPost.date}</span>
              <span className={styles.readTime}>{blogPost.readTime} okuma</span>
            </div>
            <h1 className={styles.title}>{blogPost.title}</h1>
          </div>

          {/* İçerik */}
          <div 
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
          />

          {/* Etkileşim Bölümü */}
          <div className={styles.interactions}>
            <div className={styles.stats}>
              <button 
                className={`${styles.likeButton} ${isLiked ? styles.liked : ''}`}
                onClick={() => setIsLiked(!isLiked)}
              >
                <span>♥</span>
                {blogPost.likes + (isLiked ? 1 : 0)}
              </button>
              <span className={styles.views}>{blogPost.views} görüntülenme</span>
            </div>
            <ShareButtons />
          </div>

          {/* Etiketler */}
          <div className={styles.tags}>
            {blogPost.tags.map(tag => (
              <span key={tag} className={styles.tag}>#{tag}</span>
            ))}
          </div>
        </article>

        {/* Yazar Kartı */}
        <AuthorCard author={blogPost.author} />

        {/* Yorumlar */}
        <CommentSection postId={blogPost.id} />

        {/* İlgili Yazılar */}
        <RelatedPosts category={blogPost.category} />
      </main>
      <Footer />
    </>
  )
}