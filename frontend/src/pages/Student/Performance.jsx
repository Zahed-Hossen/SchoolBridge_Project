import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import styled from 'styled-components';
import StudentLayout from '../../components/Student/StudentLayout';

const PerformanceContainer = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  min-height: 100vh;
`;

const PerformanceHeader = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #0f2f42;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const SectionHeader = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const SectionText = styled.p`
  font-size: 1rem;
`;

const ExportButtons = styled.div`
  margin-bottom: 20px;

  button {
    margin-right: 10px;
    padding: 10px 20px;
    background-color: #0f2f42;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #084265;
    }
  }
`;

const BenchmarkSection = styled.div`
  margin-top: 20px;
`;

const ChartContainer = styled.div`
  margin-top: 20px;
`;

function StudentPerformance({ userId }) {
  const [performanceData, setPerformanceData] = useState(null);
  const [benchmark, setBenchmark] = useState(null);
  const [attendance, setAttendance] = useState({ present: 0, total: 0 });
  const [grades, setGrades] = useState([]);
  const [chartData, setChartData] = useState(null);


  useEffect(() => {
    const fetchPerformanceData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/performance/${userId}`,
        );
        setPerformanceData(response.data);
        setAttendance(response.data.attendance);
        setGrades(response.data.grades);
        setBenchmark(response.data.benchmark);
        setChartData({
          labels: response.data.grades.map((g) => g.subject),
          datasets: [
            {
              label: 'Score',
              data: response.data.grades.map((g) => g.score),
              backgroundColor: 'rgba(54, 162, 235, 0.6)',
            },
          ],
        });

      } catch (error) {
        console.error('Error fetching performance data:', error);
      }
    };

    fetchPerformanceData();
  }, [userId]);

  // Export report as CSV or PDF file (Dummy function)
  const exportReport = async (type) => {
    try {
      const url = `http://localhost:5000/api/performance/export/${type}/${userId}`;
      const response = await fetch(url);
      const blob = await response.blob();

      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = `performance.${type === 'csv' ? 'csv' : 'pdf'}`;
      link.click();
    } catch (error) {
      console.error('Error exporting report:', error);
      // console.log(`Exporting report as ${format}`);
    }
  };


  return (
    <>
      <StudentLayout>
        <PerformanceContainer>
          <PerformanceHeader>Performance Overview</PerformanceHeader>

          {/* Export Buttons */}
          <ExportButtons>
            <button onClick={() => exportReport('csv')}>Export as CSV</button>
            <button onClick={() => exportReport('pdf')}>Export as PDF</button>
          </ExportButtons>

          {/* Attendance Section */}
          <Section className="attendance">
            <SectionHeader>Attendance</SectionHeader>
            <SectionText>
              Days Present: {attendance.present} / {attendance.total} (
              {((attendance.present / attendance.total) * 100).toFixed(2)}%)
            </SectionText>
          </Section>

          {/* Grades Section
          <Section className="grades">
            <SectionHeader>Grades</SectionHeader>
            <Bar
              data={{
                labels: grades.map((g) => g.subject),
                datasets: [
                  {
                    label: 'Score',
                    data: grades.map((g) => g.score),
                    backgroundColor: 'rgba(54, 162, 235, 0.6)',
                  },
                ],
              }}
            />
          </Section> */}

          {/* Grades Section */}
          <Section className="grades">
            <SectionHeader>Grades</SectionHeader>
            {chartData && (
              <ChartContainer>
                <Bar data={chartData} />
              </ChartContainer>
            )}
          </Section>


          {/* Benchmark Section */}
          {benchmark && (
            <BenchmarkSection className="benchmark">
              <SectionHeader>Class Averages</SectionHeader>
              <ul>
                {Object.entries(benchmark.classAverages).map(
                  ([subject, average]) => (
                    <li key={subject}>
                      {subject}: {average.toFixed(2)}
                    </li>
                  ),
                )}
              </ul>
            </BenchmarkSection>
          )}
        </PerformanceContainer>
      </StudentLayout>
    </>
  );
}

StudentPerformance.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default StudentPerformance;














