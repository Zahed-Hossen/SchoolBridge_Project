import styled from 'styled-components';
import PropTypes from 'prop-types';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  max-width: 90%;
`;

const CloseButton = styled.button`
  background-color: #0f2f42;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  float: right;
`;

const Modal = ({ children, show, onClose }) => {
  if (!show) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>Close</CloseButton>
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};
Modal.propTypes = {
  children: PropTypes.node.isRequired,
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;

