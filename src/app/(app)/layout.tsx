import '../globals.css'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import Navigation from '@/components/Navigation/index'
import TopBar from '@/components/TopBar'
import Drawer from '@/components/Navigation/Drawer'
import FlowbiteInitializer from '@/components/FlowbiteInitializer'
import Provider from '@/components/Provider'

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
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      </head>
      <Provider>
        <body className={`${inter.className} overflow-x-hidden w-screen h-screen flex dark:bg-gray-900`}>
          <Navigation/>
          <TopBar/>
          <Drawer/>
          <div className="grow min-h-screen my-10 md:my-0 md:ml-20 lg:ml-48" >
            {children}
          </div>

          <FlowbiteInitializer/>
        </body>
      </Provider>
    </html>
  )
}
