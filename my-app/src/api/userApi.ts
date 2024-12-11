import { User, UserSignIn, UserSignUp } from '../types/user';
import { axiosApi } from './axios'

export const signInApi = (body: UserSignIn) => {
  return axiosApi.post<{user: User; token: string}>(`/auth/sign-in`, body)
}

export const signUpApi = ( body: UserSignUp) => {
  return axiosApi.post<{user: User}>(`auth/sign-up`, body)
}

export const fetchUserApi = () => {
  return axiosApi.get<User>('/user')
}
