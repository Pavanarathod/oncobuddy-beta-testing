import { Button, Typography } from "@mui/material";
import { signOutUser } from "core/actions/authActions/authActions";
import { modalActions } from "core/features/global/onBoardingModal";
import { AppHeader, SigninModal } from "crust/components";
import { useStateDispatch, useStateSelector } from "hooks/reduxHooks";

function Homepage() {
  const dispatch = useStateDispatch();

  const logoutUser = () => {
    dispatch(signOutUser(false));
  };

  return (
    <div>
      <AppHeader />
      <SigninModal />
    </div>
  );
}

export default Homepage;
