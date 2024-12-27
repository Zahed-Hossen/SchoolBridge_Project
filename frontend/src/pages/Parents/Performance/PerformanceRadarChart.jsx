import PropTypes from 'prop-types';
import { Radar } from 'react-chartjs-2';

const PerformanceRadarChart = ({ data }) => {
  const chartData = {
    labels: ['Academics', 'Behavior', 'Sports', 'Extracurricular', 'Attendance'],
    datasets: [
      {
        label: 'Performance Score',
        data: data,

      },
    ],
  };

  const options = {
    scales: {
      y: {
        ticks: {
          callback: (value) => String.fromCharCode(value), // Convert numeric back to grade
        },
      },
    },
  };

  return <Radar data={chartData} options={options} />;
};
PerformanceRadarChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default PerformanceRadarChart;
