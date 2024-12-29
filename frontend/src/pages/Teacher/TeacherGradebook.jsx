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

const Input = styled.input`
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

const GradeList = styled.div`
  margin-top: 20px;
`;

const GradeItem = styled.div`
  padding: 10px;
  background-color: #fff;
  border-radius: 5px;
  margin-bottom: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const TeacherGradebook = () => {
  const [students, setStudents] = useState([]);
  const [grades, setGrades] = useState([]);
  const [form, setForm] = useState({
    student: '',
    subject: '',
    grade: '',
    comments: '',
  });

  useEffect(() => {
    // Fetch students from the backend
    const fetchStudents = async () => {
      try {
        const response = await axios.get(
          'https://schoolbridge-project-server.onrender.com/api/teacher/students',
        );
        setStudents(response.data);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };

    // Fetch grades from the backend
    const fetchGrades = async () => {
      try {
        const response = await axios.get(
          'https://schoolbridge-project-server.onrender.com/api/teacher/grades',
        );
        setGrades(response.data);
      } catch (error) {
        console.error('Error fetching grades:', error);
      }
    };

    fetchStudents();
    fetchGrades();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://schoolbridge-project-server.onrender.com/api/teacher/grades',
        form,
      );
      setGrades((prevGrades) => [...prevGrades, response.data]);
      setForm({ student: '', subject: '', grade: '', comments: '' });
    } catch (error) {
      console.error('Error saving grade:', error);
    }
  };

  return (
    <>
      <TeacherLayout />
      <Container>
        <Title>Teacher Gradebook</Title>
        <Form onSubmit={handleSubmit}>
          <Select
            value={form.student}
            onChange={(e) => setForm({ ...form, student: e.target.value })}
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
          <Input
            type="text"
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="grade"
            placeholder="Grade"
            value={form.grade}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="comments"
            placeholder="Comments"
            value={form.comments}
            onChange={handleChange}
          />
          <Button type="submit">Add Grade</Button>
        </Form>
        <GradeList>
          {grades.map((grade) => (
            <GradeItem key={grade._id}>
              <h3>{grade.subject}</h3>
              <p>Student: {grade.student.name}</p>
              <p>Grade: {grade.grade}</p>
              <p>Comments: {grade.comments}</p>
            </GradeItem>
          ))}
        </GradeList>
      </Container>
      <TeacherLayout />
    </>
  );
};

export default TeacherGradebook;
