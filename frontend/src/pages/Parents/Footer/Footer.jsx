import styled from 'styled-components';

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


const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2023 SchoolBridge. All rights reserved.</p>
      <FooterNav>
        <FooterNavList>
          <FooterNavItem><FooterNavLink href="#privacy-policy">Privacy Policy</FooterNavLink></FooterNavItem>
          <FooterNavItem><FooterNavLink href="#terms-of-service">Terms of Service</FooterNavLink></FooterNavItem>
          <FooterNavItem><FooterNavLink href="#contact-us">Contact Us</FooterNavLink></FooterNavItem>
        </FooterNavList>
      </FooterNav>
    </FooterContainer>
  );
};

export default Footer;
