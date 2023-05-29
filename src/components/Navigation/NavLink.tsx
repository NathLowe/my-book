"use client"

import React, { useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { useDrawer } from '@/stores/drawer';
import { useLang } from '@/stores/lang';
import { shallow } from 'zustand/shallow';
import { useTranslation } from '@/app/i18n/client';
// import { useSession } from 'next-auth/react';

export default function NavLink({
    children,
    name,
    link,
    hideOnPhone
}:{
    children: React.ReactNode,
    name: string,
    link: string,
    hideOnPhone?:boolean
}) {
    // Getting the language
    let { generateLink, lang } = useLang(state => ({
      generateLink: state.generateLink,
      lang: state.lang
    }),shallow)
    let { t } = useTranslation(lang)
    let path = usePathname()
    
    let navName = t(`navigation.${name}`)

    let linkLang: string = generateLink(link)
    let isActive:boolean = path === linkLang    

    let linkClasses = `nav-link inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group lg:flex-row lg:p-2 lg:rounded-full lg:justify-start ${(isActive && 'active')} ${(hideOnPhone && 'hidden md:inline-flex')} `
    let spanClasses = `hidden text-sm  lg:block lg:ml-3 lg:text-base`

    let { openDrawer } = useDrawer(state => ({
      openDrawer: state.openDrawer
    }))

    if(link === '/explore') return (
      <>
        <Link href={linkLang} className={linkClasses+ " md:hidden"}>
          {children}
          <span className={spanClasses}>{navName}</span>
        </Link>
        <div className="hidden md:block cursor-pointer">
          <span onClick={openDrawer} className={linkClasses+ " w-full"}>
            {children}
            <span className={spanClasses}>{navName}</span>
          </span>
        </div>
      </>
    )
    
    return (
      <Link href={linkLang} className={linkClasses}>
        {children} {/* Icon */}
        <span className={spanClasses}>{navName}</span>
      </Link>
    )
}
