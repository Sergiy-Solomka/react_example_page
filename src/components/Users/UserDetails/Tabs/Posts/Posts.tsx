import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { IUserPosts, IUserIdState } from 'src/interfaces/interfaces'
import { getUserPosts } from 'src/services/callApi'
import './Posts.scss'

export const Posts = () => {
  const id = useSelector((state: IUserIdState) => state.id)
  const [posts, setPosts] = useState<IUserPosts[] | []>()
  const [t] = useTranslation()

  useEffect(() => {
    const fetchPosts = async (id: number) => {
      const data = await getUserPosts(id)
      setPosts(data)
    }
    fetchPosts(id)
  }, [id])

  return (
    <div className='posts-container'>
      <header className='posts-header'></header>
      {!posts ? (
        <p className='no-data-message'>{t('posts.error-msg')}</p>
      ) : (
        <main className='posts-list'>
          {posts.map((post) => {
            if (!post) {
              return null
            }
            return (
              <div key={post.id} className='posts-body'>
                <p className='posts-body__title'>{post.title}</p>
                <article className='posts-body__description'>{post.body}</article>
              </div>
            )
          })}
        </main>
      )}
    </div>
  )
}
