import enTranslation from "./locales/en.json"
import frTranslation from "./locales/fr.json"

export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'fr'],
} as const

export type Locale = typeof i18n['locales'][number]

export const fallbackLng = i18n.defaultLocale
export const languages = i18n.locales
export const defaultNS = 'translation'

export function getOptions (lng:Locale = fallbackLng) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    resources:{
      en:{translation:enTranslation},
      fr:{translation:frTranslation},
    }
    // fallbackNS: defaultNS,
    // defaultNS,
    // ns
  }
}