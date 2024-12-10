import { createAsyncThunk } from '@reduxjs/toolkit';
import { Todo, UserTodo } from '../../types/todo';
import {deleteAll } from './todoSlice';
import { addNewTodoApi, getTodosApi, removeAllTodoApi, removeTodoApi, updateTodoApi } from '../../api/todoApi';

export const fetchTodos = createAsyncThunk<Todo[], { filter: string }>(
  'todos/fetchTodos',
  async (params) => {
    const { data } = await getTodosApi(params);
    return data;
  }
);

export const addNewTodo = createAsyncThunk(
  'todos/addNewTodo',
  async (text: string) => {
    const todo = {
      text: text,
      isCompleted: false,
    };
    const { data } = await addNewTodoApi(todo);
    return data;
  }
);

export const removeTodo = createAsyncThunk(
  'todos/deleteTodo',
  async (todoId: number) => {
    await removeTodoApi(todoId);
    return todoId;
  }
);

export const removeAllTodo = createAsyncThunk(
  'todos/removeAllTodo',
  async (_, { dispatch }) => {
    await removeAllTodoApi();
    dispatch(deleteAll());
  }
);

export const completeStatus = createAsyncThunk(
  'todos/completeStatus',
  async (todo: Todo ) => { 
    todo = {
      id: todo.id,
      text: todo.text,
      isCompleted: !todo.isCompleted,
    }
    const { data } = await updateTodoApi(todo);
    return data;
  }
);

export const changeText = createAsyncThunk (
  'todos/changeText',
  async ( todo: Todo ) => {
    todo = {
      id: todo.id,
      text: todo.text,
      isCompleted: todo.isCompleted,
    }
    const { data } = await updateTodoApi(todo);
    return data;
  }
)
