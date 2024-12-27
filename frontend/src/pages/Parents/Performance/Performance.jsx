import styled from 'styled-components';
import { Line } from 'react-chartjs-2';
import Card from '../../../components/Card';

const Section = styled.section`
  padding: 20px;
  border: 1px solid #f7f7f7;
  block-size: fit-content;
  background-color: #f7f7f7;
  border-radius: 10px;
  box-shadow 0.2s;

  box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 100%;

`;

const Title = styled.h2`
  font-size: 1.8rem;
  color: #0f2f42;
`;

const PerformanceTrend = styled.div`
  margin-top: 10px;
`;

const Participation = styled.div`
  margin-top: 20px;
  font-size: 1rem;
  color: #333;
`;

const Performance = () => {
  const performanceTrendData = {
    labels: ['Month 1', 'Month 2', 'Month 3', 'Month 4'],
    datasets: [
      {
        label: 'Performance',
        data: [80, 85, 90, 95],
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: false,
      },
    ],
  };

  return (
    <Card>
      <Section id="performance">
        <Title>Performance</Title>
        <PerformanceTrend>
          <Line data={performanceTrendData} />
        </PerformanceTrend>
        <Participation>
          <p>Participation: 75%</p>
        </Participation>
      </Section>
    </Card>
  );
};

export default Performance;
