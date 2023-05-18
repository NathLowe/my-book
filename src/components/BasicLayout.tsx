import React from 'react'
import { headerFont } from '@/datas/fonts'

export default function BasicLayout({
    children,
    page
  }: {
    children: React.ReactNode,
    page:string
  }) {
    return (
      <main className="py-5 px-6" >
        <h1 className={`text-primary-dark text-2xl pb-4 border-b border-primary-light font-bold ${headerFont.className}`} > {page} </h1>
        <div className="max-w-5xl mx-auto" >
            {children}
        </div>
      </main>
    )
  }
