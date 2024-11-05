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

    changeTodos(state, action) {
      const currentTodo = state.todos.find(
        (todo) => todo.id === action.payload
      );
      currentTodo.isCompleted = !currentTodo.isCompleted;
      
    },
    
    changeAllTodos(state, action) {
      state.todos = state.todos.map((todo) => {
        return { ...todo, isCompleted: true };
      });
       
    },

    editTodos(state, action) {},
    

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
  changeTodos,
  changeAllTodos,
  deleteAll,
  changeFilter,
  editTodos,
} = TodoSlice.actions;

export default TodoSlice.reducer;
