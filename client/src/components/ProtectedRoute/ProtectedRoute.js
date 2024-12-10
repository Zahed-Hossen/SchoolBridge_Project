import React, { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext.js";

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const { auth } = useContext(AuthContext);
  const token = localStorage.getItem("authToken");

  return (
    <Route
      {...rest}
      element={auth || token ? <Component /> : <Navigate to="/login" />}
    />
  );
};

export default ProtectedRoute;
