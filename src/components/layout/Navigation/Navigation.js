// src/components/layout/Navigation/Navigation.js
import Link from 'next/link'
import styles from './Navigation.module.css'

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <div className={styles.navLinks}>
        <Link href="/" className={styles.navLink}>Ana Sayfa</Link>
        <Link href="/authors" className={styles.navLink}>Yazarlar</Link>
        <Link href="/categories" className={styles.navLink}>Kategoriler</Link>
        <Link href="/about" className={styles.navLink}>Hakkımızda</Link>
        <Link href="/contact" className={styles.navLink}>İletişim</Link>
      </div>
      <Link href="/profile" className={styles.profileLink}>
        <div className={styles.profileIcon}>
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
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
      </Link>
    </nav>
  )
}