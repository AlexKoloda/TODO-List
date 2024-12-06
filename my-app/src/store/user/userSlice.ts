import { createSlice } from '@reduxjs/toolkit';
import { UserState } from '../../types/user';
import { signIn, signUp } from './userThunks';



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