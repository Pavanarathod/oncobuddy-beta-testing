import React from "react";
import { Navigate } from "react-router-dom";
import { useStateSelector } from "hooks/reduxHooks";

interface PrivateRouteProps {
  component: React.ComponentType<any>;
}

const PrivateRoute = ({ component: Component }: PrivateRouteProps) => {
  const { isAuthenticated } = useStateSelector((state) => state.authUser);

  return isAuthenticated ? <Component /> : <Navigate to="/signin" />;
};

export default PrivateRoute;
