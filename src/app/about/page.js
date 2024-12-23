// src/app/about/page.js
import Header from '@/components/layout/Header/Header'
import Footer from '@/components/layout/Footer/Footer'
import styles from './page.module.css'

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <section className={styles.hero}>
            <h1>Hakkımızda</h1>
            <p className={styles.subtitle}>
              Bilgi paylaşımının gücüne inanıyor ve kaliteli içerik üretiyoruz.
            </p>
          </section>

          <section className={styles.content}>
            <div className={styles.mission}>
              <h2>Misyonumuz</h2>
              <p>
                Bilgi ve deneyimlerin paylaşıldığı, kaliteli içeriklerin üretildiği
                bir platform oluşturmak. Yazarlarımızla birlikte okuyucularımıza
                değer katmak ve bilgi birikimini artırmak.
              </p>
            </div>

            <div className={styles.values}>
              <h2>Değerlerimiz</h2>
              <ul>
                <li>Kaliteli İçerik</li>
                <li>Sürekli Gelişim</li>
                <li>Topluluk Ruhu</li>
                <li>Bilgi Paylaşımı</li>
              </ul>
            </div>

            <div className={styles.team}>
              <h2>Ekibimiz</h2>
              <p>
                Alanında uzman yazarlarımız ve editörlerimizle birlikte
                en güncel ve kaliteli içerikleri sizlere sunuyoruz.
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}