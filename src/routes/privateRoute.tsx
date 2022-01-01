import React from "react";
import { Navigate } from "react-router-dom";
import { useStateSelector } from "hooks/reduxHooks";

interface PrivateRouteProps {
  component: React.ComponentType<any>;
}

const PrivateRoute = ({ component: Component }: PrivateRouteProps) => {
  const { userData } = useStateSelector((state) => state.authUser);

  return userData ? <Component /> : <Navigate to="/signin" />;
};

export default PrivateRoute;
