import { createAsyncThunk } from '@reduxjs/toolkit';
import { confAXIOS } from '../api/confAXIOS';
import { User } from './userSlice';
import axios from 'axios';

export const fetchFilteredTodos = createAsyncThunk(
  'todos/fetchFilteredTodos',
  async () => {
    try {
     const {data} = await confAXIOS.get(`todo/filter/${'all'}`);
     if (!data) {
      throw new Error('')
     }
     return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const signIn = createAsyncThunk<User, User>(
  'todos/signIn',
  async (user) => {
    try {
     const {data} = await confAXIOS.post(`auth/sign-in`, user);

     if (!data) {
      throw new Error('')
     }
     return data.user;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        alert( error.response?.data.message);    
      } else if (error instanceof Error) {    
        console.log(error.message);
      }
    }
  }
);

export const signUp = createAsyncThunk<User, User>(
  'todos/signUp',
  async (user) => {
    try {
     const {data} = await confAXIOS.post(`auth/sign-up`, user);

     if (!data) {
      throw new Error('')
     }
     return data.user;
    } catch (error) {
      if (axios.isAxiosError(error)) {
       console.log( error.response?.data);    
      } else if (error instanceof Error) {    
        console.log(error.message);
      }
    }
  }
);


