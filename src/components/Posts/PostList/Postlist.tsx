import React, { useEffect, useState } from 'react'
import './Postlist.scss'

import { useTranslation } from 'react-i18next'
import { getAllPosts } from 'src/services/callApi'
import { IPostlist } from 'src/interfaces/interfaces'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setId } from 'src/redux/actions/actions'

export const Postlist = () => {
  const [data, setData] = useState<IPostlist[]>([])
  const [t] = useTranslation()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getAllPosts()
      setData(data)
    }
    fetchPosts()
  }, [])

  const editPost = (id: number) => {
    navigate(`/posts/edit`)
    dispatch(setId(id))
  }

  return (
    <div className='posts-container'>
      <header className='posts-header'>
        <p className='posts-tittle'>{t('posts.head')}:</p>
      </header>
      {!data.length ? (
        <p className='no-data-message'>{t('posts.error-msg')}</p>
      ) : (
        <main className='posts-list'>
          {data.map((post) => {
            if (data) {
              return (
                <div key={post.id} className='posts-body'>
                  <button className='posts-body__title' onClick={() => editPost(post.id)}>
                    {post.title}
                  </button>
                  <article className='posts-body__description'>{post.body}</article>
                </div>
              )
            } else {
              return null
            }
          })}
        </main>
      )}
    </div>
  )
}
