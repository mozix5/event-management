import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.loading = false;
      state.isAuthenticated = true;
    },
    logout: (state, action) => {
      state.user = null;
      state.isAuthenticated = false;
      state.token = null;
    },
    validate: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
      state.isAuthenticated = true;
    },
  },
});

export const { validate, logout, login } = authSlice.actions;

export default authSlice.reducer;
