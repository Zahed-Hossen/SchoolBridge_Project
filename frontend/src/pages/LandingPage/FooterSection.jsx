import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlusG, faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import {
  FooterContainer,
  FooterContent,
  FooterContact,
  SocialIcons,
  SocialIcon,
  FooterCopyright
} from './FooterSectionStyles';

const FooterSection = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterContact>
          <p>Contact Us: support@schoolbridge.com</p>
          <p>Phone: +123 456 7890</p>
        </FooterContact>
          <SocialIcons>
            <SocialIcon href="https://Google.com"><FontAwesomeIcon icon={faGooglePlusG} /></SocialIcon>
            <SocialIcon href="https://Facebook.com"><FontAwesomeIcon icon={faFacebookF} /></SocialIcon>
            <SocialIcon href="https://Github.com"><FontAwesomeIcon icon={faGithub} /></SocialIcon>
            <SocialIcon href="https://Linkedin.com"><FontAwesomeIcon icon={faLinkedinIn} /></SocialIcon>
          </SocialIcons>
      </FooterContent>
      <FooterCopyright>
        &copy; {new Date().getFullYear()} SchoolBridge. All rights reserved.
      </FooterCopyright>
    </FooterContainer>
  );
};

export default FooterSection;
