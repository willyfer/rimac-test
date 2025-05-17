// infrastructure/adapters/userSlice.ts
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type User } from '../../modules/user/domain/models/User'

export interface OtherProps {
  age: number
  commercial?: boolean
  document?: string
  documentType?: string
  phone?: string
  privacy?: boolean
}
interface UserState {
  user: User & OtherProps
  loading: boolean
  error: string | null
}

const initialState: UserState = {
  user: {
    name: '',
    birthDay: '',
    lastName: '',
    age: 0,
    privacy: false,
    commercial: false,
    document: '',
    phone: '',
    documentType: ''
  },
  loading: false,
  error: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User & OtherProps>) => {
      state.user = { ...state.user, ...action.payload }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    }
  }
})

export const { setUser, setLoading } = userSlice.actions
export default userSlice.reducer
