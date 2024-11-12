import { createSelector } from "@reduxjs/toolkit";

import { RootState } from ".";


export const selectTodos = (state: RootState) => state.todos.todos;

export const selectFilters = (state: RootState) => state.todos.filters;

export const selectFilteredTodos = createSelector(
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
    }
  );