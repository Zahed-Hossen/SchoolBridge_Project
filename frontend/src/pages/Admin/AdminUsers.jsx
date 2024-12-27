import { useState, useEffect } from 'react';
import styled from 'styled-components';
import AdminLayout from '../../components/Admin/AdminLayout';
import axios from 'axios';

const UserManagementContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserTable = styled.table`
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
const Section = styled.div`
  margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
  margin-bottom: 10px;
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
`;

const UserImage = styled.img`
  border-radius: 50%;
  margin-right: 10px;
`;


const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: '', email: '', role: 'Student' });
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    // Fetch users from the backend
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          'http://localhost:5000/api/admin/users',
        );
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
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
          `http://localhost:5000/api/admin/users/${editingId}`,
          form,
        );
        setUsers((prevUsers) =>
          prevUsers.map((user) =>
            user._id === editingId ? { ...user, ...form } : user
          )
        );
      } else {
        const response = await axios.post(
          'http://localhost:5000/api/admin/users',
          form,
        );
        setUsers((prevUsers) => [...prevUsers, response.data]);
      }
      setForm({ name: '', email: '', role: 'Student' });
      setIsEditing(false);
      setEditingId(null);
    } catch (error) {
      console.error('Error saving user:', error);
    }
  };

  const handleEdit = (user) => {
    setForm({ name: user.name, email: user.email, role: user.role });
    setIsEditing(true);
    setEditingId(user._id);
  };

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`http://localhost:5000/api/admin/users/${userId}`);
      setUsers(users.filter((user) => user._id !== userId));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <AdminLayout>
      <UserManagementContainer>
        <h1>User Management</h1>
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
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="role">Role</Label>
            <select
              id="role"
              name="role"
              value={form.role}
              onChange={handleChange}
              required
            >
              <option value="Student">Student</option>
              <option value="Teacher">Teacher</option>
              <option value="Parent">Parent</option>
              <option value="Admin">Sub-Admin</option>
            </select>
          </FormGroup>
          <Button type="submit">{isEditing ? 'Update' : 'Add'} User</Button>
        </form>
        <UserTable>
          <thead>
            <tr>
              <TableHeader>ID</TableHeader>
              <TableHeader>Name</TableHeader>
              <TableHeader>Email</TableHeader>
              <TableHeader>Role</TableHeader>
              <TableHeader>Actions</TableHeader>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <TableCell>{user._id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>
                  <Button onClick={() => handleEdit(user)}>Edit</Button>
                  <Button onClick={() => handleDelete(user._id)}>Delete</Button>
                </TableCell>
              </tr>
            ))}
          </tbody>
        </UserTable>

        <Section>
          <SectionTitle>User Management</SectionTitle>
          <Item>
            <UserProfile>
              <UserImage
                src="https://storage.googleapis.com/a1aa/image/QG7Z5Lw7dIZbNlDc7bIL3IY5oRSHHyG5qSSC5tijwMOyyQfJA.jpg"
                alt="Profile picture of Michael Brown"
                width="40"
                height="40"
              />
              Michael Brown
            </UserProfile>
            <Button>Manage</Button>
          </Item>
          <Item>
            <UserProfile>
              <UserImage
                src="https://storage.googleapis.com/a1aa/image/QG7Z5Lw7dIZbNlDc7bIL3IY5oRSHHyG5qSSC5tijwMOyyQfJA.jpg"
                alt="Profile picture of Michael Brown"
                width="40"
                height="40"
              />
              James Smith
            </UserProfile>
            <Button>Manage</Button>
          </Item>
          {/* Add more user items as needed */}
        </Section>
        <Section>
          <SectionTitle>Finances</SectionTitle>
          <Item>
            <div>
              <i className="fas fa-dollar-sign"></i> Fees Collected
            </div>
            <Button>View</Button>
          </Item>
          <Item>
            <div>
              <i className="fas fa-dollar-sign"></i> Pending Fees
            </div>
            <Button>View</Button>
          </Item>
          {/* Add more financial items as needed */}
        </Section>
      </UserManagementContainer>
    </AdminLayout>
  );
};

export default AdminUsers;
