import { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext.jsx";
import PropTypes from 'prop-types';

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const { user, token } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      element={user || token ? <Component /> : <Navigate to="/login" />}
    />
  );
};

ProtectedRoute.propTypes = {
  element: PropTypes.elementType.isRequired,
};

export default ProtectedRoute;

