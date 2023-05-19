"use client"

import React from 'react'
import { IconType } from 'react-icons'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

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

    let path = usePathname()
    let isActive = path === link

  return (
    <Link href={link} className={`nav-link inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group lg:flex-row lg:p-2 lg:rounded-full lg:justify-start ${(isActive && 'active')} ${(hideOnPhone && 'hidden md:inline-flex')} `}>
        {children}
        <span className="hidden text-sm  lg:block lg:ml-3 lg:text-base ">{name}</span>
    </Link>
  )
}
