import React from 'react'

export default function layout({
    children
}:{
    children: React.ReactNode
}) {
  return (
    <>
        <h2>Posts</h2> {/* With bottom border */}
        {children}
    </>
  )
}

// This is because I want to add a loader.