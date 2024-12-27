import styled from 'styled-components';
import Navbar from './Sidebar.jsx';
import FeaturesSection from "./FeaturesSection.jsx";
import HeroSection from "./HeroSection.jsx";
import TestimonialsSection from "./TestimonialsSection.jsx";
import UserRoleSection from "./UserRoleSection.jsx";
import FooterSection from "./FooterSection.jsx";
import CallToActionSection from "./CallToActionSection.jsx";

export const LandingPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const LandingPage = () => {

  return (
    <LandingPageContainer>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <UserRoleSection />
      <TestimonialsSection />
      <CallToActionSection />
      <FooterSection />
   </LandingPageContainer>
  );
};

export default LandingPage;
