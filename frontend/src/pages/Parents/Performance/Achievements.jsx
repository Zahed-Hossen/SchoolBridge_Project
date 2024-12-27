import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import axios from 'axios';

const Container = styled.div`
  margin: 20px;
  padding: 20px;
  background: #f2f9fd;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 1.5rem;
  color: #0f2f42;
  margin-bottom: 20px;
`;

const BadgesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

const BadgeAnimation = keyframes`
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

const BadgeCard = styled.div`
  background: #ffffff;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 15px;
  width: 180px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: ${BadgeAnimation} 0.4s ease;

  &:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease;
  }
`;

const BadgeIcon = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 10px;
`;

const BadgeTitle = styled.h3`
  font-size: 1rem;
  color: #0f2f42;
  margin: 5px 0;
`;

const BadgeDescription = styled.p`
  font-size: 0.85rem;
  color: #555;
`;

const Achievements = ({ childId }) => {
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/achievements?childId=${childId}`,
        );
        setAchievements(response.data);
      } catch (error) {
        console.error('Error fetching achievements:', error);
      }
    };

    fetchAchievements();
  }, [childId]);

  return (
    <Container>
      <Title>Achievements</Title>
      <BadgesContainer>
        {achievements.length > 0 ? (
          achievements.map((achievement) => (
            <BadgeCard key={achievement._id}>
              <BadgeIcon src={achievement.badgeIcon} alt="Badge" />
              <BadgeTitle>{achievement.title}</BadgeTitle>
              <BadgeDescription>{achievement.description}</BadgeDescription>
            </BadgeCard>
          ))
        ) : (
          <p>No achievements yet.</p>
        )}
      </BadgesContainer>
    </Container>
  );
};
Achievements.propTypes = {
  childId: PropTypes.string.isRequired,
};

export default Achievements;

