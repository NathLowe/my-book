import React from 'react'

export default function Layout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <main>
        <h1>Albums</h1> {/* Border bottom */}
        {children}
      </main>
    )
  }
