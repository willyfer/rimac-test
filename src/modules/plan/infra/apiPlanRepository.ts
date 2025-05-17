import instance from '../../../lib/axios'
import { type Plan } from '../domain/models/Plan'
import { type PlanRepository } from '../domain/planRepository'
//import { NaveMapper } from './NaveMapper'

// const API_URL = process.env.NEXT_PUBLIC_API_URL

export class ApiPlanRepository implements PlanRepository {
  async getAllPlans (): Promise<Plan[]> {
    const response = await instance(`/api/plans.json`)
    console.log('getAllPlans response', response)
    //  const parse = data?.map(NaveMapper.fromApiResponse)

    return response.data.list
  }
}
