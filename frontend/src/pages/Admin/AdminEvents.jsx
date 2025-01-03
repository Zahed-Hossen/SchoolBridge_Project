import { useState, useEffect } from 'react';
import styled from 'styled-components';
import AdminLayout from '../../components/Admin/AdminLayout';
import axios from 'axios';

const EventManagementContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const EventTable = styled.table`
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

const AdminEvents = () => {
  const [events, setEvents] = useState([]);
  const [form, setForm] = useState({ name: '', date: '', location: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    // Fetch events from the backend
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          'https://schoolbridge-project-server.onrender.com/api/admin/events',
          {
            withCredentials: true,
          },
        );
        console.log('Fetched events:', response.data); // Debugging statement
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
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
        console.log('Updating event:', form); // Debugging statement
        await axios.put(
          `https://schoolbridge-project-server.onrender.com/api/admin/events/${editingId}`,
          form,
          {
            withCredentials: true,
          },
        );
        setEvents((prevEvents) =>
          prevEvents.map((event) =>
            event._id === editingId ? { ...event, ...form } : event,
          ),
        );
      } else {
        console.log('Adding new event:', form); // Debugging statement
        const response = await axios.post(
          'https://schoolbridge-project-server.onrender.com/api/admin/events',
          form,
          {
            withCredentials: true,
          },
        );
        setEvents((prevEvents) => [...prevEvents, response.data]);
      }
      setForm({ name: '', date: '', location: '' });
      setIsEditing(false);
      setEditingId(null);
    } catch (error) {
      console.error('Error saving event:', error);
    }
  };

  const handleEdit = (event) => {
    setForm({ name: event.name, date: event.date, location: event.location });
    setIsEditing(true);
    setEditingId(event._id);
  };

  const handleDelete = async (eventId) => {
    try {
      await axios.delete(
        `https://schoolbridge-project-server.onrender.com/api/admin/events/${eventId}`,
      ),
        {
          withCredentials: true,
        };
      setEvents(events.filter((event) => event._id !== eventId));
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

  return (
    <AdminLayout>
      <EventManagementContainer>
        <h1>Event Management</h1>
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
            <Label htmlFor="location">Location</Label>
            <Input
              type="text"
              id="location"
              name="location"
              value={form.location}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <Button type="submit">{isEditing ? 'Update' : 'Add'} Event</Button>
        </form>
        <EventTable>
          <thead>
            <tr>
              <TableHeader>ID</TableHeader>
              <TableHeader>Name</TableHeader>
              <TableHeader>Date</TableHeader>
              <TableHeader>Location</TableHeader>
              <TableHeader>Actions</TableHeader>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event._id}>
                <TableCell>{event._id}</TableCell>
                <TableCell>{event.name}</TableCell>
                <TableCell>
                  {new Date(event.date).toLocaleDateString()}
                </TableCell>
                <TableCell>{event.location}</TableCell>
                <TableCell>
                  <Button onClick={() => handleEdit(event)}>Edit</Button>
                  <Button onClick={() => handleDelete(event._id)}>
                    Delete
                  </Button>
                </TableCell>
              </tr>
            ))}
          </tbody>
        </EventTable>
      </EventManagementContainer>
    </AdminLayout>
  );
};

export default AdminEvents;
