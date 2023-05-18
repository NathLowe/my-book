import React from 'react'
import { headerFont } from '@/datas/fonts'

export default function layout({
    photos,
    posts
}:{
    photos: React.ReactNode,
    posts: React.ReactNode,
}) {
  return (
    <>
      <h2 className={`text-primary-dark text-xl border-b border-primary-light mb-3 ${headerFont.className}`} >Photos</h2> {/* With bottom border */}
      {photos}
      <h2 className={`text-primary-dark text-xl border-b border-primary-light mb-3 ${headerFont.className}`} >Posts</h2> {/* With bottom border */}
      {posts}
    </>
  )
}
