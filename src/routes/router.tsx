import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homepage, ProfilePage } from "crust/pages";

const ApplicationRoute: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default ApplicationRoute;
