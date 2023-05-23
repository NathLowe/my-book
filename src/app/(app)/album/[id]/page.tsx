import Image from 'next/image'
import React from 'react'
import { randomImage, randomArray } from '@/datas/functions'
import AlbumHeader from './AlbumHeader'

import { getClient } from '@/datas/apollo'
import { GET_ALBUM_BY_ID, PhotoByIdResult, PhotoByIdVariables } from '@/queries/album/GetAlbumById'
import { Album } from '@/datas/types'


export const revalidate = 86400 //24hrs

interface AlbumPageParams {
  id: string
}

const fetchAlbum = async(id:string)=>{
  let client = getClient()
  let { data } = await client.query<PhotoByIdResult,PhotoByIdVariables>({
    query: GET_ALBUM_BY_ID,
    variables:{
      albumId:id
    }
  })
  return data
}


export default async function page({
  params
}:{
  params: AlbumPageParams
}) {
  // Fetch the album data
  let { album } = await fetchAlbum(params.id)

  let photos = album.photos?.data ? album.photos?.data : []
  
  return (
    <>
      <AlbumHeader album={album} />
      <section id="album-page" className="px-10 py-3" >
        <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 ">
          {
            photos.map(photo => {
              return <Image src={randomImage()} 
              alt={photo?.title ? photo.title : 'Random Photo'}
              className="w-full aspect-square object-cover rounded-lg"/> 
            })
          }
        </div>
      </section>
    </>
  )
}
