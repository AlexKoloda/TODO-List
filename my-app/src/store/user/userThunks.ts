import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, UserSignIn, UserSignUp } from '../../types/user';
import { fetchUserApi, signInApi, signUpApi } from '../../api/userApi';
import axios from 'axios';
import { parseError } from '../../ util/parseError';
import { toast } from 'react-toastify';

export const signIn = createAsyncThunk<User, UserSignIn>(
  'todos/signIn',
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await signInApi({
        email: params.email,
        password: params.password,
      });
      localStorage.setItem('token', data.token);
      return data.user;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(parseError(error));
      }
      const err = error as Error;
      return rejectWithValue(err.name);
    }
  }
);

export const signUp = createAsyncThunk<User, UserSignUp>(
  'todos/signUp',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await signUpApi(user);
      return data.user;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(parseError(error));
      }

      const err = error as Error;
      return rejectWithValue(err.message);
    }
  }
);

export const fetchUser = createAsyncThunk<User>(
  'todos/fetchUser',
  async () => {
      const { data } = await fetchUserApi();
      return data;
    }  
);
