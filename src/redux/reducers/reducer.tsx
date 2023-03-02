import { Reducer } from 'redux'
import { ISetIdAction, IUserIdState } from 'src/interfaces/interfaces'
import { SET_ID } from 'src/redux/actions/actions'

const initialState: IUserIdState = {
  id: 0,
}

export const idReducer: Reducer<IUserIdState, ISetIdAction> = (state = initialState, action) => {
  switch (action.type) {
    case SET_ID:
      return {
        ...state,
        id: action.payload,
      }
    default:
      return state
  }
}
