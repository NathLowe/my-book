import React from 'react'
import "./style.css"

import { randomImage } from '@/datas/functions'
import { headerFont } from '@/datas/fonts'
import Image from 'next/image'
import Button from '@/components/Button'
import TabLink from './TabLink'

import { IconType } from 'react-icons'
import { MdImage, MdPhotoAlbum, MdFeed } from 'react-icons/md'

import { getClient } from '@/datas/apollo'
import { UserByIdVariables, UserByIdResult, GET_USER_BY_ID } from '@/queries/user/GetUserById'
import { useTranslation } from '@/app/i18n'
import { useLang } from '@/stores/lang'
import { Locale } from '@/app/i18n/settings'


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
        link:''
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
    part,
    username
}:{
    part:1|2,
    username?:string|null
})=>{
    return (
        <div className={`${part===1 ? 'md:hidden' : 'hidden md:flex items-center gap-x-2'}`} >
            <h1 className={`text-3xl text-secondary-light font-semibold ${headerFont.className} dark:text-secondary-dark`} > {username} </h1>
            <div className="space-x-2" >
                <Button>Follow</Button>
                <Button>Edit</Button>
            </div>
        </div>
    )
}

export const fetchData = async (userId:string) => {
    let client = getClient()
    let { data: {user} } = await client.query<UserByIdResult,UserByIdVariables>({
      query: GET_USER_BY_ID,
      variables:{ userId }
    })

    return user
}

export default async function layout({
    children,
    params,
  }: {
    children: React.ReactNode,
    params: {id:string, lang:Locale}
  }) {
    let user = await fetchData(params.id)
    let { t } = await useTranslation(params.lang)
    let generateLink = useLang.getState().generateLink

    return (
        <main className="md:max-w-3xl py-6 mx-auto" >
            <section id="user-header" className="p-3 flex flex-col gap-x-8 md:flex-row md:items-center" >
                <div className="flex items-center gap-x-4" >
                    <Image src={randomImage()} alt={user?.username ? user.username : ''} className="w-20 h-20 md:w-32 md:h-32 rounded-full object-cover ring-2 ring-offset-2 ring-primary-main" />
                    <NameWithButtons username={user?.username} part={1} />
                </div>
                <div className="mt-4 dark:text-white" >
                    <NameWithButtons username={user?.username} part={2} />
                    <span className="block font-semibold text-lg" > {user?.name} </span>
                    <span className="block" > {user?.company?.name} </span>
                    <a target="_blank" href={`${user?.website}`} className="block hover:text-primary-light" > {user?.website} </a>
                </div>
            </section>
            <section id="user-links"> {/* Border bottom */}
                <div className="text-sm font-medium text-center text-gray-500 border-t border-gray-200 dark:text-gray-400 dark:border-gray-700">
                    <ul className="w-full md:max-w-sm md:mx-auto grid grid-cols-3 -mt-px">
                        {
                            navElements.map(({Icon,name,link},index)=>{
                                let href = generateLink(`/user/${params.id}${link}`)
                                return (
                                <li key={index} >
                                    <TabLink href={href} name={name} >
                                        <Icon className="w-8 h-8 md:w-5 md:h-5 fill-current inline" />
                                    </TabLink>
                                </li>
                            )})
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
