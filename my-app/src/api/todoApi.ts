import { Filters } from '../store/todo/todoSlice';
import { UserTodo } from '../types/todo';
import { axiosApi } from './axios'
// TODO Не работает, типизировать и подключить в санки
export const getTodosApi = (params: Filters) => {
  return axiosApi.get<UserTodo[]>('/todo', {params})
}

export const addNewTodoApi = () => {
  return axiosApi.post('/todo/create')
}

/* export const signUpApi = (p0: string, body: User) => {
  return axiosApi.post<{user: User}>(`auth/sign-up`, body)
}

 */