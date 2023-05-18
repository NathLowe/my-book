import React from 'react'
import Post from '@/features/post/Post'

export default function page() {
  return (
    <section id="searched-posts" >
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3" >
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
        </div>
    </section>
  )
}
