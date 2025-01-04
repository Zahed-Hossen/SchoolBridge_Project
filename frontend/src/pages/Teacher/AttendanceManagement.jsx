import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import TeacherLayout from '../../components/Teacher/TeacherLayout';

const Container = styled.div`
  padding: 20px;
  font-family: 'Nunito', sans-serif;
  background-color: #e6f7f9;
  color: #2c3e50;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const AttendanceList = styled.div`
  margin-top: 20px;
`;

const AttendanceItem = styled.div`
  padding: 10px;
  background-color: #fff;
  border-radius: 5px;
  margin-bottom: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const AttendanceManagement = () => {
  const [attendanceRecords, setAttendanceRecords] = useState([]);

  useEffect(() => {
    // Fetch attendance records from the backend
    const fetchAttendanceRecords = async () => {
      try {
        const response = await axios.get(
          'https://schoolbridge-project-server.onrender.com/api/teacher/attendance',
          {
            withCredentials: true,
          },
        );
        console.log('Fetched attendance records:', response.data);
        setAttendanceRecords(response.data);
      } catch (error) {
        console.error('Error fetching attendance records:', error);
      }
    };

    fetchAttendanceRecords();
  }, []);

  return (
    <>
      <TeacherLayout>
        <Container>
          <Title>Attendance Management</Title>
          <AttendanceList>
            {Array.isArray(attendanceRecords) && attendanceRecords.length > 0 ? (
              attendanceRecords.map((record) => (
                <AttendanceItem key={record._id}>
                  <p>Student: {record.student.name}</p>
                  <p>Status: {record.status}</p>
                  <p>Date: {new Date(record.date).toLocaleDateString()}</p>
                </AttendanceItem>
              ))
            ) : (
              <p>No attendance records available</p>
            )}
          </AttendanceList>
        </Container>
      </TeacherLayout>
    </>
  );
};

export default AttendanceManagement;









// import { useState, useEffect } from 'react';
// import styled from 'styled-components';
// import axios from 'axios';
// import TeacherLayout from '../../components/Teacher/TeacherLayout';

// const Container = styled.div`
//   padding: 20px;
//   font-family: 'Nunito', sans-serif;
//   background-color: #e6f7f9;
//   color: #2c3e50;
// `;

// const Title = styled.h1`
//   font-size: 24px;
//   margin-bottom: 20px;
// `;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   margin-bottom: 20px;
// `;

// const Select = styled.select`
//   padding: 10px;
//   margin-bottom: 10px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
// `;

// const Button = styled.button`
//   padding: 10px 20px;
//   background-color: #0f2f42;
//   color: white;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;

//   &:hover {
//     background-color: #084265;
//   }
// `;

// const AttendanceList = styled.div`
//   margin-top: 20px;
// `;

// const AttendanceItem = styled.div`
//   padding: 10px;
//   background-color: #fff;
//   border-radius: 5px;
//   margin-bottom: 10px;
//   box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
// `;

// const AttendanceManagement = () => {
//   const [students, setStudents] = useState([]);
//   const [attendance, setAttendance] = useState([]);
//   const [selectedStudent, setSelectedStudent] = useState('');
//   const [status, setStatus] = useState('Present');

//   useEffect(() => {
//     // Fetch students from the backend
//     const fetchStudents = async () => {
//       try {
//         const response = await axios.get(
//           'https://schoolbridge-project-server.onrender.com/api/teacher/students',
//           {
//             withCredentials: true,
//           },
//         );
//         setStudents(response.data);
//       } catch (error) {
//         console.error('Error fetching students:', error);
//       }
//     };

//     // Fetch attendance records from the backend
//     const fetchAttendance = async () => {
//       try {
//         const response = await axios.get(
//           'https://schoolbridge-project-server.onrender.com/api/teacher/attendance',
//           {
//             withCredentials: true,
//           },
//         );
//         setAttendance(response.data);
//       } catch (error) {
//         console.error('Error fetching attendance:', error);
//       }
//     };

//     fetchStudents();
//     fetchAttendance();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         'https://schoolbridge-project-server.onrender.com/api/teacher/attendance',
//         {
//           withCredentials: true,
//         },
//         {
//           studentId: selectedStudent,
//           status,
//         },
//       );
//       setAttendance((prevAttendance) => [...prevAttendance, response.data]);
//       setSelectedStudent('');
//       setStatus('Present');
//     } catch (error) {
//       console.error('Error marking attendance:', error);
//     }
//   };

//   return (
//     <>
//       <TeacherLayout>
//         <Container>
//           <Title>Attendance Management</Title>
//           <Form onSubmit={handleSubmit}>
//             <Select
//               value={selectedStudent}
//               onChange={(e) => setSelectedStudent(e.target.value)}
//               required
//             >
//               <option value="" disabled>
//                 Select Student
//               </option>
//               {students.map((student) => (
//                 <option key={student._id} value={student._id}>
//                   {student.name}
//                 </option>
//               ))}
//             </Select>
//             <Select
//               value={status}
//               onChange={(e) => setStatus(e.target.value)}
//               required
//             >
//               <option value="Present">Present</option>
//               <option value="Absent">Absent</option>
//             </Select>
//             <Button type="submit">Mark Attendance</Button>
//           </Form>
//           <AttendanceList>
//             {attendance.map((record) => (
//               <AttendanceItem key={record._id}>
//                 <p>Student: {record.student.name}</p>
//                 <p>Status: {record.status}</p>
//                 <p>Date: {new Date(record.date).toLocaleDateString()}</p>
//               </AttendanceItem>
//             ))}
//           </AttendanceList>
//         </Container>
//       </TeacherLayout>
//     </>
//   );
// };

// export default AttendanceManagement;
