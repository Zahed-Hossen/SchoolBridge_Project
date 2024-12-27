import styled from 'styled-components';

export const FeaturesPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  font-family: 'Nunito', sans-serif;
  background-color: #f9f9f9;
`;

export const Header = styled.header`
  width: 100%;
  background-color: #007bff;
  color: white;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MenuIcon = styled.div`
  font-size: 24px;
  cursor: pointer;
`;

export const PageTitle = styled.h1`
  font-size: 24px;
  margin: 0;
  cursor: pointer;
`;

export const Navbar = styled.nav`
  width: 100%;
  background-color: #0056b3;
  padding: 10px 0;
`;

export const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
`;

export const NavItem = styled.li`
  margin: 0 15px;
`;

export const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 18px;
  transition: color 0.3s ease;

  &:hover {
    color: #ffdd57;
  }
`;

export const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem 1rem;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
  position: relative;
  color: white;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Dark overlay */
    z-index: 1;
  }
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 2;
`;

export const HeroHeading = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const HeroSubheading = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 1.25rem;
  margin-bottom: 2rem;
`;

export const CTAButton = styled.button`
  padding: 10px 20px;
  font-size: 18px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }
`;

export const FeaturesSection = styled.section`
  width: 100%;
  padding: 50px 20px;
  background-color: #fff;
  text-align: center;
`;

export const FeaturesHeading = styled.h2`
  font-size: 36px;
  margin-bottom: 40px;
`;

export const FeaturesGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

export const FeatureCard = styled.div`
  background-color: #f1f1f1;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const FeatureIcon = styled.i`
  font-size: 40px;
  margin-bottom: 20px;
  color: #007bff;
`;

export const FeatureTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const FeatureDescription = styled.p`
  font-size: 16px;
`;

export const TestimonialsSection = styled.section`
  width: 100%;
  padding: 50px 20px;
  background-color: #f9f9f9;
  text-align: center;
`;

export const TestimonialsHeading = styled.h2`
  font-size: 36px;
  margin-bottom: 40px;
`;

export const TestimonialsGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

export const TestimonialCard = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const TestimonialText = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

export const TestimonialAuthor = styled.h3`
  font-size: 18px;
  color: #007bff;
`;

export const FAQSection = styled.section`
  width: 100%;
  padding: 50px 20px;
  background-color: #fff;
  text-align: center;
`;

export const FAQHeading = styled.h2`
  font-size: 36px;
  margin-bottom: 40px;
`;

export const FAQ = styled.div`
  margin-bottom: 20px;
  padding: 20px;
  background-color: #f1f1f1;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const FAQTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const FAQText = styled.p`
  font-size: 16px;
`;

export const Footer = styled.footer`
  width: 100%;
  background-color: #007bff;
  color: white;
  padding: 20px;
  text-align: center;
`;

export const FooterContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 10px;
`;

export const FooterLink = styled.a`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Button = styled.button`
  font-size: 1rem;
  font-weight: 600;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &.btn-primary {
    background-color: #007bff;
    color: white;

    &:hover {
      background-color: #0056b3;
    }
  }

  &.btn-secondary {
    background-color: #6c757d;
    color: white;

    &:hover {
      background-color: #5a6268;
    }
  }
`;
