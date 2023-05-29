'use client'

import React, { useEffect } from 'react'
import { usePathname } from 'next/navigation';
import Link from 'next/link'

export default function TabLink({
    children,
    href,
    name
}:{
    children: React.ReactNode,
    href: string,
    name: string
}){
    
    let path = usePathname()
    let isActive = path === href


    return (
        <Link href={href} className={`nav-item hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${isActive && 'active'}`}>
            {children}
            <span className="hidden md:inline-block md:text-sm" > {name} </span>
        </Link>
    )
}