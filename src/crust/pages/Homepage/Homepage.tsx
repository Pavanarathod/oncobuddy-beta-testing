import { AppHeader, SigninModal } from "crust/components";
import { useStateSelector } from "hooks/reduxHooks";

function Homepage() {
  const { userData } = useStateSelector((state) => state.authUser);
  console.log(userData);

  return (
    <div>
      <AppHeader />
      <SigninModal />
    </div>
  );
}

export default Homepage;
