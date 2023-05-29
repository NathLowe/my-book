import Post from '@/features/post/Post'
import Photo from '@/features/photo/Photo'

import UserSuggested from "@/components/UserSuggested"
import { randomNumber, randomizeArray } from '@/datas/functions'

import { getClient } from "@/datas/apollo";
import { GET_POSTS_AND_PHOTOS, GetPostsAndPhotos, MainVariables } from "@/queries/main";
import { Maybe, Post as PostType, Photo as PhotoType } from '@/datas/types';
import { useTranslation } from '@/app/i18n';
import { Locale } from '@/app/i18n/settings';

export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'

export default async function Home({
  params:{lang}
}:{
  params:{lang:Locale}
}) {
  // Get the i18n
  let { t, i18n } = await useTranslation(lang)
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

  // to randomize the data
  let toDisplay:(Maybe<PostType>|Maybe<PhotoType>)[] = []
  posts.forEach(post => {toDisplay.push(post)})
  photos.forEach(photo => {toDisplay.push(photo)})
  toDisplay = randomizeArray(toDisplay)

  return (
    <main className="flex">
      <section id="main-content" className="w-full h-full p-4" >
        {
          toDisplay.map((data,key)=>{
            if(data?.__typename === 'Photo'){
              return <Photo key={key} photo={data} />
            }else if(data?.__typename === 'Post'){
              return <Post key={key} post={data} />
            }
          })
        }
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
