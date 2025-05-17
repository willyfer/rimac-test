import { type Plan } from './models/Plan'

export interface PlanRepository {
  // get: (id: number) => Promise<Task | undefined>
  getAllPlans: () => Promise<Plan[]>
}
