//@ts-ignore
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchFilteredTodos } from './thunks';
let id = 0;

export interface Todo {
  id: number;
  text: string;
  isCompleted: boolean;
}

export interface TodosState {
  todos: Todo[];
  filters?: string;
}

const initialState: TodosState = {
  todos: [],
  filters: "all",
};

export enum Filters {
  all = "all",
  active = "active",
  completed = "completed",
}




const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodos(state, action: PayloadAction<string>) {
      state.todos.push({
        id: createUniqueId(),
        text: action.payload,
        isCompleted: false,
      });
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
    builder.addCase(fetchFilteredTodos.fulfilled, (state, action: PayloadAction<Todo[]>) => {
     state.todos = action.payload;
    })
  },  
});

const createUniqueId = () => {
  return (id += 1);
};

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
