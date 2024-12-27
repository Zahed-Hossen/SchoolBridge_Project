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

const GradesList = styled.div`
  margin-top: 10px;
`;

const GradeItem = styled.p`
  font-size: 1rem;
  color: #333;
  margin-bottom: 10px;
`;

const Grades = () => {
  return (
    <Card>
      <Section id="grades">
        <Title>Grades</Title>
        <GradesList>
          <GradeItem>Math: A</GradeItem>
          <GradeItem>Science: B+</GradeItem>
          <GradeItem>English: A-</GradeItem>
        </GradesList>
      </Section>
    </Card>
  );
};

export default Grades;
