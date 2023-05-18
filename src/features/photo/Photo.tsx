import Image from 'next/image'
import React from 'react'
import admin from "@/assets/images/admin4.jpg"
import { headerFont } from '@/datas/fonts'
import UserCardHeader from '@/components/UserCardHeader'
import { randomImage } from '@/datas/functions'


export default function Photo() {
  return (
    <div className="block mx-auto m-4 flex-none max-w-sm bg-white border border-gray-50 rounded shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <UserCardHeader/>
      <Image src={randomImage()} alt={`Image Title`} className="w-full h-auto" />
    </div>
  )
}
