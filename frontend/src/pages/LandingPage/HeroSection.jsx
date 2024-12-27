import { useState } from 'react';
import heroImage from '../../assets/image/LandingPage.avif';
import LoginModal from '../../components/LoginModal.jsx';
import SignUpModal from '../../components/SignUpModal.jsx';

import {
  HeroSectionContainer,
  HeroContent,
  HeroHeading,
  HeroSubheading,
  CtaButtons,
  PrimaryButton,
  SecondaryButton,
} from './HeroSectionStyles';

const HeroSection = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const openLoginModal = () => setIsLoginOpen(true);
  const openSignupModal = () => setIsSignupOpen(true);
  const closeLoginModal = () => setIsLoginOpen(false);
  const closeSignupModal = () => setIsSignupOpen(false);

  return (
    <>
      <HeroSectionContainer style={{ backgroundImage: `url(${heroImage})` }}>
        <HeroContent>
          <HeroHeading>Welcome to SchoolBridge</HeroHeading>
          <HeroSubheading>Redefining School Operations</HeroSubheading>
          <CtaButtons>
            <PrimaryButton onClick={openSignupModal}>Sign Up Now</PrimaryButton>
            <SecondaryButton onClick={openLoginModal}>Log In</SecondaryButton>
          </CtaButtons>
        </HeroContent>
      </HeroSectionContainer>

      {/* Render Modals */}
      {isLoginOpen && (
        <LoginModal isOpen={isLoginOpen} onClose={closeLoginModal} />
      )}
      {isSignupOpen && (
        <SignUpModal isOpen={isSignupOpen} onClose={closeSignupModal} />
      )}
    </>
  );
};

export default HeroSection;
