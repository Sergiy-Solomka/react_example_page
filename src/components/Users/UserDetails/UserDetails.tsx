import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link, Outlet } from 'react-router-dom'
import classNames from 'classnames'
import './UserDetails.scss'

export const UserDetails = () => {
  const [t] = useTranslation()

  const isActive = (path: string) => {
    return classNames('tab-menu-btn', {
      active: location.pathname.includes(path),
    })
  }

  return (
    <div className='container'>
      <div className='tab-menu'>
        <Link className='tab-menu-btn-link' to={`albums`}>
          <button className={isActive('/albums')}>{t('user-tabs.albums')}</button>
        </Link>
        <Link className='tab-menu-btn-link' to={`posts`}>
          <button className={isActive('/posts')}>{t('user-tabs.posts')}</button>
        </Link>
        <Link className='tab-menu-btn-link' to={`todos`}>
          <button className={isActive('/todos')}>{t('user-tabs.todos')}</button>
        </Link>
      </div>
      <div className='tab-content'>
        <Outlet />
      </div>
    </div>
  )
}
