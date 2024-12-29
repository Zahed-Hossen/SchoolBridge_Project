import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

//Authentication
import Login from './components/LoginModal';
import SignUp from './components/SignUpModal';
import VerifyEmail from './pages/Auth/VerifyEmail';

// Student Role Section
import Dashboard from './pages/Student/Dashboard';
import Announcements from './pages/Student/Announcements';
import Assignments from './pages/Student/Assignments';
import Attendance from './pages/Student/Attendance';
import Exams from './pages/Student/Exams';
import Library from './pages/Student/Library';
import StudentPerformance from './pages/Student/Performance';
import Profile from './pages/Student/Profile';
import AdminAuthPage from './pages/Admin/AdminAuthPage';


// Parent Role Section
import DashboardParent from './pages/Parents/Dashboard';
import ParentStudentInfo from './pages/Parents/ParentStudentInfo/ParentStudentInfoPage';
import FeesPage from './pages/Parents/Fees/FeesPage';
import PaymentHistoryPage from './pages/Parents/Payment/PaymentHistoryPage';
import GradesPage from './pages/Parents/Grades/GradesPage';
import AttendancePage from './pages/Parents/Attendance/AttendancePage';
import PerformancePage from './pages/Parents/Performance/PerformancePage';


// Admin Role Section
import AdminDashboard from './pages/Admin/AdminDashboard';
import AdminUsers from './pages/Admin/AdminUsers';
import AdminClasses from './pages/Admin/AdminClasses';
import AdminExams from './pages/Admin/AdminExams';
import AdminEvents from './pages/Admin/AdminEvents';
import AdminFinances from './pages/Admin/AdminFinances';
import AdminSettings from './pages/Admin/AdminSettings';


// Teacher Role Section
import TeacherDashboard from './pages/Teacher/TeacherDashboard';
import AssignmentHomework from './pages/Teacher/AssignmentHomework';
import ClassManagement from './pages/Teacher/ClassManagement';
import PerformanceTracking from './pages/Teacher/PerformanceTracking';
import TeacherCommunication from './pages/Teacher/TeacherCommunication';
import AttendanceManagement from './pages/Teacher/AttendanceManagement';
import TeacherGradebook from './pages/Teacher/TeacherGradebook';
import TeacherResources from './pages/Teacher/TeacherResources';
import TeacherSchedule from './pages/Teacher/TeacherSchedule';


// Other Pages
import AuthPage from './pages/Auth/AuthPage';
import FeaturesPage from './pages/Features/FeaturePage';
import AboutPage from './pages/AboutUs/AboutPage';
import ContactUsPage from './pages/ContactUs/ContactUsPage';
import PricingPage from './pages/Pricing/PricingPage';
import Home from './pages/LandingPage/Home';


