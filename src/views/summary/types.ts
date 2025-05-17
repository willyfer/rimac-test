import type { Plan } from '../../modules/plan/domain/models/Plan'
import type { User } from '../../modules/user/domain/models/User'
import type { OtherProps } from '../../store/slices/UserSlice'

export interface IcontainerProps {
  plan?: Plan
  handleBack: () => void
  user: User & OtherProps
}
