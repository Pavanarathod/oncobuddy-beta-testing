import { createSlice } from "@reduxjs/toolkit";

interface ModalState {
  eneble: boolean;
}

const initialState: ModalState = {
  eneble: false,
};
const signInModalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    enebleModal(state) {
      state.eneble = true;
    },
    disableModal(state) {
      state.eneble = false;
    },
  },
});

export const modalActions = signInModalSlice.actions;

export default signInModalSlice.reducer;
