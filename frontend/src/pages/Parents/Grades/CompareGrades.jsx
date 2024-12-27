import { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Dropdown = styled.select`
  margin: 10px 0;
  padding: 5px 10px;
  font-size: 1rem;
`;

const CompareGrades = ({ grades }) => {
  const [selectedSubjects, setSelectedSubjects] = useState([]);

  const handleSelectChange = (event) => {
    const selected = Array.from(event.target.selectedOptions, (option) => option.value);
    setSelectedSubjects(selected);
  };

  const filteredData = grades.filter((grade) => selectedSubjects.includes(grade.subject));

  const chartData = {
    labels: filteredData.map((item) => item.subject),
    datasets: [
      { label: 'Midterm', data: filteredData.map((item) => item.midterm.charCodeAt(0)), backgroundColor: '#2196f3' },
      { label: 'Final', data: filteredData.map((item) => item.final.charCodeAt(0)), backgroundColor: '#f44336' },
    ],
  };

  return (
    <div>
      <Dropdown multiple onChange={handleSelectChange}>
        {grades.map((grade, index) => (
          <option key={index} value={grade.subject}>{grade.subject}</option>
        ))}
      </Dropdown>
      <Bar data={chartData} />
    </div>
  );
};
CompareGrades.propTypes = {
  grades: PropTypes.arrayOf(
    PropTypes.shape({
      subject: PropTypes.string.isRequired,
      midterm: PropTypes.string.isRequired,
      final: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CompareGrades;

