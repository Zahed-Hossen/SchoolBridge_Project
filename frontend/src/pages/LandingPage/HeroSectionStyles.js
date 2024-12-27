import styled from 'styled-components';

export const HeroSectionContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem 1rem;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  position: relative;
  color: #fff;
  

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
  z-index: 100;
`;

export const HeroHeading = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 2rem;
  margin-bottom: 1rem;


  @media (max-width: 1200px) {
    font-size: 2.75rem;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2.25rem;
  }
`;

export const HeroSubheading = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 2.25rem;
  margin-bottom: 2rem;

  @media (max-width: 1200px) {
    font-size: 2.125rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.875rem;
  }
`;

export const CtaButtons = styled.div`
  display: flex;
  gap: 1rem;
  psoition: relative;
  z-index: 100;
  align-items: center;
`;

export const PrimaryButton = styled.button`
  background-color: #4db7e3;
  color: #fff;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 20px;
  font-family: "Montserrat", sans-serif;
  cursor: pointer;
  align-items: center;
  position: relative;
  z-index: 100;


  &:hover {
    background-color: #269fd1;
  }

  @media (max-width: 1200px) {
    padding: 0.5rem 1rem;
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem 1rem;
  }
`;

export const SecondaryButton = styled.button`
  background-color: #e3f1fb;
  color: #269fd1;
  padding: 0.75rem 1.5rem;
  border: 2px solid #269fd1;
  border-radius: 20px;
  font-family: "Montserrat", sans-serif;
  cursor: pointer;

  &:hover {
    background-color: #c1e5f6;
  }

  @media (max-width: 1200px) {
    padding: 0.5rem 1rem;
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem 1rem;
  }
`;
