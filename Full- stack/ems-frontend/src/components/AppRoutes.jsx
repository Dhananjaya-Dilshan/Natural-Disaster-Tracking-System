import React from 'react';
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import AdminLogin from "./AdminLogin";
import DesastersComponents from "./DesastersComponents";
import DesastersListComponents from "./DesastersListComponents";

const AppRoutes = () => {
  // Check if user is authenticated (you need to implement this logic)
  const authenticated = true; // Example: Check if user is logged in

  return (
    <React.Fragment>
    <Routes>
      <Route path="/admin-login" element={<AdminLogin />} />
      <PrivateRoute
        path="/add-desasater"
        element={<DesastersComponents />}
        authenticated={authenticated}
      />
      <PrivateRoute
        path="/DesastersListComponents"
        element={<DesastersListComponents />}
        authenticated={authenticated}
      />
    </Routes>
    </React.Fragment>
  );
};

export default AppRoutes;
