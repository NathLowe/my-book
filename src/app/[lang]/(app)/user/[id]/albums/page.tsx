import React from 'react'
import AlbumGrid from '@/features/album/AlbumGrid'
import { randomArray, randomNumber } from '@/datas/functions'
import { getClient } from '@/datas/apollo'
import { UserAlbumsResult, UserAlbumsVariables, GET_USER_ALBUMS } from '@/queries/user/GetUserAlbums'


// export const dynamic = 'force-dynamic'
export const revalidate = 86400

const fetchData = async (userId:string) => {
  let client = getClient()
  let { data } = await client.query<UserAlbumsResult,UserAlbumsVariables>({
    query: GET_USER_ALBUMS,
    variables: {userId}
  })
  return data.user
}

export default async function page({
  params:{id}
}:{
  params:{
    id:string
  }
}) {
  let user = await fetchData(id)
  let albums = user.albums?.data ? user.albums.data : []

  return (
    <section id="user-albums" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4" >
        {
        albums.map((album,key)=>(
          <AlbumGrid album={album} key={key} withUser={false}/>
        ))
      }
    </section>
  )
}
