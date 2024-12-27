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

const StudentDetails = styled.div`
  margin-top: 10px;
`;

const Detail = styled.p`
  font-size: 1rem;
  color: #333;
`;

const StudentInfo = () => {
  return (
    <Card>
      <Section id="student-info">
        <Title>Student Information</Title>
        <StudentDetails>
          <Detail>Name: John Doe</Detail>
          <Detail>Class: 10</Detail>
          <Detail>Roll Number: 23</Detail>
        </StudentDetails>
      </Section>
    </Card>
  );
};

export default StudentInfo;
