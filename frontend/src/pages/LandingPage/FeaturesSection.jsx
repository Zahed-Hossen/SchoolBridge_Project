import PropTypes from "prop-types";
import { useNavigate } from 'react-router-dom';

import studentManagementIcon from '../../assets/icons/student-management.png';
import teacherCollaborationIcon from '../../assets/icons/teacher-collaboration.png';
import parentEngagementIcon from '../../assets/icons/parent-engagement.png';
import administrativeEfficiencyIcon from '../../assets/icons/administrative-efficiency.png';
import {
  FeaturesSectionContainer,
  SectionHeading,
  FeaturesGrid,
  FeatureCardContainer,
  IconWrapper,
  FeatureIcon,
  FeatureTitle,
  Button,
  FeatureDescription
} from './FeaturesSectionStyles';

const features = [
  {
    icon: studentManagementIcon,
    title: "Student Management",
    description: "Easily manage student profiles, attendance, and grades in one place."
  },
  {
    icon: teacherCollaborationIcon,
    title: "Teacher Collaboration",
    description: "Facilitate communication and collaboration among teachers."
  },
  {
    icon: parentEngagementIcon,
    title: "Parent Engagement",
    description: "Keep parents informed with progress updates and school notifications."
  },
  {
    icon: administrativeEfficiencyIcon,
    title: "Administrative Efficiency",
    description: "Streamline administrative tasks to save time and resources."
  }
];

const FeatureCard = ({ icon, title, description }) => {
  const navigate = useNavigate();
  return (
    <FeatureCardContainer>
      <IconWrapper>
        <FeatureIcon src={icon} alt={title} />
      </IconWrapper>
      <FeatureTitle>{title}</FeatureTitle>
      <FeatureDescription>{description}</FeatureDescription>
      <Button onClick={() => navigate('/features')}>Go to Features</Button>
    </FeatureCardContainer>
  );
};

FeatureCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const FeaturesSection = () => {
  return (
    <FeaturesSectionContainer>
      <SectionHeading>Our Key Features</SectionHeading>
      <FeaturesGrid>
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </FeaturesGrid>
    </FeaturesSectionContainer>
  );
};

export default FeaturesSection;
