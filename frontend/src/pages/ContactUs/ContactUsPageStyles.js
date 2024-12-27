import styled from "styled-components";

// Main Container
export const Container = styled.div`
  font-family: Arial, sans-serif;
  background-color: #f5f9f8;
  padding: 20px;
`;

// Header
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;

export const MenuIcon = styled.div`
  font-size: 20px;
`;

export const InfoIcon = styled.div`
  font-size: 20px;
`;

export const Title = styled.h1`
  font-size: 20px;
  margin: 0;
`;

// Image Container
export const ImageContainer = styled.div`
  text-align: center;
  margin: 20px 0;

  img {
    width: 100%;
    max-width: 600px;
    border-radius: 10px;
  }
`;

// Section Title
export const SectionTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin: 20px 0 10px;
`;

// Section Description
export const SectionDescription = styled.div`
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
`;

// Button Group
export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  background-color: #4a90e2;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
`;

// Form Group
export const FormGroup = styled.div`
  margin-bottom: 15px;
`;

export const Label = styled.label`
  display: block;
  font-size: 14px;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  resize: vertical;
`;

export const SubmitButton = styled.button`
  background-color: #4a90e2;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
`;

// FAQ Section
export const FAQSection = styled.div`
  margin: 20px 0;
`;

export const FAQItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  background-color: white;

  span {
    font-size: 14px;
  }
`;

// Social Media
export const SocialMedia = styled.div`
  margin: 20px 0;
`;

export const SocialItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  background-color: white;

  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
`;

export const SocialButton = styled.button`
  background-color: #4a90e2;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
`;

// Map Container
export const MapContainer = styled.div`
  text-align: center;
  margin: 20px 0;

  img {
    width: 100%;
    max-width: 600px;
    border-radius: 10px;
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
