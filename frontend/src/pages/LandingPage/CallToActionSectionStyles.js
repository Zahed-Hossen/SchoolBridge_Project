import styled from 'styled-components';

export const CallToActionSectionContainer = styled.section`
  padding: 2rem 1rem;
  background-color: #155677;
  color: #ffffff;
  text-align: center;
`;

export const CallToActionContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export const CallToActionHeading = styled.h2`
  font-size: 2rem;
  font-family: "Poppins", sans-serif;
  margin-bottom: 1rem;
  color: #ffffff;
`;

export const CallToActionSubheading = styled.p`
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
  margin-bottom: 2rem;
  line-height: 1.5;
  color: #e3f1fb;
`;

export const CallToActionButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const PrimaryButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #4db7e3;
  border: none;
  border-radius: 36px;
  font-family: "Nunito", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #269fd1;
  }
`;

export const SecondaryButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: transparent;
  border: 2px solid #4db7e3;
  border-radius: 36px;
  font-family: "Nunito", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #4db7e3;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #4db7e3;
    color: #ffffff;
  }
`;