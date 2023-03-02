import './EditPost.scss'
import { useForm, SubmitHandler } from 'react-hook-form'
import React, { useEffect, useState } from 'react'
import { IEditPost, IPostlist, IUserIdState } from 'src/interfaces/interfaces'
import { editPost, getOnePost, deletePost } from 'src/services/callApi'
import { useTranslation } from 'react-i18next'
import { MAXLENGTH } from 'src/config/config'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export const EditPost = () => {
  const id = useSelector((state: IUserIdState) => state.id)
  const [t] = useTranslation()
  const [data, setData] = useState<IPostlist>()
  const navigate = useNavigate()
  useEffect(() => {
    const fetchPost = async (id: number) => {
      const data = await getOnePost(id)
      setData(data)
    }
    fetchPost(id)
  }, [id])

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<IEditPost>()

  const isCorrect = () => {
    setValue('title', '')
    setValue('body', '')
    navigate(`/posts`)
  }

  const onSubmit: SubmitHandler<IEditPost> = async (post) => {
    const editedPost = { ...post, id: data?.id! }
    await editPost(editedPost)
    reset()
    isCorrect()
  }

  const delPost = async (id: number) => {
    await deletePost(id)
    isCorrect()
  }
  return (
    <div>
      {data && (
        <form className='input-form' onSubmit={handleSubmit(onSubmit)}>
          <div className='input-form-title-container' key={data.id}>
            <input
              className='input-form-title'
              placeholder={t('newposts.title')}
              {...register('title')}
              defaultValue={data?.title}
            />
            {errors.title && <span className='input-form-error'>{t('newposts.error-msg')}</span>}
          </div>
          <div className='input-form-description-container'>
            <textarea
              maxLength={MAXLENGTH}
              className='input-form-description'
              placeholder={t('newposts.description')}
              {...register('body')}
              defaultValue={data?.body}
            />
            {errors.body && <span className='input-form-error'>{t('newposts.error-msg')}</span>}
          </div>
          <div className='input-form-buttons'>
            <button className='input-form-button' type='submit'>
              {t('newposts.edit')}
            </button>
            <button className='input-form-button' onClick={() => delPost(data.id)}>
              {t('newposts.delete')}
            </button>
          </div>
        </form>
      )}
    </div>
  )
}
