import { randomArray, randomNumber, randomImage } from '@/datas/functions'
import Image from 'next/image'
import React, { Suspense } from 'react'

export default function page() {
  return (
    <section id="user-photos" >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4" >
        {
          randomArray(randomNumber(30)).map(value=>(
            <Suspense fallback={<div className="w-full aspect-square rounded-lg bg-primary-light/50 animate-pulse">Loading...</div>} >
              <Image src={randomImage()} alt={`Image title`} className="w-full aspect-square rounded-lg" />
            </Suspense>
          ))
        }
      </div>
    </section>
  )
}
