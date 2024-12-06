//@ts-ignore
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodosState } from '../../types/todo';
import { fetchTodos } from './todoThunks';

const initialState: TodosState = {
  todos: [],
  filters: 'all',
  errors: null,
};

export enum Filters {
  all = 'all',
  active = 'active',
  completed = 'completed',
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodos(state, action) {
      state.todos.push(action.payload);
      console.log(state.todos)
    },

    deleteTodo(state, action: PayloadAction<number>) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    toggleComplete(state, action: PayloadAction<number>) {
      const currentTodo = state.todos.find(
        (todo) => todo.id === action.payload
      );
      if (currentTodo) {
        currentTodo.isCompleted = !currentTodo.isCompleted;
      }
    },

    toggleCompleteAll(state) {
      const uncompleted = state.todos.some((todo) => !todo.isCompleted);
      state.todos = state.todos.map((todo) => {
        return { ...todo, isCompleted: uncompleted ? true : false };
      });
    },

    toggleFilter(state, action: PayloadAction<Filters>) {
      state.filters = action.payload;
    },

    deleteAll(state) {
      state.todos = [];
    },

    editTodo(state, action: PayloadAction<{ id: number; text: string }>) {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.text = action.payload.text;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state, action) => {})
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.errors = action.payload as string;
        console.log(action.error as string);
      })      
  },
});

export const {
  editTodo,
  addTodos,
  deleteTodo,
  toggleFilter,
  toggleComplete,
  toggleCompleteAll,
  deleteAll,
} = todoSlice.actions;

export default todoSlice.reducer;
