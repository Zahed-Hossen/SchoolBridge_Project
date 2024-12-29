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

const Textarea = styled.textarea`
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

const AssignmentList = styled.div`
  margin-top: 20px;
`;

const AssignmentItem = styled.div`
  padding: 10px;
  background-color: #fff;
  border-radius: 5px;
  margin-bottom: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const AssignmentHomework = () => {
  const [assignments, setAssignments] = useState([]);
  const [form, setForm] = useState({ title: '', description: '', dueDate: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    // Fetch assignments from the backend
    const fetchAssignments = async () => {
      try {
        const response = await axios.get(
          'https://schoolbridge-project-server.onrender.com/api/teacher/assignments',
        );
        setAssignments(response.data);
      } catch (error) {
        console.error('Error fetching assignments:', error);
      }
    };

    fetchAssignments();
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
          `https://schoolbridge-project-server.onrender.com/api/teacher/assignments/${editingId}`,
          form,
        );
        setAssignments((prevAssignments) =>
          prevAssignments.map((assignment) =>
            assignment._id === editingId
              ? { ...assignment, ...form }
              : assignment,
          ),
        );
      } else {
        const response = await axios.post(
          'https://schoolbridge-project-server.onrender.com/api/teacher/assignments',
          form,
        );
        setAssignments((prevAssignments) => [
          ...prevAssignments,
          response.data,
        ]);
      }
      setForm({ title: '', description: '', dueDate: '' });
      setIsEditing(false);
      setEditingId(null);
    } catch (error) {
      console.error('Error saving assignment:', error);
    }
  };

  const handleEdit = (assignment) => {
    setForm({
      title: assignment.title,
      description: assignment.description,
      dueDate: assignment.dueDate,
    });
    setIsEditing(true);
    setEditingId(assignment._id);
  };

  const handleDelete = async (assignmentId) => {
    try {
      await axios.delete(
        `https://schoolbridge-project-server.onrender.com/api/teacher/assignments/${assignmentId}`,
      );
      setAssignments(
        assignments.filter((assignment) => assignment._id !== assignmentId),
      );
    } catch (error) {
      console.error('Error deleting assignment:', error);
    }
  };

  return (
    <>
      <TeacherLayout>
        <Container>
          <Title>Assignment Homework</Title>
          <Form onSubmit={handleSubmit}>
            <Input
              type="text"
              name="title"
              placeholder="Title"
              value={form.title}
              onChange={handleChange}
              required
            />
            <Textarea
              name="description"
              placeholder="Description"
              value={form.description}
              onChange={handleChange}
              required
            />
            <Input
              type="date"
              name="dueDate"
              value={form.dueDate}
              onChange={handleChange}
              required
            />
            <Button type="submit">
              {isEditing ? 'Update' : 'Add'} Assignment
            </Button>
          </Form>
          <AssignmentList>
            {assignments.map((assignment) => (
              <AssignmentItem key={assignment._id}>
                <h3>{assignment.title}</h3>
                <p>{assignment.description}</p>
                <p>
                  Due Date: {new Date(assignment.dueDate).toLocaleDateString()}
                </p>
                <Button onClick={() => handleEdit(assignment)}>Edit</Button>
                <Button onClick={() => handleDelete(assignment._id)}>
                  Delete
                </Button>
              </AssignmentItem>
            ))}
          </AssignmentList>
        </Container>
      </TeacherLayout>
    </>
  );
};

export default AssignmentHomework;
