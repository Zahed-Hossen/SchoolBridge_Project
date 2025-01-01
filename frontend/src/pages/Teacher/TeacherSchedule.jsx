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

const ScheduleList = styled.div`
  margin-top: 20px;
`;

const ScheduleItem = styled.div`
  padding: 10px;
  background-color: #fff;
  border-radius: 5px;
  margin-bottom: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const TeacherSchedule = () => {
  const [schedule, setSchedule] = useState([]);
  const [form, setForm] = useState({
    title: '',
    date: '',
    time: '',
    description: '',
  });

  useEffect(() => {
    // Fetch schedule events from the backend
    const fetchSchedule = async () => {
      try {
        const response = await axios.get(
          'https://schoolbridge-project-server.onrender.com/api/teacher/schedule',
          {
            withCredentials: true,
          },
        );
        setSchedule(response.data);
      } catch (error) {
        console.error('Error fetching schedule:', error);
      }
    };

    fetchSchedule();
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
        'https://schoolbridge-project-server.onrender.com/api/teacher/schedule',
        form,
        {
          withCredentials: true,
        },
      );
      setSchedule((prevSchedule) => [...prevSchedule, response.data]);
      setForm({ title: '', date: '', time: '', description: '' });
    } catch (error) {
      console.error('Error saving schedule event:', error);
    }
  };

  return (
    <>
      <TeacherLayout>
        <Container>
          <Title>Teacher Schedule</Title>
          <Form onSubmit={handleSubmit}>
            <Input
              type="text"
              name="title"
              placeholder="Event Title"
              value={form.title}
              onChange={handleChange}
              required
            />
            <Input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              required
            />
            <Input
              type="time"
              name="time"
              value={form.time}
              onChange={handleChange}
              required
            />
            <Input
              type="text"
              name="description"
              placeholder="Description"
              value={form.description}
              onChange={handleChange}
            />
            <Button type="submit">Add Event</Button>
          </Form>
          <ScheduleList>
            {schedule.map((event) => (
              <ScheduleItem key={event._id}>
                <h3>{event.title}</h3>
                <p>Date: {new Date(event.date).toLocaleDateString()}</p>
                <p>Time: {event.time}</p>
                <p>Description: {event.description}</p>
              </ScheduleItem>
            ))}
          </ScheduleList>
        </Container>
      </TeacherLayout>
    </>
  );
};

export default TeacherSchedule;
