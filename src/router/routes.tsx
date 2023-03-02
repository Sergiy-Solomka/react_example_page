import React from 'react'
import { useRoutes } from 'react-router-dom'
import { Home } from 'src/components/Home/Home'
import { Postlist } from 'src/components/Posts/PostList/Postlist'
import { Todolist } from 'src/components/TodoList/Todolist'
import { Userlist } from 'src/components/Users/UserList/Userlist'
import { NotFound } from 'src/components/NotFound/NotFound'
import { NewPost } from 'src/components/Posts/NewPost/NewPost'
import { UserDetails } from 'src/components/Users/UserDetails/UserDetails'

import { Navigation } from 'src/components/Navigation/Navigation'
import { Albums } from 'src/components/Users/UserDetails/Tabs/Albums/Albums'
import { Posts } from 'src/components/Users/UserDetails/Tabs/Posts/Posts'
import { Todos } from 'src/components/Users/UserDetails/Tabs/Todos/Todos'
import { EditPost } from 'src/components/Posts/EditPost/EditPost'

export default function Router() {
  let element = useRoutes([
    {
      element: <Navigation />,
      children: [
        { path: '/', element: <Home /> },
        {
          path: 'posts',
          element: <Postlist />,
        },
        {
          path: 'posts/new',
          element: <NewPost />,
        },
        {
          path: 'posts/edit',
          element: <EditPost />,
        },

        { path: 'todo', element: <Todolist /> },
        {
          path: 'users',
          element: <Userlist />,
        },

        {
          path: 'users/:id',
          element: <UserDetails />,
          children: [
            {
              path: 'albums',
              element: <Albums />,
            },
            {
              path: 'posts',
              element: <Posts />,
            },
            {
              path: 'todos',
              element: <Todos />,
            },
          ],
        },

        { path: '*', element: <NotFound /> },
      ],
    },
  ])

  return <div>{element}</div>
}
