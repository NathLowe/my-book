import { randomImage, randomArray, randomNumber } from '@/datas/functions'
import Image, { StaticImageData } from 'next/image'
import React from 'react'

export const dynamic = 'force-dynamic'
 
const page = async () => {
  return (
    <>
      <div className=" grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {
          randomArray(randomNumber()).map((value, index)=>(
            <Image key={index} className="h-full object-cover max-w-full rounded-lg" src={randomImage()} alt=""/>                
          ))
        }
      </div>
    </>
  )
}

export default page