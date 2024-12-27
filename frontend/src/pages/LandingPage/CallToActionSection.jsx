import { useNavigate } from 'react-router-dom';

import {
  CallToActionSectionContainer,
  CallToActionContent,
  CallToActionHeading,
  CallToActionSubheading,
  CallToActionButtons,
  PrimaryButton,
  SecondaryButton,
} from './CallToActionSectionStyles';

const CallToActionSection = () => {
  const navigate = useNavigate();
  return (
    <CallToActionSectionContainer>
      <CallToActionContent>
        <CallToActionHeading>
          Ready to Transform Your School?
        </CallToActionHeading>
        <CallToActionSubheading>
          Join thousands of educators, parents, and administrators improving
          school management with SchoolBridge.
        </CallToActionSubheading>
        <CallToActionButtons>
          <PrimaryButton onClick={() => navigate('/features')}>Get Started Now</PrimaryButton>
          <SecondaryButton onClick={() => navigate('/about-us')}>
            Learn More
          </SecondaryButton>
        </CallToActionButtons>
      </CallToActionContent>
    </CallToActionSectionContainer>
  );
};

export default CallToActionSection;
