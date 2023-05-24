import React from 'react'
import AlbumGrid from '@/features/album/AlbumGrid'
import { randomArray, randomNumber } from '@/datas/functions'
import { getClient } from '@/datas/apollo'
import { GET_ALBUMSPAGE, AlbumspageResult, AlbumspageVariables } from '@/queries/album/GetAlbumsPage'


const fetchAlbums = async()=>{
  let client = getClient()
  let { data } = await client.query<AlbumspageResult,AlbumspageVariables>({
    query: GET_ALBUMSPAGE,
    variables:{
      options:{
        paginate:{
          limit: 10,
          page: randomNumber(5)
        }
      }
    }
  })
  return data
}

export default async function page() {
  let { albums } = await fetchAlbums()
  let datas = albums.data ? albums.data : []
  return (
    <section id="albums-page" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4" >
      {
        datas.map((album,key)=>(
          <AlbumGrid album={album} key={key} />
        ))
      }
    </section>
  )
}
