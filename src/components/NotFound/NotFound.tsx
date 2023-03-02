import React from 'react'
import { useTranslation } from 'react-i18next'
import './NotFound.scss'

export const NotFound = () => {
  const [t] = useTranslation()
  return (
    <div className='not-found'>
      <p className='not-found__tittle'>{t('404.erorr-number')}</p>
      <p className='not-found__text'>{t('404.error-msg')}</p>
    </div>
  )
}
