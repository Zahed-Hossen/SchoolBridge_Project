import { useState } from 'react';

import {
  Container,
  FormContainer,
  ToggleContainer,
  Toggle,
  TogglePanel,
  SocialIcons,
  SocialIcon,
  Input,
  Button,
  HiddenButton,
  Heading,
  Subheading,
  Paragraph,
  LinkText,
} from './AuthPageStyles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGooglePlusG,
  faFacebookF,
  faGithub,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';

const AuthPage = () => {
  const [isActive, setIsActive] = useState(false);

  const handleRegisterClick = () => {
    setIsActive(true);
  };

  const handleLoginClick = () => {
    setIsActive(false);
  };

  return (
    <Container className={isActive ? 'active' : ''} id="container">
      <FormContainer className="sign-up">
        <form>
          <Heading>Create Account</Heading>
          <SocialIcons>
            <SocialIcon href="https://Google.com">
              <FontAwesomeIcon icon={faGooglePlusG} />
            </SocialIcon>
            <SocialIcon href="https://Facebook.com">
              <FontAwesomeIcon icon={faFacebookF} />
            </SocialIcon>
            <SocialIcon href="https://Github.com">
              <FontAwesomeIcon icon={faGithub} />
            </SocialIcon>
            <SocialIcon href="https://Linkedin.com">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </SocialIcon>
          </SocialIcons>
          <Subheading>or use your email for registration</Subheading>
          <Input type="text" placeholder="Name" />
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Button>Sign Up</Button>
        </form>
      </FormContainer>
      <FormContainer className="sign-in">
        <form>
          <Heading>Sign In</Heading>
          <SocialIcons>
            <SocialIcon href="https://Google.com">
              <FontAwesomeIcon icon={faGooglePlusG} />
            </SocialIcon>
            <SocialIcon href="https://Facebook.com">
              <FontAwesomeIcon icon={faFacebookF} />
            </SocialIcon>
            <SocialIcon href="https://Github.com">
              <FontAwesomeIcon icon={faGithub} />
            </SocialIcon>
            <SocialIcon href="https://Linkedin.com">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </SocialIcon>
          </SocialIcons>
          <Subheading>or use your email for login</Subheading>
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <LinkText href="#">Forget Your Password?</LinkText>
          <Button>Sign In</Button>
        </form>
      </FormContainer>
      <ToggleContainer className="toggle-container">
        <Toggle className="toggle">
          <TogglePanel className="toggle-left">
            <Heading>Welcome Back!</Heading>
            <Paragraph>
              Enter your personal details to use all of site features
            </Paragraph>
            <HiddenButton onClick={handleLoginClick} id="login">
              Sign In
            </HiddenButton>
          </TogglePanel>
          <TogglePanel className="toggle-right">
            <Heading>Hello, Friend!</Heading>
            <Paragraph>
              Register with your personal details to use all of site features
            </Paragraph>
            <HiddenButton onClick={handleRegisterClick} id="register">
              Sign Up
            </HiddenButton>
          </TogglePanel>
        </Toggle>
      </ToggleContainer>
    </Container>
  );
};

export default AuthPage;
