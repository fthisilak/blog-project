// src/components/home/HeroSlider/HeroSlider.js
'use client'
import { useState, useEffect } from 'react'
import styles from './HeroSlider.module.css'

const slides = [
  {
    id: 1,
    image: '/api/placeholder/1200/500',
    title: 'Blog Başlığı 1',
    description: 'Blog açıklaması 1'
  },
  {
    id: 2,
    image: '/api/placeholder/1200/500',
    title: 'Blog Başlığı 2',
    description: 'Blog açıklaması 2'
  }
]

export default function HeroSlider({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  if (!isClient) return null

  return (
    <div className={styles.sliderContainer}>
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
        >
          <img src={slide.image} alt={slide.title} />
          <div className={styles.slideContent}>
            <h2>{slide.title}</h2>
            <p>{slide.description}</p>
          </div>
        </div>
      ))}
      <div className={styles.dots}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === currentSlide ? styles.activeDot : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}