import { ISetIdAction } from 'src/interfaces/interfaces'

export const SET_ID = 'SET_ID'

export const setId = (id: number): ISetIdAction => ({
  type: SET_ID,
  payload: id,
})
