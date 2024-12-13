import { useState } from 'react';
import NavBar from "../../components/sections/NavBar/NavBar.jsx"; // Header Section
import HeroSection from "../../components/sections/HeroSection/HeroSection.jsx"; // Hero Section
import FeaturesSection from "../../components/sections/FeaturesSection/FeaturesSection.jsx"; // Features Section
import UserRolesSection from "../../components/sections/UserRoleSection/UserRoleSection.jsx"; // User Roles Section
import TestimonialsSection from "../../components/sections/TestimonialsSection/TestimonialsSection.jsx"; // Testimonials Section
import CallToActionSection from "../../components/sections/CallToActionSection/CallToActionSection.jsx"; // Call-to-Action Section
import FooterSection from "../../components/sections/FooterSection/FooterSection.jsx"; // Footer Section
import LoginModal from '../../components/Login_Modal/LoginModal.jsx';
import './LandingPage.css';

const LandingPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="landing-page">
      <NavBar onLoginClick={openModal} />
      <HeroSection />
      <FeaturesSection /> {/* Render the Features Section */}
      <UserRolesSection /> {/* Render the User Roles Section */}
      <TestimonialsSection /> {/* Render the Testimonials Section */}
      <CallToActionSection /> {/* Render the Call-to-Action Section */}
      <FooterSection /> {/* Render the Footer Section */}

      <LoginModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default LandingPage;