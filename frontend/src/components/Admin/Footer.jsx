import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlusG, faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const FooterContainer = styled.footer`
  background-color: #0f2f42;
  color: white;
  padding: 20px;
  text-align: center;
  position: relative;
  bottom: 0;
`;

const FooterNav = styled.nav`
  margin-top: 10px;
`;

const FooterNavList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
`;

const FooterNavItem = styled.li`
  margin: 0 10px;
`;

const FooterNavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1rem;

  &:hover {
    text-decoration: underline;
  }

`;
const SocialIcons = styled.div`
  margin: 0em 0; /* Adjust the margin as needed */
  display: flex; /* Display the icons in a row */
  justify-content: center; /* Center the icons horizontally */
  gap: 0.5rem; /* Add some space between the icons */
  margin-top: 1rem; /* Add some space at the top */
  position: left; /* Position the icons to the left *

`;

const SocialIcon = styled.a`
  border: 1px solid #ccc;
  border-radius: 20%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0px 3px;
  width: 40px;
  height: 40px;
  transition: transform 0.3s ease;
  color: #4db7e3;
  font-size: 1.5rem; /* Increase the size of the icons */
  color: #4db7e3; /* Set the color of the icons */
  decoration: ease-in-out 0.3s; /* Add a smooth transition effect */
  text-decoration: none; /* Remove underline from links */


  &:hover {
    transform: scale(1.1);
  }
`;



const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2023 SchoolBridge. All rights reserved.</p>
      <FooterNav>
        <FooterNavList>
          <FooterNavItem>
            <FooterNavLink href="#privacy-policy">Privacy Policy</FooterNavLink>
          </FooterNavItem>
          <FooterNavItem>
            <FooterNavLink href="#terms-of-service">
              Terms of Service
            </FooterNavLink>
          </FooterNavItem>
          <FooterNavItem>
            <FooterNavLink href="#contact-us">Contact Us</FooterNavLink>
          </FooterNavItem>
         <SocialIcons>
           <SocialIcon href="https://Google.com"><FontAwesomeIcon icon={faGooglePlusG} /></SocialIcon>
           <SocialIcon href="https://Facebook.com"><FontAwesomeIcon icon={faFacebookF} /></SocialIcon>
           <SocialIcon href="https://Github.com"><FontAwesomeIcon icon={faGithub} /></SocialIcon>
           <SocialIcon href="https://Linkedin.com"><FontAwesomeIcon icon={faLinkedinIn} /></SocialIcon>
         </SocialIcons>
        </FooterNavList>
      </FooterNav>
    </FooterContainer>
  );
};

export default Footer;
