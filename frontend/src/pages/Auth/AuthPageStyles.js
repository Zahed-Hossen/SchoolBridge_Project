import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 480px;
  transition: all 0.6s ease-in-out;
  z-index: 1001;
  
  &.active .sign-in {
    transform: translateX(100%);
  }

  &.active .sign-up {
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
    animation: move 0.6s;
  }

  &.active .toggle-container {
    transform: translateX(-100%);
    border-radius: 0 150px 100px 0;
  }

  &.active .toggle {
    transform: translateX(50%);
  }

  &.active .toggle-left {
    transform: translateX(0);
  }

  &.active .toggle-right {
    transform: translateX(200%);
  }
`;

export const FormContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  width: 50%;
  z-index: 1;
  opacity: 0;

  &.sign-in {
    left: 0;
    z-index: 2;
    opacity: 1;
  }

  &.sign-up {
    left: 0;
  }

  form {
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 40px;
    height: 100%;
  }
`;

export const ToggleContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: all 0.6s ease-in-out;
  border-radius: 150px 0 0 100px;
  z-index: 1000;
`;

export const Toggle = styled.div`
  background-color: #174863;
  height: 100%;
  background: linear-gradient(to right, #187fb1, #174863);
  color: #fff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: all 0.6s ease-in-out;
`;

export const TogglePanel = styled.div`
  position: absolute;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 30px;
  text-align: center;
  top: 0;
  transform: translateX(0);
  transition: all 0.6s ease-in-out;

  &.toggle-left {
    transform: translateX(-200%);
  }

  &.toggle-right {
    right: 0;
    transform: translateX(0);
  }
`;

export const SocialIcons = styled.div`
  margin: 20px 0;
  background-color: transparent;
`;

export const SocialIcon = styled.a`
  border: 1px solid #ccc;
  border-radius: 20%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 3px;
  width: 40px;
  height: 40px;
  color: #187fb1;

  &:hover {
    border-color: #187fb1;
    color: #187fb1;
`;

export const Input = styled.input`
  background-color:rgb(221, 230, 235);
  margin: 8px 0;
  padding: 10px 15px;
  font-size: 13px;
  border-radius: 8px;
  width: 100%;
  outline: none;

  &::placeholder {
    color: #999;
  }
`;

export const Button = styled.button`
  background-color: #155677;
  color: #fff;
  font-size: 12px;
  padding: 10px 45px;
  border: 1px solid transparent;
  border-radius: 8px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-top: 10px;
  cursor: pointer;

  &:hover {
    background-color: #187fb1;
    transition: background-color 0.3s ease;
  }
`;

export const HiddenButton = styled(Button)`
  background-color: transparent;
  border-color: #fff;
`;

export const Heading = styled.h1`
  font-family: "Poppins", sans-serif;
  margin-bottom: 1rem;
  color: #ffffff;
`;

export const Subheading = styled.span`
  font-size: 12px;
  font-size: 12px;
`;

export const Paragraph = styled.p`
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.3px;
  margin: 20px;
`;

export const LinkText = styled.a`
  color: #187fb1;
  font-size: 13px;
  text-decoration: none;
  margin: 15px 0 10px;
  transition: color 0.3s ease;

  &:hover {
    color:rgba(50, 153, 179, 0.57);
  }
`;

export const move = keyframes`
  0%,
  49.99% {
    opacity: 0;
    z-index: 1;
  }
  50%,
  100% {
    opacity: 1;
    z-index: 5;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;
