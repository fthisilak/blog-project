// src/components/common/ScrollTopButton/ScrollTopButton.js
'use client'
import { useEffect, useState } from 'react'
import styles from './ScrollTopButton.module.css'

export default function ScrollTopButton() {
  const [isVisible, setIsVisible] = useState(true)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <button 
      className={styles.scrollTopButton}
      onClick={scrollToTop}
      aria-label="Yukarı çık"
    >
      <svg 
        width="24" 
        height="24" 
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 15l-6-6-6 6"/>
      </svg>
    </button>
  )
}
