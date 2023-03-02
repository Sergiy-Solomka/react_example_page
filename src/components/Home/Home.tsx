import React from 'react'
import { useTranslation } from 'react-i18next'
import './Home.scss'

export const Home = () => {
  const [t] = useTranslation()
  return (
    <div className='home-container'>
      <header className='home-header'>
        <p className='home-tittle'> {t('title1')}</p>
        <p className='home-tittle'> {t('title2')}</p>
        <p className='home-tittle'> {t('title3')}</p>
        <p className='home-tittle'> {t('title4')}</p>
      </header>
      <main className='home-main'>
        <article className='home-description'>{t('description.part1')}</article>
      </main>
    </div>
  )
}
