import React from 'react'
import Image from 'next/image'
import { randomImage } from '@/datas/functions'

export default function UserSuggested() {
  return (
    <div className="flex items-center text-sm gap-x-2 my-4">
        <Image src={randomImage()} alt={`Username`} className="w-10 h-10 rounded-full object-cover" />
        <div className="grow" >
            <span className="block font-semibold"> {`Username`} </span>
            <span className="block text-disabled font-light -mt-1">My Book recommended</span>
        </div>
        <a href="#" className="text-primary-main text-xs">Follow</a>
    </div>
  )
}
