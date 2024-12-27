import { Navigate, Outlet } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import PropTypes from 'prop-types';

const ProtectedRoute = ({ allowedRoles }) => {
  const token = localStorage.getItem('authToken');

  if (!token) {
    return <Navigate to="/login" />;
  }

  try {
    const decoded = jwtDecode(token);

    // Check if the user's role is allowed
    if (!allowedRoles.includes(decoded.role)) {
      return <Navigate to="/unauthorized" />;
    }

    return <Outlet />; // Render the nested routes
  } catch (err) {
    console.error(err);
    return <Navigate to="/login" />;
  }
};
ProtectedRoute.propTypes = {
  allowedRoles: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProtectedRoute;
















// import { Navigate } from 'react-router-dom';
// import { jwtDecode } from 'jwt-decode';
// import PropTypes from 'prop-types';

// const ProtectedRoute = ({ role, children }) => {
//   const token = localStorage.getItem('authToken');
//   const decodedToken = token ? jwtDecode(token) : null;

//   if (!decodedToken || decodedToken.role !== role) {
//     return <Navigate to="/login" />;
//   }

//   return children;
// };

// ProtectedRoute.propTypes = {
//   role: PropTypes.string.isRequired,
//   children: PropTypes.node.isRequired,
// };

// export default ProtectedRoute;
