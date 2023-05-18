import React from 'react'
import { headerFont } from "@/datas/fonts"
import { randomArray } from '@/datas/functions'
import UserSuggested from '@/components/UserSuggested'

export default function page() {
  return (
    <>
      <h1 className={`text-2xl text-primary-dark font-semibold mb-5 ${headerFont.className}`} > All Users </h1>
      <div className="space-y-5" >
        {
          randomArray().map(value=>(
            <UserSuggested/>
          ))
        }
      </div>
    </>
  )
}
