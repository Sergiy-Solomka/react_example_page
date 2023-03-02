import React from 'react'
import './Navigation.scss'
import { Link, Outlet } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { changeLanguage, lenguage } from 'src/services/changeLanguage'

export const Navigation = () => {
  const [t] = useTranslation()

  lenguage()

  return (
    <div>
      <div className='navigation-container'>
        <div className='navigation-bar'>
          <nav className='navigation-bar__link'>
            <Link className='navigation-bar__link-button' to='/'>
              {t('menu.home')}
            </Link>
          </nav>
          <nav className='navigation-bar__link'>
            <Link className='navigation-bar__link-button' to='posts'>
              {t('menu.posts')}
            </Link>
          </nav>
          <nav className='navigation-bar__link'>
            <Link className='navigation-bar__link-button' to='todo'>
              {t('menu.todo')}
            </Link>
          </nav>
          <nav className='navigation-bar__link'>
            <Link className='navigation-bar__link-button' to='users'>
              {t('menu.users')}
            </Link>
          </nav>
          <nav className='navigation-bar__link'>
            <button className='navigation-bar__link-lng-btn' onClick={() => changeLanguage('en')}>
              EN
            </button>
            <button className='navigation-bar__link-lng-btn' onClick={() => changeLanguage('es')}>
              ES
            </button>
            <button className='navigation-bar__link-lng-btn' onClick={() => changeLanguage('ua')}>
              UA
            </button>
          </nav>
        </div>
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  )
}
