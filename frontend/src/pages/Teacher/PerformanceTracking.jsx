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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #0f2f42;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #084265;
  }
`;

const PerformanceList = styled.div`
  margin-top: 20px;
`;

const PerformanceItem = styled.div`
  padding: 10px;
  background-color: #fff;
  border-radius: 5px;
  margin-bottom: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const PerformanceTracking = () => {
  const [students, setStudents] = useState([]);
  const [performanceData, setPerformanceData] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState('');

  useEffect(() => {
    // Fetch students from the backend
    const fetchStudents = async () => {
      try {
        const response = await axios.get(
          'http://localhost:5000/api/teacher/students',
          {
            withCredentials: true,
          },
        );
        setStudents(response.data);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };

    fetchStudents();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:5000/api/teacher/performance/${selectedStudent}`,
        {
          withCredentials: true,
        },
      );
      setPerformanceData(response.data);
    } catch (error) {
      console.error('Error fetching performance data:', error);
    }
  };

  return (
    <>
      <TeacherLayout>
        <Container>
          <Title>Performance Tracking</Title>
          <Form onSubmit={handleSubmit}>
            <Select
              value={selectedStudent}
              onChange={(e) => setSelectedStudent(e.target.value)}
              required
            >
              <option value="" disabled>
                Select Student
              </option>
              {students.map((student) => (
                <option key={student._id} value={student._id}>
                  {student.name}
                </option>
              ))}
            </Select>
            <Button type="submit">View Performance</Button>
          </Form>
          <PerformanceList>
            {performanceData.map((data) => (
              <PerformanceItem key={data._id}>
                <h3>{data.subject}</h3>
                <p>Grade: {data.grade}</p>
                <p>Comments: {data.comments}</p>
              </PerformanceItem>
            ))}
          </PerformanceList>
        </Container>
      </TeacherLayout>
    </>
  );
};

export default PerformanceTracking;
