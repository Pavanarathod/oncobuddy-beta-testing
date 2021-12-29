import { Button, Typography } from "@mui/material";
import { signInUser } from "core/actions/authActions/authActions";
import { useStateDispatch } from "hooks/reduxHooks";

function SigninPage() {
  const dispatch = useStateDispatch();

  const authenticateUser = () => {
    dispatch(signInUser(true));
  };

  return (
    <div>
      <Typography variant="h4">
        This is sign in page , Please sign in to the application.
      </Typography>
      <Button onClick={authenticateUser} variant="contained">
        Sign in
      </Button>
    </div>
  );
}

export default SigninPage;
