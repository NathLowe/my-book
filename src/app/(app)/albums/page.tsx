import React from 'react'
import AlbumGrid from '@/features/album/AlbumGrid'
import { randomArray, randomNumber } from '@/datas/functions'

export default function page() {
  return (
    <section id="albums-page" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4" >
      {
        randomArray(randomNumber()).map((value,key)=>(
          <AlbumGrid key={key} />
        ))
      }
    </section>
  )
}
