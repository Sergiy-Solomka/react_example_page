import { Resources } from 'src/interfaces/interfaces'
import global_en from 'src/translations/en/translation.json'
import global_es from 'src/translations/es/translation.json'
import global_ua from 'src/translations/ua/translation.json'

export const getResources = (): Resources => {
  return {
    en: {
      translation: global_en,
    },
    es: {
      translation: global_es,
    },
    ua: {
      translation: global_ua,
    },
  }
}
export const getLanguageFromCookie = (): string | null => {
  const cookieLanguage = getCookie('language')
  if (cookieLanguage && Object.keys(getResources()).includes(cookieLanguage)) {
    return cookieLanguage
  }
  return null
}

export const getBrowserLanguage = (): string => {
  const browserLanguage = navigator.language /* || navigator.userLanguage */
  const languageCode = browserLanguage.substr(0, 2)
  if (Object.keys(getResources()).includes(languageCode)) {
    return languageCode
  }
  return 'en' // fallback to English if browser language not supported
}

export const setLanguageCookie = (language: string) => {
  setCookie('language', language, 365)
}

const setCookie = (name: string, value: string, days: number) => {
  const expires = new Date()
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000)
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`
}

const getCookie = (name: string): string | null => {
  const cookies = document.cookie.split(';')
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim()
    if (cookie.startsWith(name + '=')) {
      return cookie.substring(name.length + 1)
    }
  }
  return null
}
