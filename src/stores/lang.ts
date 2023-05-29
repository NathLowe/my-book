import { Locale, i18n } from "@/app/i18n/settings";
import { create } from "zustand";

interface State {
    lang: Locale
}

interface Actions {
    setLang: (lang:Locale) => void,
    generateLink: (link:string,actualLang?:Locale) => string
}

export const useLang = create<State & Actions>((set,get)=>({
    lang: i18n.defaultLocale,

    setLang: (lang:Locale) => { set(state => ({lang})) } ,
    generateLink: (link:string,actualLang?:Locale) => {
        let prefix = '/'+get().lang // /en or /fr
        if(actualLang) prefix = '/'+actualLang
        
        if(link === '/') return prefix // not to send /en/, we just want /en
        if(link.split('/')[0] !== ''){ // mean there is NO slash at the beginning of the provided link
            prefix = prefix+'/' // then add a slash
        }
        return prefix + link
    }
}))