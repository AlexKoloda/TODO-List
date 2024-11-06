import { configureStore } from '@reduxjs/toolkit';

import TodoReducer from './todoSlice';
import FilterReducer from './filterSlice';

export default configureStore({
  reducer: {
    todos: TodoReducer,
    filters : FilterReducer,
  },
});