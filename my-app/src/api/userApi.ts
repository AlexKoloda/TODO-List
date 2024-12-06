import { User, UserSignIn } from '../types/user';
import { axiosApi } from './axios'

export const signInApi = (body: UserSignIn) => {
  return axiosApi.post<{user: User; token: string}>(`auth/sign-in`, body)
}

export const signUpApi = ( body: User) => {
  return axiosApi.post<{user: User}>(`auth/sign-up`, body)
}

