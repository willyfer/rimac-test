import { configureStore, type ThunkAction, type Action } from '@reduxjs/toolkit'
import planReducer from './slices/PlanSlice'
import userReducer from './slices/UserSlice'
import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook
} from 'react-redux'
export const store = configureStore({
  reducer: {
    plan: planReducer,
    user: userReducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
