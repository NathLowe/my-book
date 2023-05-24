import React from 'react'
import Image from 'next/image'
import { randomImage } from '@/datas/functions'
import { Maybe, User } from '@/datas/types'
import Link from 'next/link'

export default function UserSuggested({
  user
}:{
  user?: Maybe<User>
}) {
  return (
    <div className="flex items-center text-sm gap-x-2 my-4">
        <Image src={randomImage()} alt={user?.username ? user.username : ''} className="w-10 h-10 rounded-full object-cover" />
        <div className="grow" >
            <span className="block font-semibold text-black dark:text-white"> {user?.username} </span>
            <span className="block text-disabled dark:text-disabled/50 font-light -mt-1">My Book recommended</span>
        </div>
        <Link href={`/user/${user?.id}`} className="text-primary-main text-xs" >Follow</Link>
    </div>
  )
}
