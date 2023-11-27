import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {Fugaz_One} from 'next/font/google'
import {Smooch_Sans} from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar'

const inter = Inter({ subsets: ['latin'], variable: "--font-inter"})
const fugaz = Fugaz_One({
  subsets: ['latin'],
  weight: '400',
  variable: "--font-fugaz"
})
const smooch = Smooch_Sans({ subsets: ['latin'], variable: "--font-smooch"})


export const metadata: Metadata = {
  title: 'FOLLOTECH',
  description: 'FOLLOTECH',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${fugaz.variable} ${inter.variable} ${smooch.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
