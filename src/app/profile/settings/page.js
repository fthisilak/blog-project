// src/app/profile/settings/page.js
'use client'
import { useState } from 'react'
import Header from '@/components/layout/Header/Header'
import Footer from '@/components/layout/Footer/Footer'
import styles from './page.module.css'

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('profile')
  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    siteNotifications: true
  })
  const [profileForm, setProfileForm] = useState({
    name: 'Ahmet Yılmaz',
    email: 'ahmet@example.com',
    bio: 'Teknoloji ve yazılım üzerine yazılar yazıyorum.',
    website: 'www.ahmetyilmaz.com'
  })
  const [privacySettings, setPrivacySettings] = useState('public')

  const handleNotificationChange = (type) => {
    setNotificationSettings(prev => ({
      ...prev,
      [type]: !prev[type]
    }))
  }

  const handlePrivacyChange = (e) => {
    setPrivacySettings(e.target.value)
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.sidebar}>
            <h2>Ayarlar</h2>
            <nav className={styles.settingsNav}>
              <button 
                className={`${styles.navButton} ${activeTab === 'profile' ? styles.active : ''}`}
                onClick={() => setActiveTab('profile')}
              >
                Profil Bilgileri
              </button>
              <button 
                className={`${styles.navButton} ${activeTab === 'account' ? styles.active : ''}`}
                onClick={() => setActiveTab('account')}
              >
                Hesap Ayarları
              </button>
              <button 
                className={`${styles.navButton} ${activeTab === 'notification' ? styles.active : ''}`}
                onClick={() => setActiveTab('notification')}
              >
                Bildirim Ayarları
              </button>
              <button 
                className={`${styles.navButton} ${activeTab === 'privacy' ? styles.active : ''}`}
                onClick={() => setActiveTab('privacy')}
              >
                Gizlilik
              </button>
            </nav>
          </div>

          <div className={styles.content}>
            {activeTab === 'profile' && (
              <section>
                <h2>Profil Bilgileri</h2>
                <form className={styles.form}>
                  <div className={styles.formGroup}>
                    <label>Profil Fotoğrafı</label>
                    <div className={styles.avatarUpload}>
                      <img 
                        src="/images/authors/author-1.jpg" 
                        alt="Profil" 
                        className={styles.avatar}
                      />
                      <button type="button" className={styles.uploadButton}>
                        Fotoğraf Değiştir
                      </button>
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label>İsim</label>
                    <input 
                      type="text"
                      value={profileForm.name}
                      onChange={(e) => setProfileForm({...profileForm, name: e.target.value})}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label>E-posta</label>
                    <input 
                      type="email"
                      value={profileForm.email}
                      onChange={(e) => setProfileForm({...profileForm, email: e.target.value})}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label>Biyografi</label>
                    <textarea 
                      value={profileForm.bio}
                      onChange={(e) => setProfileForm({...profileForm, bio: e.target.value})}
                      rows="4"
                    />
                  </div>

                  <button type="submit" className={styles.submitButton}>
                    Değişiklikleri Kaydet
                  </button>
                </form>
              </section>
            )}

            {activeTab === 'notification' && (
              <section>
                <h2>Bildirim Ayarları</h2>
                <div className={styles.notificationSettings}>
                  <div className={styles.settingItem}>
                    <div>
                      <h3>E-posta Bildirimleri</h3>
                      <p>Yeni yazılar ve güncellemeler hakkında e-posta al</p>
                    </div>
                    <label className={styles.switch}>
                      <input 
                        type="checkbox"
                        checked={notificationSettings.emailNotifications}
                        onChange={() => handleNotificationChange('emailNotifications')}
                      />
                      <span className={styles.slider}></span>
                    </label>
                  </div>
                  <div className={styles.settingItem}>
                    <div>
                      <h3>Site Bildirimleri</h3>
                      <p>Yeni etkileşimler hakkında bildirim al</p>
                    </div>
                    <label className={styles.switch}>
                      <input 
                        type="checkbox"
                        checked={notificationSettings.siteNotifications}
                        onChange={() => handleNotificationChange('siteNotifications')}
                      />
                      <span className={styles.slider}></span>
                    </label>
                  </div>
                </div>
              </section>
            )}

            {activeTab === 'privacy' && (
              <section>
                <h2>Gizlilik Ayarları</h2>
                <div className={styles.privacySettings}>
                  <div className={styles.settingItem}>
                    <div>
                      <h3>Profil Görünürlüğü</h3>
                      <p>Profilinizi kimler görebilir</p>
                    </div>
                    <select 
                      className={styles.select}
                      value={privacySettings}
                      onChange={handlePrivacyChange}
                    >
                      <option value="public">Herkes</option>
                      <option value="followers">Sadece Takipçiler</option>
                      <option value="private">Sadece Ben</option>
                    </select>
                  </div>
                </div>
              </section>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}