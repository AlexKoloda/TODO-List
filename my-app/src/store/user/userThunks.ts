import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, UserSignIn, UserSignUp } from '../../types/user';
import { fetchUserApi, signInApi, signUpApi } from '../../api/userApi';

export const signIn = createAsyncThunk<User, UserSignIn>(
  'todos/signIn', 
  async (params) => {
    const { data } = await signInApi({
      email: params.email,
      password: params.password,
    });
    localStorage.setItem('token', data.token);
    return data.user;  
});

export const signUp = createAsyncThunk<User, UserSignUp>(
  'todos/signUp',
  async (user) => {
      const { data } = await signUpApi(user);
      return data.user;
  }
);

export const fetchUser = createAsyncThunk<User, { id: number }>( 
  'todos/fetchUser',
  async (params) => {
    const { data } = await fetchUserApi(params);
    return data;    
  }
) 