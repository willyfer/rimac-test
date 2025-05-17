import { type AppThunk } from '../../../store/Store'
import { ApiPlanRepository } from '../infra/apiPlanRepository'
import { planSlice } from '../../../store/slices/PlanSlice'

export const getAllPlans = (): AppThunk => async dispatch => {
  try {
    const plans = await new ApiPlanRepository().getAllPlans() // Servicio inyectado

    dispatch(planSlice.actions.setPlans(plans))
  } catch (error) {
    console.error('Error fetching users:', error)
  }
}
