import { type AppThunk } from '../../../store/Store'
import { ApiUserRepository } from '../infra/apiUserRepository'
import { userSlice } from '../../../store/slices/UserSlice'
import { calculateAge } from '../../../utils'

export const getUser =
  (navigate: () => void | Promise<void>): AppThunk =>
  async dispatch => {
    try {
      dispatch(userSlice.actions.setLoading(true))
      const user = await new ApiUserRepository().getUser()
      const age = calculateAge(user.birthDay)
      dispatch(userSlice.actions.setUser({ ...user, age }))
      setTimeout(() => {
        dispatch(userSlice.actions.setLoading(false))
        navigate() // ✅ ahora coincide con el parámetro
      }, 500)
    } catch (error) {
      dispatch(userSlice.actions.setLoading(false))
      console.error('Error fetching users:', error)
    }
  }
