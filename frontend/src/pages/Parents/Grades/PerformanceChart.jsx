import { Line } from 'react-chartjs-2';
import PropTypes from 'prop-types';

const PerformanceChart = ({ data }) => {
  const chartData = {
    labels: data.map((item) => item.category),
    datasets: [
      {
        label: 'Grades',
        data: data.map((item) => item.grade.charCodeAt(0)),
        borderColor: '#4caf50',
        backgroundColor: 'rgba(76, 175, 80, 0.2)',
        fill: true,
        tension: 0.3,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        ticks: {
          callback: (value) => String.fromCharCode(value),
        },
      },
    },
  };

  return <Line data={chartData} options={options} />;
};
PerformanceChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
      grade: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PerformanceChart;

