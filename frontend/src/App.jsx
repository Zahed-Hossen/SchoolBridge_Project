import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

//Authentication
import Login from './components/LoginModal';
import SignUp from './components/SignUpModal';
import VerifyEmail from './components/OtpVerification';

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
    const testUserId = '1234567890abcdef';
    setUserId(testUserId);
  }, []);

  if (userId === null) {
    return <p>Loading user data...</p>;
  }

  // function App() {
  //   const [userId, setUserId] = useState(null);
  //   const [loading, setLoading] = useState(true);

  //   useEffect(() => {
  //     const fetchUserId = async () => {
  //       try {
  //         const response = await axios.get(
  //           'https://schoolbridge-project-server.onrender.com/api/auth/user-id',
  //         );
  //         const fetchedUserId = response.data.userId;
  //         setUserId(fetchedUserId);
  //         localStorage.setItem('userId', fetchedUserId);
  //       } catch (error) {
  //         console.error('Error fetching user ID:', error);
  //         // Handle the error, e.g., redirect to login page or show an error message
  //       } finally {
  //         setLoading(false);
  //       }
  //       // const testUserId = '1234567890abcdef';
  //       // setUserId(testUserId);
  //     };

  //     const storedUserId = localStorage.getItem('userId');
  //     if (storedUserId) {
  //       setUserId(storedUserId);
  //       setLoading(false);
  //     } else {
  //       fetchUserId();
  //     }
  //   }, []);

  //   if (loading) {
  //     return <p>Loading user data...</p>; // or an error message
  //   }

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
          <Route
            path="/login"
            element={<Login isOpen={true} onClose={() => {}} />}
          />
          <Route
            path="/signup"
            element={<SignUp isOpen={true} onClose={() => {}} />}
          />
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
}

export default App;


//frontend: https://schoolbridge-project-frontend.onrender.com
//server: https://schoolbridge-project-server.onrender.com

