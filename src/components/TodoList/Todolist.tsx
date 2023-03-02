import React, { useEffect, useState } from 'react'
import './Todolist.scss'
import { ITodolist } from 'src/interfaces/interfaces'
import { useTranslation } from 'react-i18next'
import { getAllTodos } from 'src/services/callApi'

export const Todolist = () => {
  const [todos, setTodos] = useState<ITodolist[]>([])

  useEffect(() => {
    const fetchTodos = async () => {
      const todos = await getAllTodos()
      setTodos(todos)
    }
    fetchTodos()
  }, [])

  const [t] = useTranslation()

  useEffect(() => {
    setTodos(todos)
  }, [todos])

  const changeState = (id: number) => {
    const updatedTodos = todos.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed }
      }
      return task
    })

    setTodos(updatedTodos)
  }

  return (
    <div className='todolist-container'>
      <div className='todolist-input'>
        <input className='todolist-input__btn-add' type='button' value={t('todo.add') ?? ''} />
        <input className='todolist-input__input-field' type='text' />
      </div>
      <div className='todolist-todos__list'>
        {!todos.length ? (
          <p className='no-data-message'>{t('todo.error-msg')}</p>
        ) : (
          <ul>
            {todos.map((todo) => {
              if (todos) {
                return (
                  <li key={todo.id}>
                    <button
                      onClick={() => changeState(todo.id)}
                      className={'todolist-todos__list-item'}
                    >
                      {todo.title}({todo.completed.toString()})
                    </button>
                  </li>
                )
              } else {
                return null
              }
            })}
          </ul>
        )}
      </div>
    </div>
  )
}
