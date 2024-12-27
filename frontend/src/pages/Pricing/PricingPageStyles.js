import styled from "styled-components";

// Main Container
export const Container = styled.div`
  font-family: 'Roboto', sans-serif;
  background-color: #f5f9f8;
  padding: 20px;
`;

// Header
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #f5f9f8;
`;

export const MenuIcon = styled.div`
  font-size: 24px;
`;

export const InfoIcon = styled.div`
  font-size: 24px;
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 700;
  margin: 0;
`;

// Main Image
export const MainImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

// Section Title
export const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin: 20px 0 10px;
`;

// Section Subtitle
export const SectionSubtitle = styled.p`
  font-size: 16px;
  color: #6b6b6b;
  margin-bottom: 20px;
`;

// Plans
export const Plans = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

export const PlanCard = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  flex: 1;
  padding: 20px;
  text-align: center;
`;

export const PlanImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

export const PlanDescription = styled.p`
  margin: 10px 0 0;
  font-size: 14px;
  color: #6b6b6b;
`;

// Compare Plans
export const ComparePlans = styled.div`
  margin-bottom: 20px;
`;

export const CompareCard = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px;
  margin-bottom: 10px;
`;

export const Date = styled.div`
  font-size: 14px;
  color: #6b6b6b;
  margin-bottom: 5px;
`;

export const Teams = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Team = styled.div`
  display: flex;
  align-items: center;
`;

export const TeamImage = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

export const Score = styled.div`
  font-size: 16px;
  font-weight: 700;
`;

// Help Section
export const HelpSection = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

export const HelpText = styled.p`
  font-size: 16px;
  color: #6b6b6b;
  margin-bottom: 20px;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const Button = styled.a`
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
  color: white;

  &.contact {
    background-color: #e0e0e0;
    color: #333;
  }

  &.demo {
    background-color: #007bff;
  }
`;

// Footer
export const Footer = styled.div`
  text-align: center;
  margin: 20px 0;
  font-size: 14px;
`;

export const FooterIcons = styled.div`
  font-size: 20px;
  margin: 10px 0;
`;

export const Icon = styled.i`
  margin: 0 10px;
`;
