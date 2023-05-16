import React from 'react'

export default function layout({
    children
}:{
    children: React.ReactNode
}) {
  return (
    <main>
        <section id="search-bar"></section> {/* Should be client component */}
        <section id="top-searchs"> {/* Make it client component and change with the search input or just disappear for /search */}
            {/* Search text in buttons */}
        </section>
        <section id="random-photos">
          {children}
        </section>
    </main>
  )
}
