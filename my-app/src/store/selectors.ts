import { createSelector } from "@reduxjs/toolkit";

import { RootState } from ".";

export const selectTodos = (state: RootState) => state.todos.todos;

export const selectFilters = (state: RootState) => state.todos.filters;

export const selectFilteredTodos = createSelector(
  [selectTodos, selectFilters],
  (todos, currentFilter) => {

    if (currentFilter === "active") {
      return todos.filter((todo) => !todo.isCompleted);
    }
    if (currentFilter === "completed") {
      return todos.filter((todo) => todo.isCompleted);
    }
    return todos;
  }
);
