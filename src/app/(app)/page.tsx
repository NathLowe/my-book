import Post from '@/features/post/Post'
import Photo from '@/features/photo/Photo'

import UserSuggested from "@/components/UserSuggested"
import { randomNumber } from '@/datas/functions'

import { getClient } from "@/datas/apollo";
import { GET_POSTS_AND_PHOTOS, GetPostsAndPhotos, MainVariables } from "@/queries/main";

export const dynamic = 'force-dynamic'

export default async function Home() {
  // Initialize Apollo Client's client
  let client = getClient()

  // defining Variables
  let variables: MainVariables = {
    postsOptions: {
      paginate: {
        limit: 5,
        page: randomNumber(10)
      }
    },
    photosOptions: {
      paginate: {
        limit: 5,
        page: randomNumber(10)
      }
    },
  }
  let { data, loading, error } = await client.query<GetPostsAndPhotos>({
    query: GET_POSTS_AND_PHOTOS,
    variables
  })
  let posts = data.posts.data
  posts = (posts !== null && posts !== undefined) ? posts : []
  let photos = data.photos.data
  photos = (photos !== null && photos !== undefined) ? photos : []

  return (
    <main className="flex">
      <section id="main-content" className="w-full h-full p-4" >
        {
          photos.map((photo,index) => {
            return <Photo key={index} photo={photo} />
          })
        }
        {
          posts.map((post,index) => {
            return <Post key={index} post={post} />
          })
        }
        {/* <Photo/> */}
        {/* Posts and Photos features */}
      </section>
      <section id="suggestion-bar" className="w-1/2 pr-40 hidden xl:block" >
        <div className="flex items-center justify-between mt-10 mb-4" >
          <h5 className="text-disabled font-semibold">Suggested for you</h5>
          <a href="#" className="text-primary-bold text-black dark:text-white">Show more</a>
        </div>
        <UserSuggested/>
        <UserSuggested/>
        <UserSuggested/>
        <UserSuggested/>
      </section>
    </main>
  )
}
