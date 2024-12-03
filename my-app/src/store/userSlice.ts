import { createSlice } from '@reduxjs/toolkit';

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  dateBirth: string;
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
    
  }
})


export default userSlice.reducer;