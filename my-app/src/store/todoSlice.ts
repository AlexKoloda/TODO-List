import { createSlice, PayloadAction } from "@reduxjs/toolkit";
let id = 0;

export interface Todo {
  id: number;
  text: string;
  isCompleted: boolean;
}

export interface TodosState {
  todos: Todo[];
  filters: string;
}

const initialState: TodosState = {
  todos: [],
  filters: "all",
};


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

    toggleFilter(state, action: PayloadAction<string>) {
      state.filters = action.payload;
    },

    deleteAll(state) {
      state.todos = [];
    },

  },
});

const createUniqueId = () => {
  return (id += 1);
};

export const {
  addTodos,
  deleteTodo,
  toggleFilter,
  toggleComplete,
  toggleCompleteAll,
  deleteAll,
} = todoSlice.actions;

export default todoSlice.reducer;
