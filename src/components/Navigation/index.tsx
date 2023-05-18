import React, { useEffect } from 'react'
import "./style.css"

import { logoFont } from '@/datas/fonts'
import Link from 'next/link'
import { IconType } from 'react-icons'
import { MdHomeFilled, MdSearch, MdPhotoAlbum, MdOutlinePeople, MdFeed, MdPerson, MdCollectionsBookmark } from "react-icons/md"


interface navItem {
    Icon: IconType,
    name: string,
    link: string
}

let navItems: navItem[] = [
    {
        Icon: MdHomeFilled,
        name: "Home",
        link: '/'
    },
    {
        Icon: MdSearch,
        name: "Search",
        link: '/explore'
    },
    {
        Icon: MdPhotoAlbum,
        name: "Albums",
        link: '/albums'
    },
    {
        Icon: MdOutlinePeople,
        name: "Users",
        link: '/users'
    },
    {
        Icon: MdFeed,
        name: "Posts",
        link: '/posts'
    },
]

export default function Navigation() {
  return (
        <div id="navigation-bar" className="fixed bottom-0 left-0 z-50 w-full h-12 shadow bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600
            md:top-0 md:border-t-0 md:border-r md:h-screen md:w-20 md:py-7 lg:w-48 lg:px-3 ">
            <div className={`grid h-full max-w-lg grid-cols-5 mx-auto font-medium
                md:flex md:flex-col md:w-full md:mx-0 md:gap-y-3 `}>
                    <Link href="/" className="hidden md:inline-flex mb-6 lg:hidden flex-col items-center justify-start px-5 lg:flex-row lg:p-2">
                        <MdCollectionsBookmark className="w-6 h-6 mb-1 dark:text-gray-400 text-primary-main  md:w-8 md:h-8" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"/>
                    </Link>
                    <Link href="/" className={`${logoFont.className} text-3xl font-bold hidden mb-6 text-primary-main lg:block `} >My Book</Link>
                    {navItems.map(({Icon,name,link},index)=>{
                        return (
                            <Link href={link} className={`nav-link inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group lg:flex-row lg:p-2 lg:rounded-full lg:justify-start ${(index===2 && 'active')} `}>
                                <Icon className={`w-6 h-6 mb-1 fill-current  md:w-8 md:h-8`}viewBox="0 0 20 20" aria-hidden="true"/>
                                <span className="hidden text-sm  lg:block lg:ml-3 lg:text-base ">{name}</span>
                            </Link>
                        )
                    })}
                    <Link href="/" className={`nav-link hidden md:inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group lg:flex-row lg:p-2 lg:rounded-full lg:justify-start `}>
                        <MdPerson className={`w-6 h-6 mb-1 fill-current  md:w-8 md:h-8`}viewBox="0 0 20 20" aria-hidden="true"/>
                        <span className="hidden text-sm  lg:block lg:ml-3 lg:text-base ">Profile</span>
                    </Link>
            </div>
        </div>

  )
}
