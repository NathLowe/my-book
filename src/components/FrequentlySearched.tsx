import React from 'react'


const Badge = ()=>{
    return (
        <span className="bg-primary-light text-primary-dark text-sm md:text-base font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-secondary-dark dark:text-secondary-light">Default</span>
    )
}

export default function FrequentlySearched() {
  return (
    <section id="top-searchs" className="my-2" > {/* Make it client component and change with the search input or just disappear for /search */}
        <Badge/>
        <Badge/>
        <Badge/>
        <Badge/>
        <Badge/>
    </section>
  )
}
