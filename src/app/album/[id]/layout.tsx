import React from 'react'

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      <section id="album-header"> {/* mx-auto text-center */}
        <h1> {`Album Title`} </h1>
        <h4> {`User Name`} - {`Number of photos`} </h4>
      </section>
      {children}
    </main>
  )
}
