import { createSlice } from '@reduxjs/toolkit';
import { UserInitialState } from '../../../lib/types';

const initialState: UserInitialState = {
  user: null,
};

const userSlice = createSlice({
  initialState: initialState,
  name: 'user',
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload;
    },
    logoutUser: (state) => {
      state.user = null;
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
