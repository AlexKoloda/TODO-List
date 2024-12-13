import { configureStore } from '@reduxjs/toolkit';
import todoReducer from "./todo/todoSlice";
import userReducer from "./user/userSlice";


const store = configureStore({
  reducer: {
    todos: todoReducer,
    user: userReducer, 
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;