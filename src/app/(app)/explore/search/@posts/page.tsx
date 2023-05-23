'use client'

import React from 'react'
import Loading from './loading'
import Post from '@/features/post/Post'
import { useDrawer } from '@/stores/drawer'
import { shallow } from 'zustand/shallow'

import { useQuery } from '@apollo/client'
import { GET_POSTS_BY_SEARCH, PostsBySearchResult, PostsBySearchVariables } from '@/queries/post/GetPostsBySearch';

export default function page() {
  let { search } = useDrawer(state => ({
    search: state.search
  }), shallow)
  let { data, loading } = useQuery<PostsBySearchResult,PostsBySearchVariables>(GET_POSTS_BY_SEARCH,{
    variables:{
      options:{
        search:{q:search},
        paginate:{
          limit: 12,
          page:1
        }
      }
    }
  })

  let posts = data?.posts.data ? data.posts.data : null

  if(loading) return <Loading/>

  return (
    <section id="searched-posts" >
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3" >
          {
            posts && posts.map((post,index) => (<Post key={index} post={post} />))
          }
          {
            posts === null && <span className="text-slate-600 font-semibold text-2xl dark:text-gray-50">
              Sorry there's not any photo for "{search}..."
            </span>
          }
        </div>
    </section>
  )
}
