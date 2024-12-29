import { useState, useEffect } from 'react';
import styled from 'styled-components';
import AdminLayout from '../../components/Admin/AdminLayout';
import axios from 'axios';

const FinancialManagementContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const FinancialTable = styled.table`
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

const AdminFinances = () => {
  const [fees, setFees] = useState([]);
  const [form, setForm] = useState({
    student: '',
    amount: '',
    status: 'Pending',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    // Fetch fees from the backend
    const fetchFees = async () => {
      try {
        const response = await axios.get(
          'https://schoolbridge-project-server.onrender.com/api/admin/fees',
        );
        setFees(response.data);
      } catch (error) {
        console.error('Error fetching fees:', error);
      }
    };

    fetchFees();
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
          `https://schoolbridge-project-server.onrender.com/api/admin/fees/${editingId}`,
          form,
        );
        setFees((prevFees) =>
          prevFees.map((fee) =>
            fee._id === editingId ? { ...fee, ...form } : fee,
          ),
        );
      } else {
        const response = await axios.post(
          'https://schoolbridge-project-server.onrender.com/api/admin/fees',
          form,
        );
        setFees((prevFees) => [...prevFees, response.data]);
      }
      setForm({ student: '', amount: '', status: 'Pending' });
      setIsEditing(false);
      setEditingId(null);
    } catch (error) {
      console.error('Error saving fee:', error);
    }
  };

  const handleEdit = (fee) => {
    setForm({ student: fee.student, amount: fee.amount, status: fee.status });
    setIsEditing(true);
    setEditingId(fee._id);
  };

  const handleDelete = async (feeId) => {
    try {
      await axios.delete(
        `https://schoolbridge-project-server.onrender.com/api/admin/fees/${feeId}`,
      );
      setFees(fees.filter((fee) => fee._id !== feeId));
    } catch (error) {
      console.error('Error deleting fee:', error);
    }
  };

  return (
    <AdminLayout>
      <FinancialManagementContainer>
        <h1>Financial Management</h1>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="student">Student</Label>
            <Input
              type="text"
              id="student"
              name="student"
              value={form.student}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="amount">Amount</Label>
            <Input
              type="number"
              id="amount"
              name="amount"
              value={form.amount}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="status">Status</Label>
            <select
              id="status"
              name="status"
              value={form.status}
              onChange={handleChange}
              required
            >
              <option value="Pending">Pending</option>
              <option value="Paid">Paid</option>
            </select>
          </FormGroup>
          <Button type="submit">{isEditing ? 'Update' : 'Add'} Fee</Button>
        </form>
        <FinancialTable>
          <thead>
            <tr>
              <TableHeader>ID</TableHeader>
              <TableHeader>Student</TableHeader>
              <TableHeader>Amount</TableHeader>
              <TableHeader>Status</TableHeader>
              <TableHeader>Actions</TableHeader>
            </tr>
          </thead>
          <tbody>
            {fees.map((fee) => (
              <tr key={fee._id}>
                <TableCell>{fee._id}</TableCell>
                <TableCell>{fee.student}</TableCell>
                <TableCell>{fee.amount}</TableCell>
                <TableCell>{fee.status}</TableCell>
                <TableCell>
                  <Button onClick={() => handleEdit(fee)}>Edit</Button>
                  <Button onClick={() => handleDelete(fee._id)}>Delete</Button>
                </TableCell>
              </tr>
            ))}
          </tbody>
        </FinancialTable>
      </FinancialManagementContainer>
    </AdminLayout>
  );
};

export default AdminFinances;
