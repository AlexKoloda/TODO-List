import { configureStore } from '@reduxjs/toolkit';

import TodoReducer from './TodoSlice';
import FilterReducer from './FilterSlice';

export default configureStore({
  reducer: {
    todos: TodoReducer,
    filters : FilterReducer,
  },
});