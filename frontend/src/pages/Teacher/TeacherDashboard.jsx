import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import TeacherLayout from '../../components/Teacher/TeacherLayout';
import Footer from '../../components/Teacher/Footer';

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

const Section = styled.div`
  margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: bold;
`;

const Card = styled.div`
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
`;

const QuickLink = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background-color: #0f2f42;
  color: white;
  border-radius: 5px;
  text-decoration: none;
  margin-right: 10px;
  margin-bottom: 10px;

  &:hover {
    background-color: #084265;
  }
`;

const TeacherDashboard = () => {
  const [classes, setClasses] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    // Fetch classes from the backend
    const fetchClasses = async () => {
      try {
        const response = await axios.get(
          'http://localhost:5000/api/teacher/classes',
        );
        setClasses(response.data);
      } catch (error) {
        console.error('Error fetching classes:', error);
      }
    };

    // Fetch tasks from the backend
    const fetchTasks = async () => {
      try {
        const response = await axios.get(
          'http://localhost:5000/api/teacher/tasks',
        );
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    // Fetch recent activities from the backend
    const fetchActivities = async () => {
      try {
        const response = await axios.get(
          'http://localhost:5000/api/teacher/activities',
        );
        setActivities(response.data);
      } catch (error) {
        console.error('Error fetching activities:', error);
      }
    };

    fetchClasses();
    fetchTasks();
    fetchActivities();
  }, []);

  return (
    <>
      <TeacherLayout>
        <Container>
          <Title>Teacher Dashboard</Title>
          <Section>
            <SectionTitle>Classes Overview</SectionTitle>
            {classes.map((classItem) => (
              <Card key={classItem._id}>
                <h3>{classItem.name}</h3>
                <p>Teacher: {classItem.teacher.name}</p>
                <p>Students: {classItem.students.length}</p>
              </Card>
            ))}
          </Section>
          <Section>
            <SectionTitle>Pending Tasks</SectionTitle>
            {tasks.map((task) => (
              <Card key={task._id}>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
                <p>Due Date: {new Date(task.dueDate).toLocaleDateString()}</p>
              </Card>
            ))}
          </Section>
          <Section>
            <SectionTitle>Recent Activities</SectionTitle>
            {activities.map((activity) => (
              <Card key={activity._id}>
                <h3>{activity.title}</h3>
                <p>{activity.description}</p>
                <p>Date: {new Date(activity.date).toLocaleDateString()}</p>
              </Card>
            ))}
          </Section>
          <Section>
            <SectionTitle>Quick Links</SectionTitle>
            <QuickLink href="/teacher/assignments">
              {' '}
              Assignment Homework{' '}
            </QuickLink>
            <QuickLink href="/teacher/attendance">
              {' '}
              Attendance Management{' '}
            </QuickLink>
            <QuickLink href="/teacher/classes">Class Management</QuickLink>
            <QuickLink href="/teacher/performance">
              {' '}
              Performance Tracking{' '}
            </QuickLink>
            <QuickLink href="/teacher/communication">
              {' '}
              Teacher Communication{' '}
            </QuickLink>
            <QuickLink href="/teacher/gradebook"> Teacher Gradebook </QuickLink>
            <QuickLink href="/teacher/resources"> Teacher Resources </QuickLink>
            <QuickLink href="/teacher/schedule">Teacher Schedule</QuickLink>
          </Section>
        </Container>
        <Footer />
      </TeacherLayout>
    </>
  );
};

export default TeacherDashboard;
