import { createSlice } from '@reduxjs/toolkit'


const initialState: { data: { [key: string]: string } | null } = {
  data: null
}

export const textSlice = createSlice({
  name: 'text',
  initialState,
  reducers: {
    setText: (state, { payload: action }) => {
      state.data = action
    },
  },
})