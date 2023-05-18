import React from 'react'
import Post from '@/features/post/Post'
import { randomArray } from '@/datas/functions'

export default function page() {
  return (
    <section id="posts-page" className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4" >
      {
        randomArray(12).map(value=>(
          <Post />
        ))
      }
    </section>
  )
}
