import { createSlice } from "@reduxjs/toolkit";
let id = 0;

const TodoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    filters: "all",
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

    toggleFilter (state, action){
      state.filters = action.payload
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
  changeFilter,
} = TodoSlice.actions;

export default TodoSlice.reducer;



/* import { createSlice } from "@reduxjs/toolkit";

const initialState = 'all';

const FilterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        toggleFilter: (state, action) => action.payload,             
        
    },

});


export const {toggleFilter} = FilterSlice.actions;

export default FilterSlice.reducer; */