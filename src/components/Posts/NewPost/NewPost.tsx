import { useForm, SubmitHandler } from 'react-hook-form'
import React from 'react'
import './NewPost.scss'
import { INewPost } from 'src/interfaces/interfaces'
import { setNewPost } from 'src/services/callApi'
import { useTranslation } from 'react-i18next'
import { MAXLENGTH } from 'src/config/config'

export const NewPost = () => {
  const [t] = useTranslation()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<INewPost>()

  const onSubmit: SubmitHandler<INewPost> = async (data) => {
    await setNewPost(data)

    reset()
  }

  return (
    <div>
      <form className='input-form' onSubmit={handleSubmit(onSubmit)}>
        <div className='input-form-title-container'>
          <input
            className='input-form-title'
            placeholder={t('newposts.title')}
            {...register('title', { required: true })}
          />
          {errors.title && <span className='input-form-error'>{t('newposts.error-msg')}</span>}
        </div>
        <div className='input-form-description-container'>
          <textarea
            maxLength={MAXLENGTH}
            className='input-form-description'
            placeholder={t('newposts.description')}
            {...register('body', { required: true })}
          />
          {errors.body && <span className='input-form-error'>{t('newposts.error-msg')}</span>}
        </div>

        <input className='input-form-button' type='submit' />
      </form>
    </div>
  )
}
