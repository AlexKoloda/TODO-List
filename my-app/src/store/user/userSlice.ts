import { createSlice } from '@reduxjs/toolkit';
import { UserState } from '../../types/user';
import { fetchUser, signIn } from './userThunks';

const initialState: UserState = {
  user: null,
  loading: true,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logOut(state) {
      state.user = null;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(signIn.fulfilled, (state, action) => {
        if (!action.payload) {
          return;
        }
        state.user = action.payload;
      })

      .addCase(fetchUser.fulfilled, (state, action) => {
        if (!action.payload) {
          return;
        }

        state.user = action.payload;
      })

  },
});
export const {
  logOut,
} = userSlice.actions;


export default userSlice.reducer;
