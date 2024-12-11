import { createSlice } from '@reduxjs/toolkit';
import { UserState } from '../../types/user';
import { fetchUser, signIn, signUp } from './userThunks';

const initialState: UserState = {
  users: null,
  loading: true,
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {

    stopLoading(state) {
      state.loading = false;
    },


  },
  extraReducers(builder) {
    builder
      .addCase(signIn.fulfilled, (state, action) => {
        if (action.payload) {
          state.users = action.payload;
        }
      })
      .addCase(signUp.fulfilled, () => console.log('test'))

      .addCase(fetchUser.fulfilled, (state, action) => {
        if (action.payload) {
          state.users = action.payload;
          state.loading = false;
        }
      })

      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchUser.rejected, (state) => {
        state.loading = false; 
      })
/*       .addCase(signIn.rejected, (state, action) => {
        console.log(action.error.message)
      }) */
  },
});

export const {
  stopLoading,
} = userSlice.actions;

export default userSlice.reducer;
