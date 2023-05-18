import { randomImage, randomArray, randomNumber } from '@/datas/functions'
import Image, { StaticImageData } from 'next/image'
import React from 'react'

export const dynamic = 'force-dynamic'

const newImages = async ()=>{
  let test = await new Promise<StaticImageData[]>((resolve,error)=>{
    let tab = []
    for (let index = 0; index < randomNumber(); index++) {
      const element = randomImage()
      tab.push(element)
    }
    resolve(tab)
  })
  let values = await test
  return values
}
 
const page = async () => {
  let images = await newImages()
  return (
    <>
      {/* Photos first, then posts, do parallel routing */}
      <div className=" grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {
            images.map((value)=>(
                <Image className="h-full object-cover max-w-full rounded-lg" src={value} alt=""/>                
            ))
        }
      </div>
    </>
  )
}

export default page