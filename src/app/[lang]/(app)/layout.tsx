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
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'
import { useTheme } from '@/stores/theme'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MyBook',
  description: 'This is a social network coded by NathLowe using NextJS 13, Tailwind CSS, Zustand, Apollo Client, and React i18n.',
}


export async function generateStaticParams() {
  return languages.map((lang) => ({ lang }))
}

export default async function RootLayout({
  children,
  params:{lang}
}: {
  children: React.ReactNode,
  params:{lang:Locale}
}) {

  let theme = useTheme.getState().theme

  let session = await getServerSession(authOptions)
  if(!session) redirect('/login')

  return (
    <html lang={lang} dir={dir(lang)} className={`${theme === 'dark' && 'dark'}`} >
      <ClientInitializer lang={lang} />
      <head>
        <link rel="shortcut icon" href={favicon.src} type="image/x-icon" />
      </head>
      <Provider>
        <body className={`${inter.className} overflow-x-hidden w-screen h-screen flex dark:bg-gray-900`}>
      <pre>{theme}</pre>
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
