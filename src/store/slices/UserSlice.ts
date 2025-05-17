// infrastructure/adapters/userSlice.ts
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type User } from '../../modules/user/domain/models/User'

interface UserState {
  user: User & { age: number }
  loading: boolean
  error: string | null
}

const initialState: UserState = {
  user: { name: '', birthDay: '', lastName: '', age: 0 },
  loading: false,
  error: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User & { age: number }>) => {
      state.user = action.payload
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    }
  }
})

export const { setUser, setLoading } = userSlice.actions
export default userSlice.reducer
