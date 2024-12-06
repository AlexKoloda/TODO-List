import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosApi } from '../../api/axios';
import { Todo, UserTodo } from '../../types/todo';
import { addTodos, deleteTodo, Filters } from './todoSlice';
import { getTodosApi } from '../../api/todoApi';


export const fetchTodos = createAsyncThunk<UserTodo[], Filters>(
  'todos/fetchTodos', 
  async (params, {rejectWithValue}) => {
    const { data } = await getTodosApi(params);
    return data;
});

export const addNewTodo = createAsyncThunk(
  'todos/addNewTodo',
  async (text: string, { dispatch }) => {
    try {
      const todo = {
        text: text,
        isCompleted: false,
      };

      const {data} = await axiosApi.post('todo/create', todo);
      console.log(data)
      dispatch(addTodos(data));
    } catch (error) {
      console.log(error)
    }
  }
);

export const removeTodo = createAsyncThunk(
  'todos/deleteTodo',
  async (id:number, {dispatch, rejectWithValue}) => {
    try {
      await axiosApi.delete(`todo/${id}`)
      dispatch(deleteTodo(id)) 
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)
