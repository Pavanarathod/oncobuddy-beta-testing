import { authActions } from "core/features/auth/authSlice";

// TODO we can implement async actions allso..  //

const addUserSessionStore = (payload: any) => (dispatch: any) => {
  dispatch(authActions.userSessionStore(payload));

  localStorage.setItem("userData", JSON.stringify(payload));
};

const removeUserSessionStore = () => (dispatch: any) => {
  dispatch(authActions.removeUserSessionStore());
  localStorage.removeItem("userData");
};

export { addUserSessionStore, removeUserSessionStore };
