import { type AppThunk } from '../../../store/Store'
import { ApiUserRepository } from '../infra/apiUserRepository'
import { userSlice } from '../../../store/slices/UserSlice'
import { calculateAge } from '../../../utils'

export const getUser = (): AppThunk => async dispatch => {
  try {
    const user = await new ApiUserRepository().getUser() // Servicio inyectado
    const age = calculateAge(user.birthDay)
    dispatch(userSlice.actions.setUser({ ...user, age }))
  } catch (error) {
    console.error('Error fetching users:', error)
  }
}
