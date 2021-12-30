import authSlice from "core/features/auth/authSlice";
import signInModalSlice from "core/features/global/onBoardingModal";

const rootReducers = {
  authUser: authSlice,
  modal: signInModalSlice,
};

export default rootReducers;
