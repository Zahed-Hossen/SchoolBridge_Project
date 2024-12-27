import styled from 'styled-components';

export const FeaturesSectionContainer = styled.section`
  padding: 2rem 1rem;
  background-color: #c1e5f6; /* Light blue background */
  text-align: center;
`;

export const SectionHeading = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: 2rem;
  color: #0f2f42; /* Dark blue */
  margin-bottom: 2rem;
`;

export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  justify-items: center;
`;

export const FeatureCardContainer = styled.div`
  background-color: #fff;
  border: 1px solid #c1e5f6;
  border-radius: 10px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

export const Button = styled.button`
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

export const IconWrapper = styled.div`
  margin-bottom: 1rem;
`;

export const FeatureIcon = styled.img`
  width: 50px;
  height: 50px;
`;

export const FeatureTitle = styled.h3`
  font-family: "Montserrat", sans-serif;
  font-size: 1.25rem;
  color: #155677; /* Medium blue */
  margin-bottom: 0.5rem;
`;

export const FeatureDescription = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  color: #174863; /* Text blue */
  line-height: 1.5;
`;
