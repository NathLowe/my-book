import { getClient } from '@/datas/apollo'
import { randomizeArray } from '@/datas/functions'
import Image from 'next/image'
import React from 'react'
import { GET_PHOTOS_BY_SEARCH, PhotosBySearchResult, PhotosBySearchVariables } from '@/queries/photo/GetPhotosBySearch';
import Photo from '@/features/photo/Photo';

export const dynamic = 'force-dynamic'

const fetchData = async()=>{
  let client = getClient()
  let { data } = await client.query<PhotosBySearchResult,PhotosBySearchVariables>({
    query: GET_PHOTOS_BY_SEARCH,
    variables:{
      options:{
        search:{q:''},
        paginate:{
          limit:20,
          page:1
        }
      }
    }
  })

  return data
}
 
const page = async () => {
  let data = await fetchData()
  let photos = data.photos.data? data.photos.data : []
  photos = randomizeArray(photos)
  return (
    <>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {
          photos.map((photo, index)=>(
            // <Image key={index} className="h-full object-cover max-w-full rounded-lg" src={randomImage()} alt=""/> 
            <Photo key={index} photo={photo} />
          ))
        }
      </div>
    </>
  )
}

export default page