import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LandingPage, Homepage, SigninPage, ProfilePage } from "crust/pages";
import { PrivateRoute, PublicRoute } from "routes";
import Profilepage from "crust/pages/Profilepage";

const ApplicationRoute: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicRoute component={LandingPage} />} />
        <Route
          path="/signin"
          element={<PublicRoute component={SigninPage} />}
        />
        <Route path="/home" element={<PrivateRoute component={Homepage} />} />
        <Route
          path="/profile"
          element={<PrivateRoute component={Profilepage} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default ApplicationRoute;
