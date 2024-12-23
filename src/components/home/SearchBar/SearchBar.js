// src/components/home/SearchBar/SearchBar.js
'use client'
import { useState } from 'react'
import styles from './SearchBar.module.css'

export default function SearchBar() {
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const categories = [
    "Teknoloji", "Yaşam", "Sanat", "Bilim", 
    "Spor", "Seyahat", "Yemek", "Kültür"
  ]

  return (
    <div className={styles.searchWrapper}>
      <div className={styles.searchContainer}>
        <input 
          type="search" 
          className={styles.searchInput}
          placeholder="" 
        />
      </div>
      
      <div className={styles.filterContainer}>
        <button 
          className={styles.filterButton}
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="6" y1="12" x2="18" y2="12"/>
            <line x1="9" y1="18" x2="15" y2="18"/>
          </svg>
        </button>

        {isFilterOpen && (
          <div className={styles.filterDropdown}>
            <h3>Kategoriler</h3>
            <ul>
              {categories.map((category) => (
                <li key={category}>
                  <label className={styles.categoryLabel}>
                    <input type="checkbox" /> {category}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}