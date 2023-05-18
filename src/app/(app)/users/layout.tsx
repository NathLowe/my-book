import React from 'react'

export default function layout({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <main className="max-w-sm mx-auto py-3" > {/* mx-auto */}
      {children}
    </main>
  )
}
