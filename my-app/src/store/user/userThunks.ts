import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, UserSignIn, UserSignUp } from '../../types/user';
import { fetchUserApi, signInApi, signUpApi } from '../../api/userApi';
import axios from 'axios';
import { toast } from 'react-toastify';

export const signIn = createAsyncThunk<User, UserSignIn>(
  'todos/signIn', 
  async (params, {rejectWithValue}) => {
    try {
      const { data } = await signInApi({
        email: params.email,
        password: params.password,
      });
      localStorage.setItem('token', data.token);
      return data.user; 
      
    } catch (error) {
      if (axios.isAxiosError(error)) {
      toast.error(error.response?.data.message);    
    } else if (error) {
      console.log(error);    
    }      
    return rejectWithValue(error);     
    }
});

export const signUp = createAsyncThunk<User, UserSignUp>(
  'todos/signUp',
  async (user) => {
      const { data } = await signUpApi(user);
      return data.user;
  }
);

export const fetchUser = createAsyncThunk<User>( 
  'todos/fetchUser',
  async () => {
    const { data } = await fetchUserApi();
    return data;    
  }
) 