import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { api } from './api/api'
import { textSlice } from './text/text.slice'
// eslint-disable-next-line @typescript-eslint/no-unused-vars

export const actions = {
  ...textSlice.actions
}

export const reducers = combineReducers({
  [api.reducerPath]: api.reducer,
  text: textSlice.reducer
})

export const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false })
      .concat(api.middleware)
})