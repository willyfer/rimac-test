import { type User } from './models/User'

export interface UserRepository {
  // get: (id: number) => Promise<Task | undefined>
  getUser: () => Promise<User>
}
