// infrastructure/adapters/userSlice.ts
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type Plan } from '../../modules/plan/domain/models/Plan'

interface PlanState {
  plans: Plan[]
  planSelect?: Plan
  loading: boolean
  error: string | null
}

const initialState: PlanState = {
  plans: [],
  loading: false,
  planSelect: undefined,
  error: null
}

export const planSlice = createSlice({
  name: 'plan',
  initialState,
  reducers: {
    setPlans: (state, action: PayloadAction<Plan[]>) => {
      state.plans = action.payload
    },
    setPlanSelect: (state, action: PayloadAction<Plan>) => {
      state.planSelect = action.payload
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    }
  }
})

export const { setPlans, setLoading, setPlanSelect } = planSlice.actions
export default planSlice.reducer
