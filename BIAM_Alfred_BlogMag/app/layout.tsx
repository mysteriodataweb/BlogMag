import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display, Lora, Orbitron } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Navbar } from '@/components/blog/navbar'
import { Footer } from '@/components/blog/footer'
const _inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const _playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })
const _lora = Lora({ subsets: ['latin'], variable: '--font-lora' })
const _orbitron = Orbitron({ subsets: ['latin'], variable: '--font-orbitron' })

export const metadata: Metadata = {
  title: 'BlogMag - Magazine Premium',
  description: 'Votre destination pour des articles de qualit\u00e9 sur la technologie, le design, le lifestyle et plus encore.',

  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#F97316',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" data-theme="light">
      <body className={`${_inter.variable} ${_lora.variable} ${_orbitron.variable} font-sans antialiased bg-white text-gray-900`}>
        
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
