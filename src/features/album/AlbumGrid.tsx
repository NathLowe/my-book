
import UserCardHeader from '@/components/UserCardHeader'
import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { randomImage } from '@/datas/functions'
import { Album, Maybe, Photo } from '@/datas/types'

export default function AlbumGrid({
  withUser,
  album
}:{
  withUser?:boolean,
  album?: Maybe<Album>
}) {

  let photos = album?.photos?.data ? album.photos.data : []
  let photosToShow: Maybe<Photo>[] = []
  photos.forEach((photo,index) => {
    if((photos.length > 4 && index < 3) || (photos.length <= 4)) photosToShow.push(photo)
  })
  return (
    <div className="block mx-auto my-4 flex-none max-w-sm bg-white border border-gray-50 rounded shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg hover:shadow-secondary-light/10 transition duration-200" >
        <UserCardHeader username={album?.user?.username} title={album?.title}  withUser={withUser} />
        <div className="p-3 grid grid-cols-2 grid-rows-2 gap-2">
          {
            photosToShow.map((photo,key) => {
              let title = photo?.title ? photo.title : 'Random Photo'
              return <Image key={key} src={randomImage()} alt={title} className="w-full rounded-lg object-cover aspect-square" />
            })
          }
          {
            (photos.length > 4) && 
            <Link href={`/album/${album?.id}`} >
              <div className="w-full h-full italic flex items-center justify-center text-3xl font-bold tracking-wide text-secondary-dark cursor-pointer rounded-lg hover:bg-secondary-light/25 transition duration-200" >
                + {photos.length - 3}
              </div>
            </Link>
          }
            
        </div>
    </div>
  )
}
