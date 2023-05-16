import React from 'react'

export default function layout({
    children,
    photos,
    posts
}:{
    children: React.ReactNode,
    photos: React.ReactNode,
    posts: React.ReactNode,
}) {
  return (
    <>
        {children}
        {photos}
        {posts}
    </>
  )
}
