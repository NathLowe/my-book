import React from 'react'
import { randomNumber } from '@/datas/functions'
import { headerFont } from '@/datas/fonts'



const Header = ()=>{

  return (
    <section id="album-header" className={`${headerFont.className} bg-gray-100 dark:bg-gray-800`}>
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-5xl dark:text-white"> {`Album Title`} </h1>
        <div className="text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
          <span> {`User name`} </span> - <span> {`${randomNumber()} Photos`} </span>
        </div>
      </div>
    </section>
  )
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      <Header/>
      {children}
    </main>
  )
}
