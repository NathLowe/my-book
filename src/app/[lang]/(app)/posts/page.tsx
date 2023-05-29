import React from 'react'
import Post from '@/features/post/Post'
import { randomArray, randomNumber, randomizeArray } from '@/datas/functions'
import { getClient } from '@/datas/apollo'
import { GET_POSTS_BY_SEARCH, PostsBySearchResult, PostsBySearchVariables } from '@/queries/post/GetPostsBySearch'

export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'

const fetchData = async() => {
  let client = getClient()
  let { data } = await client.query<PostsBySearchResult,PostsBySearchVariables>({
    query: GET_POSTS_BY_SEARCH,
    variables:{
      options:{
        search:{q:''},
        paginate:{
          limit: 18,
          page: randomNumber(4)
        }
      }
    }
  })
  let posts = data.posts.data ? data.posts.data : []
  posts = randomizeArray(posts)

  return posts
}

export default async function page() {
  let posts = await fetchData()
  return (
    <section id="posts-page" className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4" >
      {
        posts.map((post,index)=>(
          <Post key={index} post={post} />
        ))
      }
    </section>
  )
}
