import './globals.css'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MyBook',
  description: 'This is a social network coded by NathLowe using NextJS 13, Tailwind CSS, Zustand, Apollo Client, and React i18n.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark:bg-gray-900 `}>
        {/* Sidebar */}
        {/* Top nav */}
        {children}
      </body>
    </html>
  )
}
