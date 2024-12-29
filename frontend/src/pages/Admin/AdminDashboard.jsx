import { useState, useEffect } from 'react';
import styled from 'styled-components';
import AdminLayout from '../../components/Admin/AdminLayout';
import Footer from '../../components/Admin/Footer';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import axios from 'axios';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Stats = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

const StatCard = styled.div`
  background-color: #ecf0f1;
  padding: 20px;
  border-radius: 5px;
  flex: 1;
  margin: 10px;
  text-align: center;
  min-width: 200px;
`;

const FinancialOverview = styled.div`
  background-color: #ecf0f1;
  padding: 20px;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const UpcomingEvents = styled.div`
  background-color: #ecf0f1;
  padding: 20px;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const RecentActivities = styled.div`
  background-color: #ecf0f1;
  padding: 20px;
  border-radius: 5px;
`;

const Activity = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.3s;
  &:hover {
    background-color: #bdc3c7;
  }
`;

const ActivityIcon = styled.i`
  font-size: 24px;
  margin-right: 10px;
`;

const ActivityContent = styled.div`
  flex: 1;
`;

const ActivityTitle = styled.p`
  font-weight: bold;
  margin: 0;
`;

const ActivityDescription = styled.p`
  margin: 0;
`;

const AdminDashboard = () => {
  const [events, setEvents] = useState([]);
  const localizer = momentLocalizer(moment);

  useEffect(() => {
    // Fetch events from the backend
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          'https://schoolbridge-project-server.onrender.com/api/admin/events',
        );
        const formattedEvents = response.data.map((event) => ({
          title: event.name,
          start: new Date(event.date),
          end: new Date(event.date),
          allDay: true,
        }));
        setEvents(formattedEvents);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Fees Collected',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <>
      <AdminLayout>
        <DashboardContainer>
          <h1>Admin Dashboard</h1>
          <Stats>
            <StatCard>
              <i className="fas fa-users"></i>
              <p>Users</p>
              <p className="number">1.2K</p>
            </StatCard>
            <StatCard>
              <i className="fas fa-hourglass-half"></i>
              <p>Pending</p>
              <p className="number">300</p>
            </StatCard>
            <StatCard>
              <i className="fas fa-dollar-sign"></i>
              <p>Fees</p>
              <p className="number">1.5K</p>
            </StatCard>
            <StatCard>
              <i className="fas fa-calendar-alt"></i>
              <p>Events</p>
              <p className="number">200</p>
            </StatCard>
          </Stats>
          <FinancialOverview>
            <h2>Financial Overview</h2>
            <Line data={data} options={options} />
          </FinancialOverview>
          <UpcomingEvents>
            <h2>Upcoming Events</h2>
            <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              style={{ height: 500 }}
            />
          </UpcomingEvents>
          <RecentActivities>
            <h2>Recent Activities</h2>
            <Activity>
              <ActivityIcon className="fas fa-user-plus"></ActivityIcon>
              <ActivityContent>
                <ActivityTitle>New Registration</ActivityTitle>
                <ActivityDescription>
                  John Doe registered for Grade 10
                </ActivityDescription>
              </ActivityContent>
            </Activity>
            <Activity>
              <ActivityIcon className="fas fa-bell"></ActivityIcon>
              <ActivityContent>
                <ActivityTitle>Fee Reminder</ActivityTitle>
                <ActivityDescription>
                  Reminder sent for pending fees
                </ActivityDescription>
              </ActivityContent>
            </Activity>
            <Activity>
              <ActivityIcon className="fas fa-clock"></ActivityIcon>
              <ActivityContent>
                <ActivityTitle>Exam Schedule</ActivityTitle>
                <ActivityDescription>
                  Math exam scheduled for 15th Oct
                </ActivityDescription>
              </ActivityContent>
            </Activity>
          </RecentActivities>
        </DashboardContainer>
      </AdminLayout>
      <Footer />
    </>
  );
};

export default AdminDashboard;
