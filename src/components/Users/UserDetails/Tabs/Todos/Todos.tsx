import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { IUserTodo, IUserIdState } from 'src/interfaces/interfaces'
import { getUserTodos } from 'src/services/callApi'
import './Todos.scss'

export const Todos = () => {
  const id = useSelector((state: IUserIdState) => state.id)
  const [todos, setTodos] = useState<IUserTodo[] | []>()
  const [t] = useTranslation()

  useEffect(() => {
    const fetchTodos = async (id: number) => {
      const data = await getUserTodos(id)
      setTodos(data)
    }
    fetchTodos(id)
  }, [id])

  const changeState = (id: number) => {
    const updatedTodos = todos?.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed }
      }
      return task
    })

    setTodos(updatedTodos)
  }

  return (
    <div className='usertodolist-container'>
      <div className='usertodolist-todos__list'>
        {!todos ? (
          <p className='no-data-message'>{t('todo.error-msg')}</p>
        ) : (
          <ul>
            {todos.map((todo) => {
              if (todos) {
                return (
                  <li key={todo.id} className={'usertodolist-todos__list-item'}>
                    <input
                      type={'checkbox'}
                      onChange={() => changeState(todo.id)}
                      checked={todo.completed}
                      className={'usertodolist-todos__list-checkbox'}
                    />
                    <button
                      className={'usertodolist-todos__list-text'}
                      style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                      onClick={() => changeState(todo.id)}
                    >
                      {todo.title}
                    </button>
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
