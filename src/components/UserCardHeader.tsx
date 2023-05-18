
import Image from 'next/image'
import React from 'react'
import { headerFont } from '@/datas/fonts'
import { randomImage } from '@/datas/functions';

export default function UserCardHeader({
  withUser
}:{
  withUser?:boolean
}) {
  let showUser = withUser === undefined ? true : withUser
  return (
    <div className="bg-gray-50 px-4 py-1.5 flex items-center gap-x-4 dark:bg-gray-700 dark:text-white">
        {showUser && <Image className="w-10 h-10 rounded-full" src={randomImage()} alt={`Username`}/>}
        <div>
            <h3 className={`line-clamp-1 text-lg font-semibold tracking-tight ${headerFont.className}`} > {`Post Title`} </h3>
            {showUser && <small className="text-disabled font-light block -mt-1" > {`Username`} </small>}
        </div>
    </div>
  )
}
