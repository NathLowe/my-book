'use import'

import Image from 'next/image'
import React from 'react'
import admin from "@/assets/images/admin4.jpg"
import { headerFont } from '@/datas/fonts'
import UserCardHeader from '@/components/UserCardHeader'
import { randomImage, randomNumber } from '@/datas/functions'
import { Photo, Maybe } from '@/datas/types'

import { useQuery } from '@apollo/client'
import { GET_PHOTO_BY_ID, PhotoByIdResult, PhotoByIdVariables } from '@/queries/photo/GetPhotoById'

export const dynamic = 'force-dynamic'

export default function Photo({
  id,
  photo
}:{
  id?:Maybe<string>,
  photo?:Maybe<Photo>
}) {
  let actualPhoto: Photo = {
    __typename: 'Photo',
    id: randomNumber().toString(),
    title: 'Photo Title',
    album:{
      user:{
        username: 'Username'
      }
    }
  }

  if(id){
    // Fetch photo
    let variables:PhotoByIdVariables = {
      photoId: id
    }
    let { data } = useQuery<PhotoByIdResult>(GET_PHOTO_BY_ID,{
      variables
    })
    if(data) actualPhoto = data.photo
  }else{
    if(photo){
      actualPhoto = photo
    }
  }

  let title = actualPhoto.title
  let username = actualPhoto.album?.user?.username
  let url = randomImage()
  return (
    <div className="block mx-auto m-4 flex-none max-w-sm bg-white border border-gray-50 rounded shadow-sm  overflow-hidden dark:bg-gray-800 dark:border-gray-700">
      <UserCardHeader title={title} username={username} />
      <Image src={url} alt={`Image Title`} className="w-full h-full object-cover" />
    </div>
  )
}
