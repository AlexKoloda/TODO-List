import { createSlice } from '@reduxjs/toolkit';
import { UserState } from '../../types/user';
import { signIn, signUp } from './userThunks';



const initialState: UserState = {
  users: null,
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: { 
  }, 
  extraReducers(builder) {
    builder
    .addCase(signIn.fulfilled, (state, action) => {
      if (action.payload) {
        state.users = action.payload;
      }

    })
    .addCase(signUp.fulfilled, () => console.log("test"))
  },
})


export default userSlice.reducer;