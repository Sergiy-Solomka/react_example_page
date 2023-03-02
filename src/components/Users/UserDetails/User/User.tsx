import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faDiagramProject,
  faEnvelope,
  faLocationDot,
  faPhone,
} from '@fortawesome/free-solid-svg-icons'

import React, { useEffect, useState } from 'react'
import './User.scss'
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { getOneUser } from 'src/services/callApi'
import { IUser } from 'src/interfaces/interfaces'

export const User = () => {
  let { state } = useLocation()

  const [user, setUser] = useState<IUser | undefined>()
  const [t] = useTranslation()

  useEffect(() => {
    const fetchUser = async (id: number) => {
      const data = await getOneUser(id)
      setUser(data)
    }
    fetchUser(state.id)
  }, [state.id])

  return (
    <div className='container'>
      {user && (
        <>
          <div className='user'>
            <div className='user-img'>
              <FontAwesomeIcon className='user-img-svg' icon={faEnvelope} />
            </div>
            <div className='user-details'>
              <p className='user-details-data'>{user.email}</p>
              <p className='user-details-tag'>{t('user.email')}</p>
            </div>
          </div>
          <div className='user'>
            <div className='user-img'>
              <FontAwesomeIcon className='user-img-svg' icon={faPhone} />
            </div>
            <div className='user-details'>
              <p className='user-details-data'>{user.phone}</p>
              <p className='user-details-tag'>{t('user.movil')}</p>
            </div>
          </div>
          <div className='user'>
            <div className='user-img'>
              <FontAwesomeIcon className='user-img-svg' icon={faLocationDot} />
            </div>
            <div className='user-details'>
              <p className='user-details-data'>
                {user.address.street}, {user.address.suite}, {user.address.city}
              </p>
              <p className='user-details-tag'>{t('user.work')}</p>
            </div>
          </div>
          <div className='user'>
            <div className='user-img'>
              <FontAwesomeIcon className='user-img-svg' icon={faSquareInstagram} />
            </div>
            <div className='user-details'>
              <p className='user-details-data'>{user.website}</p>
              <p className='user-details-tag'>{t('user.social')}</p>
            </div>
          </div>
          <div className='user'>
            <div className='user-img'>
              <FontAwesomeIcon className='user-img-svg' icon={faDiagramProject} />
            </div>
            <div className='user-details'>
              <p className='user-details-data'>{user.company.name}</p>
              <p className='user-details-tag'>{t('user.segment')}</p>
            </div>
          </div>
          <div className='user-buttons'>
            <div className='user-buttons-back '>
              <Link to='/users'>
                <button className='user-buttons-btn'>{t('user.back_btn')}</button>
              </Link>
            </div>
            <div className='user-buttons-contact '>
              <button
                onClick={() => {
                  window.location.href = `mailto:${user.email}`
                }}
                className='user-buttons-btn'
              >
                {t('user.contact_btn')}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
