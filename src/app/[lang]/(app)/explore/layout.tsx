import FrequentlySearched from '@/components/FrequentlySearched'
import React from 'react'
import SearchBar from './SearchBar'

export default function layout({
    children
}:{
    children: React.ReactNode
}) {
  return (
    <main className="py-3 px-6" >
        <SearchBar/>
        <FrequentlySearched/>
        <section id="random-photos" className="mt-5 border-t border-secondary-light py-5" >
          {children}
        </section>
    </main>
  )
}
