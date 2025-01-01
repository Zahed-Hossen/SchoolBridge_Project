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

const ClassList = styled.div`
  margin-top: 20px;
`;

const ClassItem = styled.div`
  padding: 10px;
  background-color: #fff;
  border-radius: 5px;
  margin-bottom: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const ClassManagement = () => {
  const [classes, setClasses] = useState([]);
  const [form, setForm] = useState({ name: '', teacher: '', students: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    // Fetch classes from the backend
    const fetchClasses = async () => {
      try {
        const response = await axios.get(
          'https://schoolbridge-project-server.onrender.com/api/teacher/classes',
          {
            withCredentials: true,
          },
        );
        setClasses(response.data);
      } catch (error) {
        console.error('Error fetching classes:', error);
      }
    };

    fetchClasses();
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
      if (isEditing) {
        await axios.put(
          `https://schoolbridge-project-server.onrender.com/api/teacher/classes/${editingId}`,
          form,
          {
            withCredentials: true,
          },
        );
        setClasses((prevClasses) =>
          prevClasses.map((classItem) =>
            classItem._id === editingId ? { ...classItem, ...form } : classItem,
          ),
        );
      } else {
        const response = await axios.post(
          'https://schoolbridge-project-server.onrender.com/api/teacher/classes',
          form,
          {
            withCredentials: true,
          },
        );
        setClasses((prevClasses) => [...prevClasses, response.data]);
      }
      setForm({ name: '', teacher: '', students: '' });
      setIsEditing(false);
      setEditingId(null);
    } catch (error) {
      console.error('Error saving class:', error);
    }
  };

  const handleEdit = (classItem) => {
    setForm({
      name: classItem.name,
      teacher: classItem.teacher,
      students: classItem.students.join(', '),
    });
    setIsEditing(true);
    setEditingId(classItem._id);
  };

  const handleDelete = async (classId) => {
    try {
      await axios.delete(
        `https://schoolbridge-project-server.onrender.com/api/teacher/classes/${classId}`,
        {
          withCredentials: true,
        },
      );
      setClasses(classes.filter((classItem) => classItem._id !== classId));
    } catch (error) {
      console.error('Error deleting class:', error);
    }
  };

  return (
    <>
      <TeacherLayout>
        <Container>
          <Title>Class Management</Title>
          <Form onSubmit={handleSubmit}>
            <Input
              type="text"
              name="name"
              placeholder="Class Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <Input
              type="text"
              name="teacher"
              placeholder="Teacher ID"
              value={form.teacher}
              onChange={handleChange}
              required
            />
            <Input
              type="text"
              name="students"
              placeholder="Student IDs (comma separated)"
              value={form.students}
              onChange={handleChange}
              required
            />
            <Button type="submit">{isEditing ? 'Update' : 'Add'} Class</Button>
          </Form>
          <ClassList>
            {classes.map((classItem) => (
              <ClassItem key={classItem._id}>
                <h3>{classItem.name}</h3>
                <p>Teacher: {classItem.teacher.name}</p>
                <p>
                  Students:{' '}
                  {classItem.students.map((student) => student.name).join(', ')}
                </p>
                <Button onClick={() => handleEdit(classItem)}>Edit</Button>
                <Button onClick={() => handleDelete(classItem._id)}>
                  Delete
                </Button>
              </ClassItem>
            ))}
          </ClassList>
        </Container>
      </TeacherLayout>
    </>
  );
};

export default ClassManagement;
