import React from 'react'
import Post from '@/features/post/Post'
import { randomArray, randomNumber } from '@/datas/functions'

export default function page() {
  return (
    <section id="user-post" className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
      {
        randomArray(randomNumber()).map((value,key)=>(
          <Post key={key} withUser={false} />
        ))
      }
    </section>
  )
}
