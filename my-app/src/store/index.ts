import { configureStore } from '@reduxjs/toolkit';
import todoReducer from "./todo/todoSlice";
import userReducer from "./user/userSlice";


const store = configureStore({
  reducer: {
    todos: todoReducer,
    users: userReducer, 
  },
});

export default store;

export type UserState = ReturnType<typeof store.getState>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;