import { useState } from 'react';
import styled from 'styled-components';
import PerformanceRadarChart from './PerformanceRadarChart';

const SectionTitle = styled.h2`
  color: #0f2f42;
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

const PerformanceComparison = () => {
  const [selectedTerm, setSelectedTerm] = useState('Term 1');
  const performanceData = {
    'Term 1': [85, 90, 75, 80, 95],
    'Term 2': [80, 85, 70, 85, 90],
  };

  const handleTermChange = (event) => {
    setSelectedTerm(event.target.value);
  };

  return (
    <div>
      <SectionTitle>Performance Comparison</SectionTitle>
      <select onChange={handleTermChange}>
        <option value="Term 1">Term 1</option>
        <option value="Term 2">Term 2</option>
      </select>
      <PerformanceRadarChart data={performanceData[selectedTerm]} />
    </div>
  );
};

export default PerformanceComparison;
