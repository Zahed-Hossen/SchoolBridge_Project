import { useState, useEffect } from 'react';
import styled from 'styled-components';
import AdminLayout from '../../components/Admin/AdminLayout';
import axios from 'axios';

const ClassManagementContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ClassTable = styled.table`
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

const AdminClasses = () => {
  const [classes, setClasses] = useState([]);
  const [form, setForm] = useState({ name: '', teacher: '', students: [] });
  const [editingClass, setEditingClass] = useState(null);

  useEffect(() => {
    // Fetch classes from the backend
    const fetchClasses = async () => {
      try {
        const response = await axios.get(
          'http://localhost:5000/api/admin/classes',
        );
        setClasses(response.data);
      } catch (error) {
        console.error('Error fetching classes:', error);
      }
    };

    fetchClasses();
  }, []);

  const handleDelete = async (classId) => {
    try {
      await axios.delete(`http://localhost:5000/api/admin/classes/${classId}`);
      setClasses(classes.filter(cls => cls._id !== classId));
    } catch (error) {
      console.error('Error deleting class:', error);
    }
  };

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
      if (editingClass) {
        await axios.put(
          `http://localhost:5000/api/admin/classes/${editingClass._id}`,
          form,
        );
        setClasses(classes.map(cls => (cls._id === editingClass._id ? { ...cls, ...form } : cls)));
      } else {
        const response = await axios.post('http://localhost:5000/api/admin/classes', form);
        setClasses([...classes, response.data]);
      }
      setForm({ name: '', teacher: '', students: [] });
      setEditingClass(null);
    } catch (error) {
      console.error('Error saving class:', error);
    }
  };

  const handleEdit = (cls) => {
    setForm({ name: cls.name, teacher: cls.teacher, students: cls.students });
    setEditingClass(cls);
  };

  return (
    <AdminLayout>
      <ClassManagementContainer>
        <h1>Class Management</h1>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="teacher">Teacher</Label>
            <Input
              type="text"
              id="teacher"
              name="teacher"
              value={form.teacher}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="students">Students</Label>
            <Input
              type="text"
              id="students"
              name="students"
              value={form.students}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <Button type="submit">{editingClass ? 'Update Class' : 'Add Class'}</Button>
        </form>
        <ClassTable>
          <thead>
            <tr>
              <TableHeader>ID</TableHeader>
              <TableHeader>Name</TableHeader>
              <TableHeader>Teacher</TableHeader>
              <TableHeader>Students</TableHeader>
              <TableHeader>Actions</TableHeader>
            </tr>
          </thead>
          <tbody>
            {classes.map(cls => (
              <tr key={cls._id}>
                <TableCell>{cls._id}</TableCell>
                <TableCell>{cls.name}</TableCell>
                <TableCell>{cls.teacher}</TableCell>
                <TableCell>{cls.students.length}</TableCell>
                <TableCell>
                  <Button onClick={() => handleEdit(cls)}>Edit</Button>
                  <Button onClick={() => handleDelete(cls._id)}>Delete</Button>
                </TableCell>
              </tr>
            ))}
          </tbody>
        </ClassTable>
      </ClassManagementContainer>
    </AdminLayout>
  );
};

export default AdminClasses;