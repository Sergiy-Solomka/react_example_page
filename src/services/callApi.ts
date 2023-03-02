import axios, { AxiosResponse } from 'axios'
import { IEditPost, INewPost } from 'src/interfaces/interfaces'
import { POSTS, TODOS, USERS } from 'src/config/config'

export const setNewPost = async (data: INewPost) => {
  try {
    const response = await axios.post(POSTS, data)
    console.log(response.data)
    return response.data
  } catch (error) {
    console.error(error)
    return null
  }
}
export const editPost = async (data: IEditPost) => {
  try {
    const response = await axios.put(`${POSTS}/${data.id}`, {
      title: data.title,
      body: data.body,
    })
    console.log(response.data)
    return response
  } catch (error) {
    console.error(error)
    return null
  }
}
export const deletePost = async (id: number) => {
  try {
    const response = await axios.put(`${POSTS}/${id}`)
    console.log(response.data)
    return response
  } catch (error) {
    console.error(error)
    return null
  }
}

export const getAllPosts = async () => {
  try {
    const response: AxiosResponse = await axios.get(POSTS)
    return response.data
  } catch (error) {
    console.error(error)
    return null
  }
}

export const getOnePost = async (id: number) => {
  try {
    const response: AxiosResponse = await axios.get(`${POSTS}/${id}`)
    return response.data
  } catch (error) {
    console.error(error)
    return null
  }
}
export const getAllTodos = async () => {
  try {
    const response: AxiosResponse = await axios.get(TODOS)
    return response.data
  } catch (error) {
    console.error(error)
    return null
  }
}
export const getAllUsers = async () => {
  try {
    const response: AxiosResponse = await axios.get(USERS)
    return response.data
  } catch (error) {
    console.error(error)
    return null
  }
}
export const getOneUser = async (id: number) => {
  try {
    const response: AxiosResponse = await axios.get(`${USERS}/${id}`)
    return response.data
  } catch (error) {
    console.error(error)
    return null
  }
}
export const getUserAlbums = async (id: number) => {
  try {
    const response: AxiosResponse = await axios.get(`${USERS}/${id}/albums`)
    return response.data
  } catch (error) {
    console.error(error)
    return null
  }
}
export const getUserPosts = async (id: number) => {
  try {
    const response: AxiosResponse = await axios.get(`${USERS}/${id}/posts`)
    return response.data
  } catch (error) {
    console.error(error)
    return null
  }
}
export const getUserTodos = async (id: number) => {
  try {
    const response: AxiosResponse = await axios.get(`${USERS}/${id}/todos`)
    return response.data
  } catch (error) {
    console.error(error)
    return null
  }
}
