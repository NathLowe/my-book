
import UserCardHeader from '@/components/UserCardHeader'
import React, { useEffect } from 'react'
import Image from 'next/image'
import { randomImage } from '@/datas/functions'

export default function AlbumGrid({
  withUser
}:{
  withUser?:boolean
}) {

  return (
    <div className="block mx-auto my-4 flex-none max-w-sm bg-white border border-gray-50 rounded shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg hover:shadow-secondary-light/10 transition duration-200" >
        <UserCardHeader withUser={withUser} />
        <div className="p-3 grid grid-cols-2 grid-rows-2 gap-2">
            <Image src={randomImage()} alt={`Image Title`} className="w-full rounded-lg object-cover aspect-square" />
            <Image src={randomImage()} alt={`Image Title`} className="w-full rounded-lg object-cover aspect-square" />
            <Image src={randomImage()} alt={`Image Title`} className="w-full rounded-lg object-cover aspect-square" />
            <div className="w-full h-full italic flex items-center justify-center text-3xl font-bold tracking-wide text-secondary-dark cursor-pointer rounded-lg hover:bg-secondary-light/25 transition duration-200" >
                + {Math.floor(Math.random()*10)}
            </div>
        </div>
    </div>
  )
}
