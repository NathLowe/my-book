import React from 'react'

export default function layout({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <main>
        <h1>Posts</h1> {/* Border bottom */}
        {children}
    </main>
  )
}
