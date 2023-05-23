'use client'

import React from 'react'
import { useDrawer } from '@/stores/drawer';
import Loading from './loading'
import Photo from '@/features/photo/Photo';

import { GET_PHOTOS_BY_SEARCH, PhotosBySearchResult, PhotosBySearchVariables } from '@/queries/photo/GetPhotosBySearch'
import { useQuery } from '@apollo/client'
import { shallow } from 'zustand/shallow';



export default function page() {
  let { search } = useDrawer(state => ({
    search: state.search
  }), shallow)
  let { data, loading, refetch } = useQuery<PhotosBySearchResult,PhotosBySearchVariables>(GET_PHOTOS_BY_SEARCH,{
    variables: {
      options:{
        search:{q: search },
        paginate:{
          limit: 15,
          page:1,
        }
      }
    }
  })
  let photos = data?.photos?.data ? data.photos.data : []

  if(loading) return <Loading/>

  return (
    <section id="searched-photos" className="mb-6 px-3" >
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {
            photos.map((photo,index)=>(
              <Photo key={index} photo={photo} />
            ))
          }
      </div>
    </section>
  )
}
