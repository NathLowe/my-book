import Post from '@/features/post/Post'
import Photo from '@/features/photo/Photo'

import UserSuggested from "@/components/UserSuggested"

export default function Home() {
  return (
    <main className="flex">
      <section id="main-content" className="w-full h-full p-4" >
        <Post/>
        <Photo/>
        <Post/>
        <Photo/>
        <Post/>
        <Photo/>
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
