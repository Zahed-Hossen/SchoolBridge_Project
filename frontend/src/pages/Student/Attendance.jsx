import { useState, useEffect, useCallback } from 'react';
import {
  Container,
  Title,
  AttendanceTable,
  TableHeader,
  TableRow,
  TableCell,
  ChartContainer,
  FilterContainer,
  DatePickerWrapper,
} from './AttendanceStyles.js';

import { Bar } from 'react-chartjs-2';
import 'chart.js/auto'; // Required for Chart.js
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

import StudentLayout from '../../components/Student/StudentLayout';

const Attendance = () => {
  const [attendanceData, setAttendanceData] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const fetchAttendanceData = useCallback(async () => {
    try {
      const response = await axios.get(
        'https://schoolbridge-project-server.onrender.com/api/attendance',
        {
          withCredentials: true,
        },
        {
          params: {
            startDate: startDate.toISOString().split('T')[0],
            endDate: endDate.toISOString().split('T')[0],
          },
        },
      );
      if (Array.isArray(response.data)) {
        setAttendanceData(response.data);
      } else {
        console.error('API response is not an array:', response.data);
        setAttendanceData([]);
      }
    } catch (error) {
      console.error('Error fetching attendance data:', error);
      setAttendanceData([]);
    }
  }, [startDate, endDate]);

  useEffect(() => {
    fetchAttendanceData();
  }, [fetchAttendanceData]);

  const attendanceSummary = {
    Present: attendanceData.filter((day) => day.status === 'Present').length,
    Absent: attendanceData.filter((day) => day.status === 'Absent').length,
  };

  // Data for the attendance chart
  const chartData = {
    labels: ['Present', 'Absent'],
    datasets: [
      {
        label: 'Attendance Summary',
        data: [attendanceSummary.Present, attendanceSummary.Absent],
        backgroundColor: ['#43a047', '#e53935'],
      },
    ],
  };

  return (
    <>
      <StudentLayout>
        <Container>
          <Title>Attendance</Title>
          <FilterContainer>
            <DatePickerWrapper>
              <label>Start Date:</label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </DatePickerWrapper>
            <DatePickerWrapper>
              <label>End Date:</label>
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
              />
            </DatePickerWrapper>
          </FilterContainer>
          <AttendanceTable>
            <thead>
              <TableRow>
                <TableHeader>Date</TableHeader>
                <TableHeader>Status</TableHeader>
              </TableRow>
            </thead>
            <tbody>
              {attendanceData.map((entry, index) => (
                <TableRow key={index}>
                  <TableCell>{entry.date}</TableCell>
                  <TableCell status={entry.status}>{entry.status}</TableCell>
                </TableRow>
              ))}
            </tbody>
          </AttendanceTable>
          <ChartContainer>
            <Bar data={chartData} options={{ responsive: true }} />
          </ChartContainer>
        </Container>
      </StudentLayout>
    </>
  );
};

export default Attendance;
