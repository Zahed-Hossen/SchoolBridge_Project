import { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const Th = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  background-color: #f2f2f2;
`;

const Td = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

const Button = styled.button`
  padding: 8px 12px;
  margin-right: 10px;
  background-color: #0f2f42;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #084265;
  }
`;

const AdminAuthManagement = () => {
  const [users, setUsers] = useState([]);
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    // Fetch users and logs from the backend
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/admin/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    const fetchLogs = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/admin/logs');
        const data = await response.json();
        setLogs(data);
      } catch (error) {
        console.error('Error fetching logs:', error);
      }
    };

    fetchUsers();
    fetchLogs();
  }, []);

  const handleApprove = async (userId) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/users/${userId}/approve`,
        {
          method: 'POST',
        },
      );
      if (response.ok) {
        setUsers(
          users.map((user) =>
            user.id === userId ? { ...user, approved: true } : user,
          ),
        );
      } else {
        alert('Failed to approve user.');
      }
    } catch (error) {
      console.error('Error approving user:', error);
    }
  };

  const handleDeny = async (userId) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/users/${userId}/deny`,
        {
          method: 'POST',
        },
      );
      if (response.ok) {
        setUsers(users.filter((user) => user.id !== userId));
      } else {
        alert('Failed to deny user.');
      }
    } catch (error) {
      console.error('Error denying user:', error);
    }
  };

  return (
    <Container>
      <Title>Admin Authentication Management</Title>
      <h2>Manage User Roles</h2>
      <Table>
        <thead>
          <tr>
            <Th>ID</Th>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Role</Th>
            <Th>Approved</Th>
            <Th>Actions</Th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <Td>{user.id}</Td>
              <Td>{user.name}</Td>
              <Td>{user.email}</Td>
              <Td>{user.role}</Td>
              <Td>{user.approved ? 'Yes' : 'No'}</Td>
              <Td>
                {!user.approved && (
                  <>
                    <Button onClick={() => handleApprove(user.id)}>
                      Approve
                    </Button>
                    <Button onClick={() => handleDeny(user.id)}>Deny</Button>
                  </>
                )}
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
      <h2>Authentication Logs</h2>
      <Table>
        <thead>
          <tr>
            <Th>ID</Th>
            <Th>User</Th>
            <Th>Action</Th>
            <Th>Date</Th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log) => (
            <tr key={log.id}>
              <Td>{log.id}</Td>
              <Td>{log.user}</Td>
              <Td>{log.action}</Td>
              <Td>{log.date}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default AdminAuthManagement;
