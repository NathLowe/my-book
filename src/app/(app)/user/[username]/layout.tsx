import React from 'react'
import "./style.css"

import { randomImage } from '@/datas/functions'
import { headerFont } from '@/datas/fonts'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/Button'

import { IconType } from 'react-icons'
import { MdImage, MdPhotoAlbum, MdFeed } from 'react-icons/md'


// Types
interface navElement {
    Icon: IconType,
    name: string,
    link:string
}


// Datas
const navElements:navElement[] = [
    {
        Icon: MdImage,
        name:'Photos',
        link:'/'
    },
    {
        Icon: MdPhotoAlbum,
        name:'Albums',
        link:'/albums'
    },
    {
        Icon: MdFeed,
        name:'Posts',
        link:'/posts'
    },
]


// Components
const NameWithButtons = ({
    part
}:{
    part:1|2
})=>{
    return (
        <div className={`${part===1 ? 'md:hidden' : 'hidden md:flex items-center gap-x-2'}`} >
            <h1 className={`text-3xl text-secondary-light font-semibold ${headerFont.className}`} > {`Username`} </h1>
            <div className="space-x-2" >
                <Button>Follow</Button>
                <Button>Edit</Button>
            </div>
        </div>
    )
}

export default function layout({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <main className="md:max-w-3xl mx-auto" >
        <section id="user-header" className="p-3 flex flex-col gap-x-8 md:flex-row md:items-center" >
            <div className="flex items-center gap-x-4" >
                <Image src={randomImage()} alt={`USername`} className="w-20 h-20 md:w-32 md:h-32 rounded-full object-cover ring-2 ring-offset-2 ring-primary-main" />
                <NameWithButtons part={1} />
            </div>
            <div className="mt-4" >
                <NameWithButtons part={2} />
                <span className="block font-semibold text-lg" > {`User Name`} </span>
                <span className="block" > {`Company`} </span>
                <a href="#" className="block" > {`Website`} </a>
            </div>
        </section>
        <section id="user-links"> {/* Border bottom */}
            <div className="text-sm font-medium text-center text-gray-500 border-t border-gray-200 dark:text-gray-400 dark:border-gray-700">
                <ul className="w-full md:max-w-sm md:mx-auto grid grid-cols-3 -mt-px">
                    {
                        navElements.map(({Icon,name,link},index)=>(
                            <li>
                                <Link href={`${link}`} className={`nav-item hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${index===2 && 'active'}`}>
                                    <Icon className="w-8 h-8 md:w-5 md:h-5 fill-current inline" />
                                    <span className="hidden md:inline-block md:text-sm" > {name} </span>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
        <div className="px-2" >
            {children}
        </div>
    </main>
  )
}
