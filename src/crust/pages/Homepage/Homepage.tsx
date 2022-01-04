import { AppHeader, SigninModal } from "crust/components";
import { useStateSelector } from "hooks/reduxHooks";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

function Homepage() {
  const { userData } = useStateSelector((state) => state.authUser);
  console.log(userData);

  return (
    <div>
      <AppHeader />
      <Container maxWidth="xl">
        <Typography variant="h1">Landing page..</Typography>
      </Container>
      <SigninModal />
    </div>
  );
}

export default Homepage;
