import { ApiResponse } from './_api'

export interface User {
  id: string
  name: string
  email: string
  password: string
}

type AllUser = Omit<User, 'password'>

export interface AllUserApiResponse extends ApiResponse<AllUser> {}
