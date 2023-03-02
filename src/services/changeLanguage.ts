import i18next from 'i18next'
import { setLanguageCookie } from 'src/services/setlenguage'

export const lenguage = () => {
  i18next.on('languageChanged', (lng: string) => {
    setLanguageCookie(lng)
  })
}
export const changeLanguage = (lng: string) => i18next.changeLanguage(lng)
