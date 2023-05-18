import React from 'react'
import { FaRegPlusSquare } from 'react-icons/fa'
import { MdPerson } from 'react-icons/md'
import Link from 'next/link'
import { logoFont } from '@/datas/fonts'


export default function TopBar() {
  return (
    <div className="fixed top-0 left-0 z-50 w-full h-10 px-4 shadow bg-white border-b border-gray-200 dark:bg-gray-700 dark:border-gray-600
        md:static md:hidden ">
        <div className="w-full h-full flex items-center justify-between">
            <Link href="/" className={`${logoFont.className} text-3xl font-bold block text-secondary-main`} >My Book</Link>
            <div className="flex items-center gap-x-2" >
              <FaRegPlusSquare className='w-6 h-6 text-slate-800' />
              <Link href="/" className={`inline-flex flex-col items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-800 group lg:flex-row lg:p-2 lg:rounded-full lg:justify-start `}>
                  <MdPerson className={`w-6 h-6 mb-1 fill-current  md:w-8 md:h-8`} viewBox="0 0 20 20" aria-hidden="true"/>
                  <span className="hidden text-sm  lg:block lg:ml-3 lg:text-base ">Profile</span>
              </Link>
            </div>
        </div>
    </div>
  )
}
