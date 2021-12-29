import { Button, Typography } from "@mui/material";
import { TestComponent } from "crust/components";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigation = useNavigate();

  return (
    <div>
      <TestComponent />
      <Typography variant="h4">This is landing page.</Typography>
      <Button color="primary" onClick={() => navigation("/signin")}>
        Sign in
      </Button>
    </div>
  );
}

export default LandingPage;
