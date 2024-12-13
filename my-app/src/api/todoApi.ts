import { Todo, UserTodo } from '../types/todo';
import { axiosApi } from './axios';

export const getTodosApi = (params: { filter: string }) => {
  return axiosApi.get<Todo[]>('/todo', { params });
};

export const addNewTodoApi = (todo: UserTodo) => {
  return axiosApi.post<Todo>('/todo/create', todo);
};

export const removeTodoApi = (todoId: number) => {
  return axiosApi.delete<Todo>(`/todo/${todoId}`);
};

export const removeAllTodoApi = () => {
  return axiosApi.delete(`/todo/all`);
};

export const updateTodoApi = (todo: Todo) => {
  return axiosApi.patch('/todo/', todo);
};

export const toggleStatusApi = () => {
  return axiosApi.get('/todo/toggle');
};
