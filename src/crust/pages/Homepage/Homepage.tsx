import { Button, Typography } from "@mui/material";
import { signOutUser } from "core/actions/authActions/authActions";
import { useStateDispatch } from "hooks/reduxHooks";

function Homepage() {
  const dispatch = useStateDispatch();

  const logoutUser = () => {
    dispatch(signOutUser(false));
  };
  return (
    <div>
      <Typography variant="h4">
        User is authenticated this is homepage..
      </Typography>
      <Button onClick={logoutUser} variant="contained">
        Logout
      </Button>
    </div>
  );
}

export default Homepage;
