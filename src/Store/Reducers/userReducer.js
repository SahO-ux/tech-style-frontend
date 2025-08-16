import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userInfo: null, // will hold user object after login
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.userInfo = action.payload
    },
    logout: (state) => {
      state.userInfo = null
    },
  },
})

export const { login, logout } = userSlice.actions
export default userSlice.reducer
