import styled from 'styled-components';

export const AboutContainer = styled.div`
  padding: 20px;
  font-family: 'Roboto', sans-serif;
  background-color: #f0f7f7;
`;

export const Section = styled.div`
  margin-bottom: 20px;

  h1, h2, h3 {
    font-family: 'Nunito', sans-serif;
    color: #2b3a42;
  }

  h1 {
    font-size: 24px;
  }

  h2 {
    font-size: 20px;
  }

  h3 {
    font-size: 18px;
  }

  p {
    color: #4a4a4a;
    font-size: 16px;
  }
`;

export const ImageContainer = styled.div`
  text-align: center;
  margin-bottom: 20px;

  img {
    width: 100%;
    max-width: 600px;
    border-radius: 10px;
  }
`;

export const Caption = styled.div`
  position: relative;
  top: -40px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 10px;
  border-radius: 10px;
  display: inline-block;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;

  img {
    width: 100%;
    border-radius: 10px;
  }
`;

export const Timeline = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;

  ul {
    list-style: none;
    padding: 0;
  }

  ul li {
    margin-bottom: 10px;
  }

  ul li::before {
    content: '➤';
    color: #00aaff;
    margin-right: 10px;
  }
`;

export const Button = styled.a`
  display: block;
  width: 100%;
  max-width: 300px;
  margin: 20px auto;
  padding: 10px;
  background-color: ${props => props.secondary ? '#e0e0e0' : '#00aaff'};
  color: ${props => props.secondary ? '#4a4a4a' : 'white'};
  text-align: center;
  border-radius: 10px;
  text-decoration: none;
`;

export const Footer = styled.div`
  text-align: center;
  padding: 20px;
  background-color: #e0e0e0;
  border-radius: 10px;
`;

export const FooterIcons = styled.div`
  margin-top: 10px;
`;

export const Icon = styled.i`
  margin: 0 10px;
  color: #4a4a4a;
`;

export const Card = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-10px);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

export const CardContent = styled.div`
  padding: 20px;
`;

export const CardTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const CardDescription = styled.p`
  font-size: 16px;
  color: #666;
`;
