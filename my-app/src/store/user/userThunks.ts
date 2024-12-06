import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, UserSignIn } from '../../types/user';
import { signInApi, signUpApi } from '../../api/userApi';

export const signIn = createAsyncThunk<User, UserSignIn>(
  'todos/signIn', 
  async (params, { rejectWithValue }) => {
    const { data } = await signInApi({
      email: params.email,
      password: params.password,
    });
    localStorage.setItem('token', data.token);
    return data.user;
  
});

export const signUp = createAsyncThunk<User, User>(
  'todos/signUp',
  async (user) => {
      const { data } = await signUpApi(user);
      return data.user;
  }

);