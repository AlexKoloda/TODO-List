import { createSlice } from '@reduxjs/toolkit';
import { TodosState } from '../../types/todo';
import { addNewTodo, changeText, completeAll, completeStatus, fetchTodos, removeAllTodo, removeTodo } from './todoThunks';

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

    deleteAll(state) {
      state.todos = [];
    },

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state, action) => {})
      
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
      })
      .addCase(addNewTodo.fulfilled, (state, action) => {
        state.todos.push(action.payload);
      })
      .addCase(removeTodo.fulfilled, (state, action) => {
        state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      })     
      .addCase(completeStatus.fulfilled, (state, action) => {
        const currentTodo = state.todos.find(
          (todo) => todo.id === action.payload.id
        );
        if (currentTodo) {
          currentTodo.isCompleted = !currentTodo.isCompleted;
        }  
      })
       .addCase(completeAll.fulfilled, (state, action) => {
        
        const uncompleted = state.todos.some((todo) => !todo.isCompleted);
        state.todos = state.todos.map((todo) => {
          return { ...todo, isCompleted: uncompleted ? true : false };
        });
      }) 
      .addCase(changeText.fulfilled, (state, action) => {
        const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.text = action.payload.text;
      }
      })

      .addCase(fetchTodos.rejected, (state, action) => {
        state.errors = action.payload as string;
        console.log(action.error as string);
      })   
      .addCase(removeTodo.rejected, (state, action) => {
        state.errors = action.payload as string;
        console.log(action.error.message);
        //action.meta.requestId
      })    
      .addCase(removeAllTodo.rejected, (state, action) => {
        state.todos = [];
      })   
  },
});

export const {
  deleteAll,
} = todoSlice.actions;

export default todoSlice.reducer;
