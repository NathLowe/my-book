import React from 'react'
import Image from "next/image"
import { randomImage } from "@/datas/functions"

export default function page() {
  return (
    <section id="searched-photos" className="mb-6 px-3" >
        <div className=" grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {
            [1,2,3,4,5,6,7,8,9,10].map((value)=>(
                <Image className="h-full object-cover max-w-full rounded-lg" src={randomImage()} alt=""/>                
            ))
          }
      </div>
    </section>
  )
}
