import { randomArray, randomNumber, randomImage } from '@/datas/functions'
import Image from 'next/image'
import React from 'react'
import { fetchData } from './layout'
import { notFound } from 'next/navigation'

export const revalidate = 84600 // Every 24 hours

export default async function page({
  params
}:{
  params:{id:string}
}) {
  let user = await fetchData(params.id)

  if(user?.username === null) notFound()
  // Normally now I should display the photos from each albums but each album has 50 photos and each user has 5 albums
  // For now it is too much maybe later i will add slidereload or some like that.

  return (
    <section id="user-photos" >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4" >
        {
          randomArray(randomNumber(30)).map((value,key)=>(
            <Image key={key} src={randomImage()} alt={`Image title`} className="w-full aspect-square rounded-lg" />
          ))
        }
      </div>
    </section>
  )
}