function App() {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    // Manually assign a userId for testing purposes
    const testUserId = '1234567890abcdef'; // Example userId
    setUserId(testUserId);

    // Fetch or get the userId somehow (e.g., from local storage, API, etc.)
    // const storedUserId = localStorage.getItem('userId'); // Example
    // if (storedUserId) {
    //   setUserId(storedUserId);
    // } else {
    //   // Handle the case where userId isn't found
    //   console.error('User ID not found in local storage');
    //   // You might want to redirect to a login page, set a default userId, or show an error message
    // }
  }, []);

  if (userId === null) {
    return <p>Loading user data...</p>; // or an error message
  }

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/pricing" element={<PricingPage />} />

          {/* Authentication Routes */}
          <Route path="/login" element={<Login isOpen={true} onClose={() => {}} />} />
          <Route path="/signup" element={<SignUp isOpen={true} onClose={()   => {}} />} />
          <Route path="/verify-email" element={<VerifyEmail />} />

          {/* Student Role Routes */}
          <Route element={<ProtectedRoute allowedRoles={['Student']} />} />
          <Route path="/student/dashboard" element={<Dashboard />} />
          <Route path="/student/announcements" element={<Announcements />} />
          <Route path="/student/assignments" element={<Assignments />} />
          <Route path="/student/attendance" element={<Attendance />} />
          <Route path="/student/exams" element={<Exams />} />
          <Route path="/student/library" element={<Library />} />
          <Route
            path="/student/performance"
            element={<StudentPerformance userId={userId} />}
          />
          <Route path="/student/profile" element={<Profile />} />
          {/* </Route> */}

          {/* Parent Role Routes */}
          <Route element={<ProtectedRoute allowedRoles={['Parent']} />} />
          <Route path="/parent/dashboard" element={<DashboardParent />} />
          <Route
            path="/parent/parent-student-info"
            element={<ParentStudentInfo />}
          />
          <Route path="/parent/fees" element={<FeesPage />} />
          <Route
            path="/parent/payment-history"
            element={<PaymentHistoryPage />}
          />
          <Route path="/parent/grades" element={<GradesPage />} />
          <Route path="/parent/attendance" element={<AttendancePage />} />
          <Route
            path="/parent/performance"
            element={<PerformancePage userId={userId} />}
          />
          {/* </Route> */}

          {/* Admin Role Routes */}
          <Route element={<ProtectedRoute allowedRoles={['Admin']} />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<AdminUsers />} />
          <Route path="/admin/classes" element={<AdminClasses />} />
          <Route path="/admin/exams" element={<AdminExams />} />
          <Route path="/admin/events" element={<AdminEvents />} />
          <Route path="/admin/finances" element={<AdminFinances />} />
          <Route path="/admin/settings" element={<AdminSettings />} />
          <Route path="/admin/auth" element={<AdminAuthPage />} />
          {/* </Route> */}

          {/* Teacher Role Routes */}
          <Route element={<ProtectedRoute allowedRoles={['Teacher']} />} />
          <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
          <Route path="/teacher/assignments" element={<AssignmentHomework />} />
          <Route path="/teacher/classes" element={<ClassManagement />} />
          <Route
            path="/teacher/attendance"
            element={<AttendanceManagement />}
          />
          <Route
            path="/teacher/performance"
            element={<PerformanceTracking />}
          />
          <Route path="/teacher/gradebook" element={<TeacherGradebook />} />
          <Route
            path="/teacher/communication"
            element={<TeacherCommunication />}
          />
          <Route path="/teacher/resources" element={<TeacherResources />} />
          <Route path="/teacher/schedule" element={<TeacherSchedule />} />
          {/* </Route> */}

          {/* Default Route */}
          <Route path="/signup" element={<AuthPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;

//frontend: https://schoolbridge-project-frontend.onrender.com
//server: https://schoolbridge-project-server.onrender.com











// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { AuthProvider } from './context/AuthContext.jsx';
// import ProtectedRoute from './components/ProtectedRoute';
// import './App.css';

// // import GlobalStyles from './styles/GlobalStyles';
// import Home from './pages/LandingPage/Home.jsx';

// // Parent Role Section
// import DashboardParent from './pages/Parents/Dashboard.jsx';
// import ParentStudentInfo from './pages/Parents/ParentStudentInfo/ParentStudentInfoPage.jsx';
// import FeesPage from './pages/Parents/Fees/FeesPage.jsx';
// import PaymentHistoryPage from './pages/Parents/Payment/PaymentHistoryPage';
// import GradesPage from './pages/Parents/Grades/GradesPage';
// import AttendancePage from './pages/Parents/Attendance/AttendancePage.jsx';
// import PerformancePage from './pages/Parents/Performance/PerformancePage';


// // Students Role Section
// import StudentDashboard from './pages/Student/StudentDashboard';
// import Dashboard from './pages/Student/Dashboard';
// import Announcements from './pages/Student/Announcements';
// import Assignments from './pages/Student/Assignments';
// import Attendance from './pages/Student/Attendance';
// import Exams from './pages/Student/Exams';
// import Library from './pages/Student/Library';
// import Performance from './pages/Student/Performance';
// import Profile from './pages/Student/Profile';


// // Admin Role Section
// import Classes from './pages/Admin/Classes';
// import Exam from './pages/Admin/Exam';
// import Teachers from './pages/Admin/Teachers';
// import Students from './pages/Admin/Students';
// import EventCalender from './pages/Admin/EventCalender';
// import SettingsProfile from './pages/Admin/SettingsProfile';
// import Announcement from './pages/Admin/Announcement';


// // Other Pages
// import AuthPage from './pages/Auth/AuthPage.jsx';
// import FeaturesPage from './pages/Features/FeaturePage.jsx';
// import AboutPage from './pages/AboutUs/AboutPage.jsx';
// import ContactUsPage from './pages/ContactUs/ContactUsPage.jsx';
// import PricingPage from './pages/Pricing/PricingPage.jsx';
// import ErrorBoundary from './components/ErrorBoundary';


// const App = () => {
//   return (
//     <AuthProvider>
//       <Router>
//         <ErrorBoundary>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/auth" element={<AuthPage />} />
//             <Route path="/features" element={<FeaturesPage />} />
//             <Route path="/about-us" element={<AboutPage />} />
//             <Route path="/contact-us" element={<ContactUsPage />} />
//             <Route path="/pricing" element={<PricingPage />} />

//             {/* Parent Role Routes */}
//             <Route
//               path="/parent/parentdashboard"
//               element={
//                 <ProtectedRoute role="Parent">
//                   <DashboardParent />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/parent/parent-student-info"
//               element={
//                 <ProtectedRoute role="Parent">
//                   <ParentStudentInfo />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/parent/fees"
//               element={
//                 <ProtectedRoute role="Parent">
//                   <FeesPage />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/parent/payment-history"
//               element={
//                 <ProtectedRoute role="Parent">
//                   <PaymentHistoryPage />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/parent/grades"
//               element={
//                 <ProtectedRoute role="Parent">
//                   <GradesPage />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/parent/attendance"
//               element={
//                 <ProtectedRoute role="Parent">
//                   <AttendancePage />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/parent/performance"
//               element={
//                 <ProtectedRoute role="Parent">
//                   <PerformancePage />
//                 </ProtectedRoute>
//               }
//             />
//             {/* <Route
//               path="/parent/performance/:childId"
//               element={
//                 <ErrorBoundary>
//                   <PerformancePage />
//                 </ErrorBoundary>
//               }
//             />
//             <Route
//               path="/parent/grades/:childId"
//               element={
//                 <ErrorBoundary>
//                   <GradesPage />
//                 </ErrorBoundary>
//               }
//             /> */}

//             {/* Admin Role Section */}
//             <Route
//               path="/admin/classes"
//               element={
//                 <ProtectedRoute role="Admin">
//                   <Classes />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/admin/exams"
//               element={
//                 <ProtectedRoute role="Admin">
//                   <Exam />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/admin/teachers"
//               element={
//                 <ProtectedRoute role="Admin">
//                   <Teachers />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/admin/students"
//               element={
//                 <ProtectedRoute role="Admin">
//                   <Students />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/admin/events"
//               element={
//                 <ProtectedRoute role="Admin">
//                   <EventCalender />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/admin/profile"
//               element={
//                 <ProtectedRoute role="Admin">
//                   <SettingsProfile />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/admin/announcement"
//               element={
//                 <ProtectedRoute role="Admin">
//                   <Announcement />
//                 </ProtectedRoute>
//               }
//             />

//             {/* Student Role Section */}
//             <Route
//               path="/student/student-dashboard"
//               element={
//                 <ProtectedRoute role="Student">
//                   <StudentDashboard />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/student/dashboard"
//               element={
//                 <ProtectedRoute role="Student">
//                   <Dashboard />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/student/announcements"
//               element={
//                 <ProtectedRoute role="Student">
//                   <Announcements />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/student/assignments"
//               element={
//                 <ProtectedRoute role="Student">
//                   <Assignments />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/student/attendance"
//               element={
//                 <ProtectedRoute role="Student">
//                   <Attendance />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/student/exams"
//               element={
//                 <ProtectedRoute role="Student">
//                   <Exams />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/student/library"
//               element={
//                 <ProtectedRoute role="Student">
//                   <Library />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/student/performance"
//               element={
//                 <ProtectedRoute role="Student">
//                   <Performance />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/student/profile"
//               element={
//                 <ProtectedRoute role="Student">
//                   <Profile />
//                 </ProtectedRoute>
//               }
//             />
//           </Routes>
//         </ErrorBoundary>
//       </Router>
//     </AuthProvider>
//   );
// };


// export default App;
