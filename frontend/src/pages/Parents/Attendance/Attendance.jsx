
import styled from 'styled-components';
import Card from '../../../components/Card';

const Section = styled.section`
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 1.8rem;
  color: #0f2f42;
`;

const AttendanceDetails = styled.div`
  margin-top: 10px;
`;

const Detail = styled.p`
  font-size: 1rem;
  color: #333;
`;

const Attendance = () => {
  return (
    <Card>
      <Section id="attendance">
        <Title>Attendance</Title>
        <AttendanceDetails>
          <Detail>Days Present: 180</Detail>
          <Detail>Days Absent: 20</Detail>
        </AttendanceDetails>
      </Section>
    </Card>
  );
};

export default Attendance;
