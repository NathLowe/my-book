import UserCardHeader from '@/components/UserCardHeader'
import { Maybe, Post } from '@/datas/types'
import { randomNumber } from '@/datas/functions';

import { PostByIdVariables, GET_POST_BY_ID, PostByIdResult } from '@/queries/post/GetPostById';
import { getClient } from '@/datas/apollo';
// import { useQuery } from '@apollo/client';


export default async function Post({
  withUser,
  id,
  post
}:{
  withUser?:boolean,
  id?:Post['id'],
  post?:Maybe<Post>
}) {
  let actualPost:Post = {
    __typename: 'Post',
    id: randomNumber().toString(),
    title: 'Post Title',
    body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, aut? Recusandae autem iusto facere provident aperiam iste dolorum hic vero velit. Doloribus, fugit? Quae laudantium quidem deleniti accusamus voluptate minus.",
    user:{
      username: 'username',
    },
    comments:{
      data:[
        {id:'1'},{id:'2'}
      ]
    }
  }

  let client = getClient()

  if(id){
    // Fetch post with id
    let { data } = await client.query<PostByIdResult,PostByIdVariables>({
      query: GET_POST_BY_ID,
      variables: {
        postId: id
      }
    })
    if(data) actualPost = data.post
  }else{
    if(post){
      actualPost = post
    }
  }

  let numberOfComments = actualPost.comments?.data?.length
  numberOfComments = numberOfComments ? numberOfComments : 0

  await new Promise(resolve => setTimeout(resolve, 100000))

  return (
    <>
      {/* If loading, send loading Post component / create it */}
      <div className="block mx-auto m-4 flex-none max-w-sm bg-white border border-gray-50 rounded shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <UserCardHeader title={actualPost.title} username={actualPost.user?.username} withUser={withUser} />
          <p className="font-normal px-4 py-1 text-gray-700 dark:text-gray-400"> {actualPost.body}  </p>
          <div className="px-4 py-1.5 font-bold text-gray-900 dark:text-white">
              {`${numberOfComments} comments`} {/* Manage the plural in the react i18n */}
          </div>
      </div>
    </>
  )
}
