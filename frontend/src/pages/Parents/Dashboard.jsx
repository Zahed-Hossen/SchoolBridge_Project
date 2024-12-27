import styled from 'styled-components';
// import Header from './Header';
import StudentInfo from './ParentStudentInfo/StudentInfo';
import Fees from './Fees/Fees.jsx';
import PaymentHistory from './Payment/PaymentHistory';
import Grades from './Grades/Grades.jsx';
import Attendance from './Attendance/Attendance.jsx';
import Performance from './Performance/Performance.jsx';
import Footer from './Footer/Footer.jsx';
import ParentLayout from '../../components/Parent/ParentLayout';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
`;

const Content = styled.div`
  flex: 1;
  padding-bottom: 60px; /* To ensure content is not hidden behind the fixed footer */
`;

const Dashboard = () => {
  return (
    <>
    <ParentLayout>
    <Container>
      <Content>
        <StudentInfo />
        <Fees />
        <PaymentHistory />
        <Grades />
        <Attendance />
        <Performance />
      </Content>
      <Footer />
      </Container>
    </ParentLayout>
  </>
  );
};

export default Dashboard;






























// const logError = (combinedMessage) => {
//   if (combinedMessage) {
//     console.log('Type of combinedMessage:', typeof combinedMessage);
//     try {
//       console.error(JSON.stringify(combinedMessage, null, 2));
//     } catch (e) {
//       console.error('Error stringifying combinedMessage:', e);
//       console.error('combinedMessage:', combinedMessage);
//     }
//   } else {
//     console.error('combinedMessage is undefined or null');
//   }
// };

// // Example usage in an API call
// const fetchData = async () => {
//   try {
//     const response = await fetch('/api/data');
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const data = await response.json();
//     // Process data
//   } catch (error) {
//     logError(error.message);
//   }
// };
