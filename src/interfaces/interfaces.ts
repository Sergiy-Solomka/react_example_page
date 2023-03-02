import { SET_ID } from 'src/redux/actions/actions'

export interface IPostlist {
  userId: number
  id: number
  title: string
  body: string
}

export interface ITodolist {
  userId: number
  id: number
  title: string
  completed: boolean
}
export interface IUserlist {
  id: number
  name: string
  username: string
}

export interface GlobalResources {
  translation: Record<string, any>
}

export interface Resources {
  en: GlobalResources
  es: GlobalResources
  ua: GlobalResources
}

export interface INewPost {
  title: string
  body: string
}
export interface IEditPost {
  id: number
  title: string
  body: string
}

export interface IUser {
  id: number
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}

export interface ISetIdAction {
  type: typeof SET_ID
  payload: number
}

export interface IUserIdState {
  id: number
}

export interface IUserAlbum {
  userId: number
  id: number
  title: string
}

export interface IUserTodo {
  userId: number
  id: number
  title: string
  completed: boolean
}
export interface IUserPosts {
  userId: number
  id: number
  title: string
  body: string
}
