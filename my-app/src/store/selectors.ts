import { createSelector } from "@reduxjs/toolkit";
import { RootState } from ".";

export const selectIds = (state: RootState) => state.todos.ids;
export const selectNormalizeTodos = ( state: RootState) => state.todos.todosNormalize;

export const todosListSelector = createSelector(
  (state: RootState) => state.todos.todosNormalize,
  (state: RootState) => state.todos.ids,
  (todos, ids) => {
    return ids.map((id) => todos[id]).filter(Boolean);
  }
)