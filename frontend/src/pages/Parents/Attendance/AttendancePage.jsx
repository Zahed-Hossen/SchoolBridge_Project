import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Modal from '../Attendance/Modal.jsx';
import { SummaryCard, CalendarCard } from '../../../components/CardComponents';
import ParentLayout from '../../../components/Parent/ParentLayout';

const AttendanceContainer = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  color: #0f2f42;
  margin-bottom: 15px;
`;

const AttendanceSummary = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #f9f9f9;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid #ccc;
  margin-bottom: 20px;
`;

const SummaryItem = styled.div`
  text-align: center;
`;

const Calendar = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
`;

const Day = styled.div`
  padding: 10px;
  background-color: ${(props) =>
    props.status === 'present'
      ? '#d4edda'
      : props.status === 'absent'
      ? '#f8d7da'
      : props.status === 'leave'
      ? '#fff3cd'
      : '#f9f9f9'};
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: center;
  color: #333;
  font-size: 0.9rem;
  cursor: pointer;
`;

const FilterContainer = styled.div`
  margin-bottom: 20px;
`;

const FilterLabel = styled.label`
  margin-right: 10px;
`;

const FilterSelect = styled.select`
  padding: 5px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const AttendancePage = () => {
  const [attendanceData, setAttendanceData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState('2024-12');
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        const response = await fetch(
          'https://schoolbridge-project-server.onrender.com/api/attendance',
        );
        const data = await response.json();
        setAttendanceData(data);
        setFilteredData(
          data.filter((record) => record.date.startsWith(selectedMonth)),
        );
      } catch (error) {
        console.error('Error fetching attendance data:', error);
      }
    };

    fetchAttendance();
  }, [selectedMonth]);

  const totalDays = filteredData.length;
  const presentDays = filteredData.filter((d) => d.status === 'present').length;
  const absentDays = filteredData.filter((d) => d.status === 'absent').length;
  const leaveDays = filteredData.filter((d) => d.status === 'leave').length;

  const attendancePercentage = ((presentDays / totalDays) * 100).toFixed(2);

  const handleDayClick = (day) => {
    setModalData(day);
  };

  const closeModal = () => {
    setModalData(null);
  };

  const handleFilter = (month) => {
    setSelectedMonth(month);
    setFilteredData(
      attendanceData.filter((record) => record.date.startsWith(month)),
    );
  };

  return (
    <>
      <ParentLayout>
        <AttendanceContainer>
          <Title>Attendance</Title>
          <FilterContainer>
            <FilterLabel htmlFor="month">Select Month:</FilterLabel>
            <CalendarCard>
              <FilterSelect
                id="month"
                value={selectedMonth}
                onChange={(e) => handleFilter(e.target.value)}
              >
                <option value="2024-12">December 2024</option>
                <option value="2024-11">November 2024</option>
                <option value="2024-10">October 2024</option>
                <option value="2024-09">September 2024</option>
                <option value="2024-10">January 2024</option>
                <option value="2024-08">August 2024</option>
                <option value="2024-07">July 2024</option>
                <option value="2024-06">June 2024</option>
                <option value="2024-10">February 2024</option>

              </FilterSelect>
            </CalendarCard>
          </FilterContainer>
          <AttendanceSummary>
            <SummaryCard>
              <SummaryItem>
                <h3>{presentDays}</h3>
                <p>Days Present</p>
              </SummaryItem>
            </SummaryCard>
            <SummaryCard>
              <SummaryItem>
                <h3>{absentDays}</h3>
                <p>Days Absent</p>
              </SummaryItem>
            </SummaryCard>
            <SummaryCard>
              <SummaryItem>
                <h3>{leaveDays}</h3>
                <p>Days on Leave</p>
              </SummaryItem>
            </SummaryCard>
            <SummaryCard>
              <SummaryItem>
                <h3>{attendancePercentage}%</h3>
                <p>Attendance</p>
              </SummaryItem>
            </SummaryCard>
          </AttendanceSummary>
          <Calendar>
            {filteredData.map((day, index) => (
              <Day
                key={index}
                status={day.status}
                onClick={() => handleDayClick(day)}
              >
                {day.date.split('-')[2]}
              </Day>
            ))}
          </Calendar>

          {modalData && (
            <Modal show={!!modalData} onClose={closeModal}>
              <h1>Modal Title</h1>
              <p>Some modal content.</p>
              <button onClick={closeModal}>Close</button>
            </Modal>
          )}
          <Modal show={modalData} onClose={closeModal}>
            {modalData && (
              <>
                <h3>Attendance Details</h3>
                <p>
                  <strong>Date:</strong> {modalData.date}
                </p>
                <p>
                  <strong>Status:</strong> {modalData.status}
                </p>
                <p>
                  <strong>Hours Attended:</strong>{' '}
                  {modalData.hoursAttended || 'N/A'}
                </p>
                <p>
                  <strong>Subjects Missed:</strong>{' '}
                  {modalData.subjectsMissed?.join(', ') || 'N/A'}
                </p>
                <button onClick={closeModal}>Close</button>
              </>
            )}
          </Modal>
        </AttendanceContainer>
      </ParentLayout>
    </>
  );
};

export default AttendancePage;
