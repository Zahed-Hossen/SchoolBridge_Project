import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #0f2f42;
  color: #ffffff;
  padding: 2rem 1rem;
  font-family: "Roboto", sans-serif;
  text-align: center;
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const FooterContact = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;

`;

export const SocialIcons = styled.div`
  margin: 0.5rem 0;/* Adjust the margin as needed */
  display: flex; /* Display the icons in a row */
  justify-content: center; /* Center the icons horizontally */
  gap: 0.5rem; /* Add some space between the icons */

`;

export const SocialIcon = styled.a`
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

  &:hover {
  transform: scale(1.1);
`;

export const FooterCopyright = styled.div`
  text-align: center;
  margin-top: 1.5rem;
  font-size: 0.875rem;
  color: #8bd0ee;
`;
