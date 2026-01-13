import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'ORL Clinic Daris',
  description: 'A Next.js application for ORL Clinic Daris',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='sq'>
      <body className={`${montserrat.className} antialiased container`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
