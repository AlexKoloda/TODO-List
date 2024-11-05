import { createSelector } from "@reduxjs/toolkit";

export const selectTodos = state => state.todos.todos;
export const selectFilters = state => state.filters;



export const selectFiltredTodos = createSelector(
    selectTodos,
    selectFilters,
    (todos, currentFilter) => {

        switch (currentFilter) {

            case "all":
            return todos;
   
            case "active":             
            return todos.filter((todo) => !todo.isCompleted);
            
            case "completed":               
            return todos.filter((todo) => todo.isCompleted);          
           
            default:            
            return todos;
          } 
    },
);

