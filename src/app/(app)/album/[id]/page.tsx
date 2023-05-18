import Image from 'next/image'
import React from 'react'
import { randomImage, randomArray } from '@/datas/functions'

export default function page() {
  return (
    <section id="album-page" className="px-10 py-3" >
      <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 ">
        {
          randomArray().map(value=>(
            <Image src={randomImage()} alt={`Image name`} className="w-full aspect-square object-cover rounded-lg" />
          ))
        }
      </div>
    </section>
  )
}
