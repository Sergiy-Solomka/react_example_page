import React, { useEffect, useState } from 'react'
import './Userlist.scss'
import { useTranslation } from 'react-i18next'
import { getAllUsers } from 'src/services/callApi'
import { IUserlist } from 'src/interfaces/interfaces'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setId } from 'src/redux/actions/actions'

export const Userlist = () => {
  const dispatch = useDispatch()
  const [data, setData] = useState<IUserlist[]>([])
  const [t] = useTranslation()
  const navigate = useNavigate()

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getAllUsers()
      setData(data)
    }
    fetchUsers()
  }, [])

  const openUserInfo = (id: number) => {
    navigate(`/users/${id}/albums`)
    dispatch(setId(id))
  }
  return (
    <div className='users-container'>
      <table className='users-table'>
        <thead className='users-table-head'>
          <tr className='users-table-head-row'>
            <th className='users-table-head-row__element'>{t('users.name')}</th>
            <th className='users-table-head-row__element'>{t('users.user_name')}</th>
          </tr>
        </thead>
        {!data ? (
          <tbody className='no-data-message-users'>
            <tr>
              <td colSpan={2}>{t('users.error-msg')}</td>
            </tr>
          </tbody>
        ) : (
          <tbody className='users-table-body'>
            {data.map((user) => {
              if (data) {
                return (
                  <tr className='users-table-body-row' key={user.id}>
                    <td className='users-table-body-row__data'>
                      <button
                        className='users-table-body-row__data-btn'
                        onClick={() => openUserInfo(user.id)}
                      >
                        {user.name}
                      </button>
                    </td>
                    <td className='users-table-body-row__data'>{user.username}</td>
                  </tr>
                )
              }
            })}
          </tbody>
        )}
      </table>
    </div>
  )
}
