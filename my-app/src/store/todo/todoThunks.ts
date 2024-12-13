import { createAsyncThunk } from '@reduxjs/toolkit';
import { Todo } from '../../types/todo';
import {deleteAll } from './todoSlice';
import { addNewTodoApi, getTodosApi, removeAllTodoApi, removeTodoApi, toggleStatusApi, updateTodoApi } from '../../api/todoApi';
import axios from 'axios';
import { toast } from 'react-toastify';
import { parseError } from '../../ util/parseError';

export const fetchTodos = createAsyncThunk<Todo[], { filter: string }>(
  'todos/fetchTodos',
  async (params) => {
    const { data } = await getTodosApi(params);
    return data;
  }
);

export const addNewTodo = createAsyncThunk<Todo, string>(
  'todos/addNewTodo',
  async (text, { rejectWithValue }) => {
    try {
      const todo = {
        text: text,
        isCompleted: false,
      };
      const { data } = await addNewTodoApi(todo);
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(parseError(error));
      }
      const err = error as Error;
      return rejectWithValue(err.name);
    }
  }
);

export const removeTodo = createAsyncThunk<number, number>(
  'todos/deleteTodo',
  async (todoId) => {
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

export const completeStatus = createAsyncThunk<Todo, Todo>(
  'todos/completeStatus',
  async (todo) => {
    todo = {
      id: todo.id,
      text: todo.text,
      isCompleted: !todo.isCompleted,
    };
    const { data } = await updateTodoApi(todo);
    return data;
  }
);

export const completeAll = createAsyncThunk<Todo>(
  'todos/completeAll',
  async () => {
    const { data } = await toggleStatusApi();
    return data;
  }
);

export const changeText = createAsyncThunk<Todo, Todo>(
  'todos/changeText',
  async (todo) => {
    todo = {
      id: todo.id,
      text: todo.text,
      isCompleted: todo.isCompleted,
    };
    const { data } = await updateTodoApi(todo);
    return data;
  }
);
