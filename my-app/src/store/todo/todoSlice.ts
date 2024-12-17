import { createSlice } from '@reduxjs/toolkit';
import { TodosState } from '../../types/todo';
import { addNewTodo, changeText, completeAll, completeStatus, fetchTodos, removeAllTodo, removeTodo } from './todoThunks';

const initialState: TodosState = {
  todos: [],
  ids: [],
  todosNormalize: {},
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
      state.todosNormalize = [];
    },

  },
  extraReducers: (builder) => {
    builder      
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todosNormalize = action.payload.todos;
        state.ids = action.payload.id;
      })
      .addCase(addNewTodo.fulfilled, (state, action) => {
        state.todosNormalize[action.payload.id] = action.payload;        
        state.ids.push(action.payload.id)
      })
      .addCase(removeTodo.fulfilled, (state, action) => {       
        delete state.todosNormalize[action.payload]
      })     
      .addCase(completeStatus.fulfilled, (state, action) => {
        const id = action.payload.id;
        state.todosNormalize[id].isCompleted = !state.todosNormalize[id].isCompleted;
      })
       .addCase(completeAll.fulfilled, (state) => {   
        const uncompleted = state.ids.some((id) => !state.todosNormalize[id].isCompleted)
        state.ids.map((id) => {
          state.todosNormalize[id].isCompleted = uncompleted ? true : false;         
        })     
      }) 
      .addCase(changeText.fulfilled, (state, action) => {
        const id = action.payload.id;
        state.todosNormalize[id].text = action.payload.text;
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
      .addCase(removeAllTodo.rejected, (state) => {
        state.todos = [];
      })   
  },
});

export const {
  deleteAll,
} = todoSlice.actions;

export default todoSlice.reducer;
