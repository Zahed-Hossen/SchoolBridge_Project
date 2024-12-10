import { Navigate } from "react-router-dom";

const RoleProtectedRoute = ({ children, allowedRoles }) => {
  const token = localStorage.getItem("authToken");
  const userRole = localStorage.getItem("userRole");

  if (!token) return <Navigate to="/" />; // Redirect to home if not logged in
  if (!allowedRoles.includes(userRole)) return <Navigate to="/" />; // Redirect if role not allowed

  return children; // Render the child component if authorized
};

export default RoleProtectedRoute;