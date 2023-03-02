import React, { useEffect, useState } from 'react'
import { IUserAlbum, IUserIdState } from 'src/interfaces/interfaces'
import { getUserAlbums } from 'src/services/callApi'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import './Albums.scss'

export const Albums = () => {
  const id = useSelector((state: IUserIdState) => state.id)
  const [albums, setAlbums] = useState<IUserAlbum[] | []>()
  const [t] = useTranslation()

  useEffect(() => {
    const fetchAlbums = async (id: number) => {
      const data = await getUserAlbums(id)
      setAlbums(data)
    }
    fetchAlbums(id)
  }, [id])

  return (
    <div className='albums-container'>
      <div className='albums-albums__list'>
        {!albums ? (
          <p className='no-data-message'>{t('albums.error-msg')}</p>
        ) : (
          <ul>
            {albums.map((album) => {
              if (albums) {
                return (
                  <li className={'albums-albums__list-item'} key={album.id}>
                    {album.title}
                  </li>
                )
              }
            })}
          </ul>
        )}
      </div>
    </div>
  )
}
