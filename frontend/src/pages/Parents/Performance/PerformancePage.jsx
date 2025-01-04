import { useState, useEffect } from 'react';
import styled from 'styled-components';
// import Header from '../Header';
import PerformanceRadarChart from './PerformanceRadarChart';
import AchievementsBadges from './AchievementsBadges';
import PerformanceComparison from './PerformanceComparison';
import ParentFeedback from './ParentFeedback';
import Card from '../../../components/Card';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ParentLayout from '../../../components/Parent/ParentLayout';

const PerformanceContainer = styled.div`
  padding: 20px;
`;

const SectionTitle = styled.h2`
  color: #0f2f42;
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

const OverviewCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const PerformancePage = () => {
  const { childId } = useParams();
  const [performanceData, setPerformanceData] = useState([]);
  const [achievements, setAchievements] = useState(null); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPerformanceData = async () => {
      if (!childId) {
        setError('Child ID is undefined');
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(
          `https://schoolbridge-project-server.onrender.com/api/performance/${childId}`,
          {
            withCredentials: true,
          },
        );
        setPerformanceData(response.data.performanceScores);
        setAchievements(response.data.achievements);
      } catch (error) {
        setError(error);
        setAchievements([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPerformanceData();
  }, [childId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <ParentLayout>
        <PerformanceContainer>
          <SectionTitle>Performance Overview</SectionTitle>
          <OverviewCard>
            <p>
              <strong>Academic Performance:</strong> Excellent
            </p>
            <p>
              <strong>Behavioral Rating:</strong> Good
            </p>
            <p>
              <strong>Achievements:</strong> 3 awards this term
            </p>
          </OverviewCard>
          <SectionTitle>Performance Analysis</SectionTitle>
          <Card>
            <PerformanceRadarChart data={performanceData} />
          </Card>
          {achievements ? (
            <AchievementsBadges achievements={achievements} />
          ) : (
            <p>No achievements yet.</p>
          )}
          <PerformanceComparison />
          <ParentFeedback />
        </PerformanceContainer>
      </ParentLayout>
    </>
  );
};

export default PerformancePage;
