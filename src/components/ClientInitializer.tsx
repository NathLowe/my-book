'use client'

import { Locale } from '@/app/i18n/settings'
import { useLang } from '@/stores/lang'
import { useEffect } from 'react'
import { shallow } from 'zustand/shallow'

export default function ClientInitializer({
    lang
}:{
    lang: Locale
}) {
    // Initialize the application Lang
    let { setLang } = useLang(state => ({setLang: state.setLang }), shallow)

    useEffect(()=>{
        setLang(lang)
    },[])
  return null
}
