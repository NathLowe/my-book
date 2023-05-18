import '../globals.css'
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
      <head>
        <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
      </head>
      <body className={`${inter.className} overflow-x-hidden w-screen h-screen flex dark:bg-gray-900`}>
        {children}
      </body>
    </html>
  )
}
