import React from "react";
import "./FooterSection.css";

import facebookIcon from "../../../assets/icons/facebook-icon.svg";
import twitterIcon from "../../../assets/icons/twitter-icon.svg";
import linkedinIcon from '../../../assets/icons/linkedin-icon.svg';
import instagramIcon from '../../../assets/icons/instagram-icon.svg';

const FooterSection = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* <div className="footer-links">
          <a href="/about" className="footer-link">About Us</a>
          <a href="/features" className="footer-link">Features</a>
          <a href="/pricing" className="footer-link">Pricing</a>
          <a href="/contact" className="footer-link">Contact</a>
        </div> */}
        <div className="footer-contact">
          <p>Contact Us: support@schoolbridge.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
        <div className="footer-social">
          <a href="https://facebook.com" className="social-icon">
            <img src={facebookIcon} alt="Facebook" />
          </a>
          <a href="https://twitter.com" className="social-icon">
            <img src={twitterIcon} alt="Twitter" />
          </a>
          <a href="https://linkedin.com" className="social-icon">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
          <a href="https://instagram.com" className="social-icon">
            <img src={instagramIcon} alt="Instagram" />
          </a>
        </div>
      </div>
      <div className="footer-copyright">
        <p>&copy; 2024 SchoolBridge. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default FooterSection;






// // Import SVG icons

// const FooterSection = () => {
//   return (
//     <footer className="footer-section">
//       <div className="footer-content">
//         <div className="footer-links">
//           <a href="/about">About Us</a>
//           <a href="/contact">Contact</a>
//           <a href="/privacy">Privacy Policy</a>
//           <a href="/faq">FAQ</a>
//         </div>
//         <div className="footer-contact">
//           <p>Email: <a href="mailto:support@schoolbridge.com">support@schoolbridge.com</a></p>
//           <p>Phone: <a href="tel:1-800-SCH-BRDG">1-800-SCH-BRDG</a></p>
//         </div>
//         <div className="footer-social">
//           <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
//             <img src={facebookIcon} alt="Facebook" />
//           </a>
//           <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
//             <img src={twitterIcon} alt="Twitter" />
//           </a>
//           <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
//             <img src={linkedinIcon} alt="LinkedIn" />
//           </a>
//           <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
//             <img src={instagramIcon} alt="Instagram" />
//           </a>
//         </div>
//       </div>
//       <div className="footer-bottom">
//         <p>© 2024 SchoolBridge. All Rights Reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default FooterSection;