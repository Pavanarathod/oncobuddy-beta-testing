import { useStateSelector } from "hooks/reduxHooks";
import React from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  component: React.ComponentType;
}

const PublicRoute = ({ component: Component }: ProtectedRouteProps) => {
  const { isAuthenticated } = useStateSelector((state) => state.authUser);

  return isAuthenticated ? <Navigate to="/home" /> : <Component />;
};

export default PublicRoute;
