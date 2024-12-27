import { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
// import StudentDashboard from '../../components/Temp/TempStudentDashboard';
// import { SidebarContainer } from '../../components/Temp/TempStudentDashboard';
import StudentLayout from '../../components/Student/StudentLayout';


// Styled components
const Container = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  min-height: 100vh;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 20px;
  color: #333;
`;

const FilterContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ddd;
  width: 200px;
`;

const DatePickerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  label {
    margin-bottom: 5px;
    font-weight: 600;
    color: #333;
  }
  .react-datepicker-wrapper {
    width: 100%;
  }
  .react-datepicker__input-container input {
    width: 100%;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ddd;
  }
`;

const AssignmentCategory = styled.div`
  margin-bottom: 30px;

  h3 {
    font-size: 1.2rem;
    font-weight: 600;
    color: #0f2f42;
    margin-bottom: 10px;
  }
`;

const AssignmentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const AssignmentItem = styled.div`
  background: #ffffff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;

  h4 {
    margin: 0;
    font-size: 1.1rem;
    font-weight: 600;
    color: #333;
  }
`;

const DueDate = styled.p`
  margin: 5px 0 0;
  font-size: 0.9rem;
  color: #555;
`;

const Status = styled.span`
  font-size: 0.9rem;
  font-weight: 600;
  padding: 5px 10px;
  border-radius: 12px;
  text-transform: uppercase;
  color: #fff;
  background-color: ${(props) =>
    props.pending
      ? '#f9a825' // Amber for Pending
      : props.submitted
      ? '#43a047' // Green for Submitted
      : '#e53935'}; // Red for Overdue
`;

const MarkAsCompleteButton = styled.button`
  background-color: #43a047;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #388e3c;
  }
`;

const Assignments = () => {
  const [assignments, setAssignments] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const fetchAssignments = useCallback(async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/assignments');
      setAssignments(response.data);
    } catch (error) {
      console.error('Error fetching assignments:', error);
    }
  }, []);

  useEffect(() => {
    fetchAssignments();
  }, [fetchAssignments]);

  const handleMarkAsComplete = (id) => {
    setAssignments((prevAssignments) =>
      prevAssignments.map((assignment) =>
        assignment.id === id
          ? { ...assignment, status: 'Submitted' }
          : assignment,
      ),
    );
  };

  console.log('assignments:', assignments); // Inspect the value of assignments

  const filteredAssignments = Array.isArray(assignments)
    ? assignments.filter((assignment) => {
        const matchesSearchTerm = assignment.title
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
        const matchesStartDate = startDate
          ? new Date(assignment.dueDate) >= startDate
          : true;
        const matchesEndDate = endDate
          ? new Date(assignment.dueDate) <= endDate
          : true;
        return matchesSearchTerm && matchesStartDate && matchesEndDate;
      })
    : [];

  const getAssignmentsByStatus = (status) =>
    filteredAssignments.filter((assignment) => assignment.status === status);

  return (
    <>
    <StudentLayout>
      {/* <Header /> */}
      <Container>
        {/* <SidebarContainer>
          <StudentDashboard />
        </SidebarContainer> */}
        <Title>Assignments</Title>

        <FilterContainer>
          <SearchInput
            type="text"
            placeholder="Search assignments..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
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

        <AssignmentCategory>
          <h3>Pending</h3>
          <AssignmentList>
            {getAssignmentsByStatus('Pending').map((assignment) => (
              <AssignmentItem key={assignment.id}>
                <div>
                  <h4>{assignment.title}</h4>
                  <DueDate>Due: {assignment.dueDate}</DueDate>
                </div>
                <div>
                  <Status pending>{assignment.status}</Status>
                  <MarkAsCompleteButton
                    onClick={() => handleMarkAsComplete(assignment.id)}
                  >
                    Mark as Complete
                  </MarkAsCompleteButton>
                </div>
              </AssignmentItem>
            ))}
          </AssignmentList>
        </AssignmentCategory>

        <AssignmentCategory>
          <h3>Submitted</h3>
          <AssignmentList>
            {getAssignmentsByStatus('Submitted').map((assignment) => (
              <AssignmentItem key={assignment.id}>
                <div>
                  <h4>{assignment.title}</h4>
                  <DueDate>Submitted on: {assignment.dueDate}</DueDate>
                </div>
                <Status submitted>{assignment.status}</Status>
              </AssignmentItem>
            ))}
          </AssignmentList>
        </AssignmentCategory>

        <AssignmentCategory>
          <h3>Overdue</h3>
          <AssignmentList>
            {getAssignmentsByStatus('Overdue').map((assignment) => (
              <AssignmentItem key={assignment.id}>
                <div>
                  <h4>{assignment.title}</h4>
                  <DueDate>Due: {assignment.dueDate}</DueDate>
                </div>
                <Status overdue>{assignment.status}</Status>
              </AssignmentItem>
            ))}
          </AssignmentList>
        </AssignmentCategory>
      </Container>
      </StudentLayout>
    </>
  );
};

export default Assignments;
