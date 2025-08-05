import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoggedIn : false // get from thunk
}

const utilSlice = createSlice({
  name: 'util',
  initialState,
  reducers: {
    
  },
})

export const { } = utilSlice.actions
export default utilSlice.reducer
