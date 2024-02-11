import React from "react";
import { Outlet, Navigate } from "react-router-dom";

import { useAuth } from "../contexts/authContext";

const ProtectedRoutes = () => {
  const { user } = useAuth();

  // If the user is not authenticated, redirect to the login page
  if (!user) {
    return <Navigate to="/login" />;
  }

  if (user) {
    // If the user is authenticated, render the child components
    return <Outlet />;
  }
};

export default ProtectedRoutes;
