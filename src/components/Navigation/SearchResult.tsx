"use client"

import { randomArray } from '@/datas/functions'
import React from 'react'
import UserSuggested from '../UserSuggested'
import { useDrawer } from './../../stores/drawer';


const getDatas = async(search:string)=>{
    // Request
    let time = await setTimeout(()=>{
        // console.log('first')
    },20000)
    let datas:number[] = await search === '' ? [] : [1]
    return datas
}


export default async function SearchResult() {
    let {search} = useDrawer(state => ({search: state.search}))
    let datas = await getDatas(search)


    if(datas.length === 0) return (
        <div className="pb-4 italic text-xl" >No results found</div>
      )

    return (
        <div className="pb-4">
            {
                randomArray().map((value,index)=>(
                    <div key={index} className="px-3 cursor-pointer hover:bg-gray-300 transition duration-200 ">
                        <UserSuggested/>
                    </div>
                ))
            }
        </div>
    )
  
}
