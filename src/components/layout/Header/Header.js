// src/components/layout/Header/Header.js
import styles from './Header.module.css'
import Navigation from '@/components/layout/Navigation/Navigation'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logo}>
          YazbiKöşe
          <span className={styles.logoAccent}>.</span>
        </div>
        <Navigation />
      </div>
    </header>
  )
}
