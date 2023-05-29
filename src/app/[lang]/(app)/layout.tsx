import '@/app/globals.css'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import Navigation from '@/components/Navigation/index'
import TopBar from '@/components/TopBar'
import Drawer from '@/components/Navigation/Drawer'
import FlowbiteInitializer from '@/components/FlowbiteInitializer'
import Provider from '@/components/Provider'
import { Locale, languages } from '@/app/i18n/settings'
import { dir } from 'i18next'

import favicon from '@/app/favicon.png'
import ClientInitializer from '@/components/ClientInitializer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MyBook',
  description: 'This is a social network coded by NathLowe using NextJS 13, Tailwind CSS, Zustand, Apollo Client, and React i18n.',
}


export async function generateStaticParams() {
  return languages.map((lang) => ({ lang }))
}

export default function RootLayout({
  children,
  params:{lang}
}: {
  children: React.ReactNode,
  params:{lang:Locale}
}) {
  return (
    <html lang={lang} dir={dir(lang)} >
      <ClientInitializer lang={lang} />
      <head>
        <link rel="shortcut icon" href={favicon.src} type="image/x-icon" />
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
