import { createSlice } from '@reduxjs/toolkit';
import { signIn, signUp } from './thunks';

export interface User {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  dateBirth?: string;
}

export interface UserSignIn {
  email: string;
  password: string;
}

export interface UserState {
  users: User[];
}

const initialState: UserState = {
  users: [],
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: { 
  }, 
  extraReducers(builder) {
    builder
    .addCase(signIn.fulfilled, () => console.log("test"))
    .addCase(signUp.fulfilled, () => console.log("test"))
  },
})


export default userSlice.reducer;