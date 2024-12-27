import { useState, useEffect } from 'react';
import styled from 'styled-components';
import AdminLayout from '../../components/Admin/AdminLayout';
import axios from 'axios';

const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
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

const Button = styled.button`
  padding: 10px 15px;
  background-color: #2c3e50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #34495e;
  }
`;

const AdminSettings = () => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    // Fetch admin profile from the backend
    const fetchProfile = async () => {
      try {
        const response = await axios.get(
          'http://localhost:5000/api/admin/profile',
        );
        setProfile(response.data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put('http://localhost:5000/api/admin/profile', profile);
      alert('Profile updated successfully');
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <AdminLayout>
      <SettingsContainer>
        <h1>Settings</h1>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={profile.name}
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
              value={profile.email}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              name="password"
              value={profile.password}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <Button type="submit">Update Profile</Button>
        </form>
      </SettingsContainer>
    </AdminLayout>
  );
};

export default AdminSettings;
