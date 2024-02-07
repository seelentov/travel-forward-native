import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { api } from './api/api'
// eslint-disable-next-line @typescript-eslint/no-unused-vars

export const actions = {}

export const reducers = combineReducers({
  [api.reducerPath]: api.reducer,
})

export const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false })
      .concat(api.middleware)
})