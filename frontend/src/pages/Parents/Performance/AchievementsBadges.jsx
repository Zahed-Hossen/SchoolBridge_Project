import PropTypes from 'prop-types';
import styled from 'styled-components';

const BadgeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Badge = styled.div`
  background-color: #0f2f42;
  color: white;
  padding: 10px 20px;
  border-radius: 50px;
  font-size: 0.9rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const AchievementsBadges = ({ achievements }) => {
  if (!achievements || achievements.length === 0) {
    return <p>No achievements available.</p>;
  }

  return (
    <div>
      <h2>Achievements</h2>
      <BadgeContainer>
        {achievements.map((achievement, index) => (
          <Badge key={index}>{achievement}</Badge>
        ))}
      </BadgeContainer>
    </div>
  );
};

AchievementsBadges.propTypes = {
  achievements: PropTypes.arrayOf(PropTypes.string).isRequired,
};

AchievementsBadges.defaultProps = {
  achievements: [], 
};

export default AchievementsBadges;
