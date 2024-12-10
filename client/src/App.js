import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Authentication/Home";
import Login from "./pages/Authentication/Login/Login";
import SignUpPage from "./pages/Authentication/Sign-up/SignUpPage";
import VerifyEmail from "./pages/VerifyEmail/VerifyEmail.jsx";
import ResetPassword from "./pages/Authentication/ResetPassword/ResetPassword.jsx";
import ResetPasswordForm from "./pages/Authentication/ResetPassword/ResetPasswordForm.jsx";
import FeaturesPage from "./pages/FeaturesOverview/FeaturesPage.jsx"; // Import the new Features Page component
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.js";
import ProtectedComponent from "./components/ProtectedComponent";
import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import AdminPage from "./pages/UserRolePage/AdminPage/AdminPage.jsx";
import ParentPage from "./pages/UserRolePage/ParentPage/ParentPage.jsx";
import TeacherPage from "./pages/UserRolePage/TeacherPage/TeacherPage.jsx";
import StudentPage from "./pages/UserRolePage/StudentPage/StudentPage.jsx";
import RoleProtectedRoute from "./components/RoleProtectedRoute";
import {
  TeacherDashboard,
  StudentDashboard,
  ParentDashboard,
  AdminDashboard,
} from "./pages/UserRolePage/Dashboards";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/password-reset" element={<ResetPassword />} />
        <Route path="/reset-password/:token" element={<ResetPasswordForm />} />
        <Route path="/features" element={<FeaturesPage />} /> {/* Add FeaturesPage route */}
        <Route
          path="/admin"
          element={
            <RoleProtectedRoute allowedRoles={["Admin"]}>
              <AdminPage />
            </RoleProtectedRoute>
          }
        />
        <Route
          path="/parent"
          element={
            <RoleProtectedRoute allowedRoles={["Parent"]}>
              <ParentPage />
            </RoleProtectedRoute>
          }
        />
        <Route
          path="/teacher"
          element={
            <RoleProtectedRoute allowedRoles={["Teacher"]}>
              <TeacherPage />
            </RoleProtectedRoute>
          }
        />
        <Route
          path="/student"
          element={
            <RoleProtectedRoute allowedRoles={["Student"]}>
              <StudentPage />
            </RoleProtectedRoute>
          }
        />
        <Route path="/dashboard/teacher" element={<TeacherDashboard />} />
        <Route path="/dashboard/student" element={<StudentDashboard />} />
        <Route path="/dashboard/parent" element={<ParentDashboard />} />
        <Route path="/dashboard/admin" element={<AdminDashboard />} />
        <Route path="/protected" element={<ProtectedRoute element={<ProtectedComponent />} />} />
      </Routes>
    </Router>
  );
}

export default App;