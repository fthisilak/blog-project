// src/components/layout/Footer/Footer.js
import styles from './Footer.module.css'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3>Blog</h3>
          <Link href="/">Ana Sayfa</Link>
          <Link href="/categories">Kategoriler</Link>
          <Link href="/authors">Yazarlar</Link>
        </div>

        <div className={styles.footerSection}>
          <h3>Kurumsal</h3>
          <Link href="/about">Hakkımızda</Link>
          <Link href="/contact">İletişim</Link>
          <Link href="/privacy">Gizlilik Politikası</Link>
        </div>

        <div className={styles.footerSection}>
          <h3>Sosyal Medya</h3>
          <Link href="#">Twitter</Link>
          <Link href="#">Instagram</Link>
          <Link href="#">LinkedIn</Link>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; 2024 Blog. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  )
}