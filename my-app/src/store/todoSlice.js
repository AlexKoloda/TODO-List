import { createSlice } from "@reduxjs/toolkit";
let id = 0;

const TodoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodos(state, action) {
      state.todos.push({
        id: createUniqueId(),
        text: action.payload,
        isCompleted: false,
      });
    },

    deleteTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    toggleComplete(state, action) {
      const currentTodo = state.todos.find(
        (todo) => todo.id === action.payload
      );
      currentTodo.isCompleted = !currentTodo.isCompleted;
    },

    toggleCompleteAll(state, action) {
      const uncompleted = state.todos.some((todo) => !todo.isCompleted);
      state.todos = state.todos.map((todo) => {
      return { ...todo, isCompleted: uncompleted? true : false };
    });
    },

    deleteAll(state) {
      state.todos = [];
    },

    editTodos() {
     
    },
  },
});

const createUniqueId = () => {
  return (id += 1);
};

export const {
  addTodos,
  deleteTodo,
  toggleComplete,
  toggleCompleteAll,
  deleteAll,
  changeFilter,
  editTodos,
} = TodoSlice.actions;

export default TodoSlice.reducer;
