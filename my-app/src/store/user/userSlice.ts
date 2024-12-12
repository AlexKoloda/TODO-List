import { createSlice } from '@reduxjs/toolkit';
import { UserState } from '../../types/user';
import { fetchUser, signIn } from './userThunks';

const initialState: UserState = {
  users: null,
  loading: true,
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    logOut(state) {
      state.users = null;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(signIn.fulfilled, (state, action) => {
        if (!action.payload) {
          return;
        }
        state.users = action.payload;
      })

      .addCase(fetchUser.fulfilled, (state, action) => {
        if (!action.payload) {
          return;
        }

        state.users = action.payload;
      })

  },
});
export const {
  logOut,
} = userSlice.actions;


export default userSlice.reducer;
