import instance from '../../../lib/axios'
import type { User } from '../domain/models/User'
import { type UserRepository } from '../domain/userRepository'

export class ApiUserRepository implements UserRepository {
  async getUser (): Promise<User> {
    const response = await instance(`/api/user.json`)
    console.log('getAllPlans response', response)

    return response.data
  }
}
