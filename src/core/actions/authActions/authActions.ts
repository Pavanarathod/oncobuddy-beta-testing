import { authActions } from "core/features/auth/authSlice";

// TODO we can implement asynchronou actions allso..  //

const signInUser = (payload: boolean) => (dispatch: any) => {
  dispatch(authActions.loginUser(payload));
  localStorage.setItem("isAuthenticated", "iam a user");
};

const signOutUser = (payload: boolean) => (dispatch: any) => {
  dispatch(authActions.logoutUser(payload));

  localStorage.removeItem("isAuthenticated");
};
export { signInUser, signOutUser };
