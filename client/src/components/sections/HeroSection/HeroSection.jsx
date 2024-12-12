import React, { useState } from 'react';
import './HeroSection.css';
import heroImage from '../../../assets/image/LandingPage.avif';
import LoginModal from '../../Login_Modal/LoginModal.jsx'; // Adjust path as necessary
import SignUpModal from '../../../pages/Authentication/Sign-up/SignUpPage.jsx';

const HeroSection = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false); // State for login modal
  const [isSignupOpen, setIsSignupOpen] = useState(false); // State for signup modal

  const openLoginModal = () => setIsLoginOpen(true); // Open login modal
  const openSignupModal = () => setIsSignupOpen(true); // Open signup modal
  const closeLoginModal = () => setIsLoginOpen(false); // Close login modal
  const closeSignupModal = () => setIsSignupOpen(false); // Close signup modal

  return (
    <>
      <section className="hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-content">
          <h1 className="hero-heading">Welcome to SchoolBridge</h1>
          <p className="hero-subheading">Redefining School Operations</p>
          <div className="cta-buttons">
            <button className="primary-btn" onClick={openSignupModal}>
              Sign Up Now
            </button>
            <button className="secondary-btn" onClick={openLoginModal}>
              Log In
            </button>
          </div>
        </div>
      </section>

      {/* Render Modals */}
      {isLoginOpen && <LoginModal isOpen={isLoginOpen} onClose={closeLoginModal} />}
      {isSignupOpen && <SignUpModal isOpen={isSignupOpen} onClose={closeSignupModal} />}
    </>
  );
};

export default HeroSection;




// import React from "react";
// import "./HeroSection.css"; // Import custom styles
// import heroImage from "../../../assets/image/LandingPage.avif"; // Import hero image
// const HeroSection = () => {
//   return (
//     <section className="hero-section">
//       {/* Hero Content */}
//       <div className="hero-content">
//         <h1 className="hero-heading">Welcome to SchoolBridge</h1>
//         <p className="hero-subheading">Redefining School Operations</p>

//         {/* Call-to-Action Buttons */}
//         <div className="cta-buttons">
//           <button className="primary-btn">Sign Up Now</button>
//           <button className="secondary-btn">Log In</button>
//         </div>
//       </div>

//       {/* Hero Image */}
//       <div className="hero-image">
//         <img
//           src={heroImage}
//           alt="SchoolBridge Hero Section"
//         />
//       </div>
//     </section>
//   );
// };

// export default HeroSection;