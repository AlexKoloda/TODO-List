import { createSelector } from "@reduxjs/toolkit";

import { RootState } from ".";

export const selectTodos = (state: RootState) => state.todos.todos;
export const selectUser = (state: RootState) => state.user.user;
export const selectFilters = (state: RootState) => state.todos.filters;
export const selectIds = (state: RootState) => state.todos.ids;
export const selectNormalizeTodos = ( state: RootState) => state.todos.todosNormalize;

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
