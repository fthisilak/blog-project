// src/app/layout.js
import './globals.css'

export const metadata = {
  title: 'Blog Sitesi',
  description: 'Blog sitesi açıklaması',
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>
        {children}
      </body>
    </html>
  )
}
