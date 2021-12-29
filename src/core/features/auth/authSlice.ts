import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserAuthState {
  isAuthenticated: boolean;
}

const initialState: UserAuthState = {
  isAuthenticated: localStorage.getItem("isAuthenticated") ? true : false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser(state, action: PayloadAction<boolean>) {
      state.isAuthenticated = action.payload;
    },
    logoutUser(state, action: PayloadAction<boolean>) {
      state.isAuthenticated = action.payload;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
