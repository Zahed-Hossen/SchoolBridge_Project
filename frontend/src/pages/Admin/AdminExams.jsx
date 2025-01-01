import { useState, useEffect } from 'react';
import styled from 'styled-components';
import AdminLayout from '../../components/Admin/AdminLayout';
import axios from 'axios';

const ExamManagementContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ExamTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const TableHeader = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  background-color: #f2f2f2;
`;

const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

const Button = styled.button`
  padding: 8px 12px;
  margin-right: 10px;
  background-color: #2c3e50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #34495e;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const AdminExams = () => {
  const [exams, setExams] = useState([]);
  const [form, setForm] = useState({ subject: '', date: '', class: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    // Fetch exams from the backend
    const fetchExams = async () => {
      try {
        const response = await axios.get(
          'http://localhost:5000/api/admin/exams',
          {
            withCredentials: true,
          },
        );
        setExams(response.data);
      } catch (error) {
        console.error('Error fetching exams:', error);
      }
    };

    fetchExams();
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
        console.log('Updating exam:', form); // Debugging statement
        await axios.put(
          `http://localhost:5000/api/admin/exams/${editingId}`,
          form,
          {
            withCredentials: true,
          },
        );
        setExams((prevExams) =>
          prevExams.map((exam) =>
            exam._id === editingId ? { ...exam, ...form } : exam,
          ),
        );
      } else {
        const response = await axios.post(
          'http://localhost:5000/api/admin/exams',
          form,
          {
            withCredentials: true,
          },
        );
        setExams((prevExams) => [...prevExams, response.data]);
      }
      setForm({ subject: '', date: '', class: '' });
      setIsEditing(false);
      setEditingId(null);
    } catch (error) {
      console.error('Error saving exam:', error);
    }
  };

  const handleEdit = (exam) => {
    setForm({ subject: exam.subject, date: exam.date, class: exam.class });
    setIsEditing(true);
    setEditingId(exam._id);
  };

  const handleDelete = async (examId) => {
    try {
      await axios.delete(`http://localhost:5000/api/admin/exams/${examId}`, {
        withCredentials: true,
      });
      setExams(exams.filter((exam) => exam._id !== examId));
    } catch (error) {
      console.error('Error deleting exam:', error);
    }
  };

  return (
    <AdminLayout>
      <ExamManagementContainer>
        <h1>Exam Management</h1>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="subject">Subject</Label>
            <Input
              type="text"
              id="subject"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="date">Date</Label>
            <Input
              type="date"
              id="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="class">Class</Label>
            <Input
              // type="text"
              id="class"
              name="class"
              value={form.class}
              onChange={handleChange}
              required
              //  <select
              //   id="class"
              //   name="class"
              //   value={form.class}
              //   onChange={handleChange}
              //   required
              // >
              //   <option value="">Select Class</option>
              //   {classes.map((cls) => (
              //     <option key={cls._id} value={cls._id}>
              //       {cls.name}
              //     </option>
              //   ))}
              // </select>
            />
          </FormGroup>
          <Button type="submit">{isEditing ? 'Update' : 'Add'} Exam</Button>
        </form>
        <ExamTable>
          <thead>
            <tr>
              <TableHeader>ID</TableHeader>
              <TableHeader>Subject</TableHeader>
              <TableHeader>Date</TableHeader>
              <TableHeader>Class</TableHeader>
              <TableHeader>Actions</TableHeader>
            </tr>
          </thead>
          <tbody>
            {exams.map((exam) => (
              <tr key={exam._id}>
                <TableCell>{exam._id}</TableCell>
                <TableCell>{exam.subject}</TableCell>
                <TableCell>
                  {new Date(exam.date).toLocaleDateString()}
                </TableCell>
                <TableCell>{exam.class}</TableCell>
                <TableCell>
                  <Button onClick={() => handleEdit(exam)}>Edit</Button>
                  <Button onClick={() => handleDelete(exam._id)}>Delete</Button>
                </TableCell>
              </tr>
            ))}
          </tbody>
        </ExamTable>
      </ExamManagementContainer>
    </AdminLayout>
  );
};

export default AdminExams;
