import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface User {
  id?: string
  email?: string
  name?: string
  phone?: string
  address?: string
  [key: string]: any
}

interface UserState {
  userData: User | null
}

const initialState: UserState = {
  userData: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.userData = action.payload
    },
    clearUser: state => {
      state.userData = null
    },
  },
})

export const { setUser, clearUser } = userSlice.actions
export default userSlice.reducer