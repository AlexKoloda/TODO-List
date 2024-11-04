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

    // TODO ПРИДУМАТЬ РЕАЛИЗАЦИЮ ОТМЕТИТЬ ВСЕ
    changeAllTodos(state, action) {},

    editTodos(state, action) {

    },

    filterTodos(state, action) {},
    // TODO ПОНЯТЬ ПОЧЕМУ УХОДТ В ОШИБКУ
    changeFilter(state, action) {
        console.log(action.payload)
        console.log(state.todos.text)

       /*  switch (action.payload) {
            case "all":
            console.log(filtredTodos);
            return filtredTodos;
   
            case "active": 
            console.log(filtredTodos);            
            return filtredTodos.filter((todo) => todo.id !== action.payload);
            
            case "completed":
                console.log(filtredTodos);
            return filtredTodos.filter((todo) => todo.id === action.payload);
          
           
            default: 
            console.log(filtredTodos);
              return filtredTodos;
          } */

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
  changeTodos,
  changeAllTodos,
  deleteAll,
  changeFilter,
  editTodos,
} = TodoSlice.actions;

export default TodoSlice.reducer;
