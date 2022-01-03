import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homepage, ProfilePage } from "crust/pages";
import PrivateRoute from "./privateRoute";

const ApplicationRoute: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/profile/:tabId"
          element={<PrivateRoute component={ProfilePage} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default ApplicationRoute;
