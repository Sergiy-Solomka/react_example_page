import { configureStore } from '@reduxjs/toolkit'
import { idReducer } from 'src/redux/reducers/reducer'

export const store = configureStore({
  reducer: idReducer,
})
