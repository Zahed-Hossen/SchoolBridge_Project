import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: linear-gradient(to right, #174863, #187fb1);
  padding: 2rem;
  border-radius: 8px;
  width: 100%;
  max-width: 500px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 90%;
    padding: 1rem;
  }
`;


export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  width: 100%;
`;

export const ModalTitle = styled.h2`
  margin: 0;
  font-size: 1.5rem;
`;

export const ModalBody = styled.div`
  margin-top: 0;
  margin-bottom: 1rem;
  width: 100%;
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;

  label {
    display: block;
    margin-bottom: 5px;
  }

  select,
  input {
    width: 95%;
    padding: 10px 15px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #eee;
    margin: 8px 0;
    font-size: 13px;
  }
`;

export const Input = styled.input`
  background-color: #269fd1;
  border: none;
  margin: 8px 0;
  padding: 10px 15px;
  font-size: 13px;
  border-radius: 8px;
  width: 100%;
  outline: none;
`;


export const ErrorMessage = styled.span`
  color: red;
  font-size: 0.85rem;
  margin-top: 4px;
`;

export const FeedbackMessage = styled.div`
  margin-top: 10px;
  padding: 10px;
  font-size: 14px;
  border-radius: 5px;
  display: none;

  &.success {
    color: #155724;
    background-color: #d4edda;
    border: 1px solid #c3e6cb;
  }

  &.error {
    color: #721c24;
    background-color: #f8d7da;
    border: 1px solid #f5c6cb;
  }
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;

  input {
    margin-right: 10px;
  }
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  width: 100%;
`;

export const PrimaryButton = styled.button.attrs(props => ({
  primary: props.primary ? true : undefined,
}))`
  background-color: ${props => (props.primary ? '#4db7e3' : '#e3f1fb')};
  color: ${props => (props.primary ? '#fff' : '#269fd1')};
  padding: 0.75rem 1.5rem;
  border: ${props => (props.primary ? 'none' : '2px solid #269fd1')};
  border-radius: 20px;
  font-family: "Montserrat", sans-serif;
  cursor: pointer;

  &:hover {
    background-color: ${props => (props.primary ? '#269fd1' : '#c1e5f6')};
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
`;
