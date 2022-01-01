import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserAuthState {
  userData: any;
}

const initialState: UserAuthState = {
  userData: localStorage.getItem("userData")
    ? JSON.parse(localStorage.getItem("userData") || "{}")
    : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userSessionStore(state, action) {
      state.userData = action.payload;
    },
    removeUserSessionStore(state) {
      state.userData = null;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
