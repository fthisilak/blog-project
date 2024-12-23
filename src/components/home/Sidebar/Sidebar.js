// src/components/home/Sidebar/Sidebar.js
import styles from './Sidebar.module.css'

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.statsBox}>
        <h3>Platform İstatistikleri</h3>
        <div className={styles.stat}>
          <span>Toplam Üye</span>
          <strong>1,234</strong>
        </div>
      </div>

      <div className={styles.socialLinks}>
        <h3>Bizi Takip Edin</h3>
        <div className={styles.socialButtons}>
          <a href="#" className={styles.socialButton}>Twitter</a>
          <a href="#" className={styles.socialButton}>Instagram</a>
          <a href="#" className={styles.socialButton}>LinkedIn</a>
        </div>
      </div>
    </aside>
  )
}