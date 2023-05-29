import React from 'react'
import Post from '@/features/post/Post'
import { randomArray, randomNumber } from '@/datas/functions'
import { getClient } from '@/datas/apollo'
import { UserPostsResult, UserPostsVariables, GET_USER_POSTS } from '@/queries/user/GetUserPosts'


// export const dynamic = 'force-dynamic'
export const revalidate = 86400

const fetchData = async (userId:string) => {
  let client = getClient()
  let { data } = await client.query<UserPostsResult,UserPostsVariables>({
    query: GET_USER_POSTS,
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
  let posts = user.posts?.data ? user.posts.data : []
  return (
    <section id="user-post" className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
      {
        posts.map((post,key)=>(
          <Post post={post} key={key} withUser={false} />
        ))
      }
    </section>
  )
}
