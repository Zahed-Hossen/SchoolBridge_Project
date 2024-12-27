import PropTypes from 'prop-types';
import { Rnd } from 'react-rnd';
import {
  ModalOverlay,
  ModalContent,
  CloseButton
} from './ModalStyles';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <Rnd
        default={{
          x: 550,
          y: 180,
          width: '500',
          height: 'auto',
        }}
        minWidth={300}
        minHeight={200}
        bounds="window"
        enableResizing={{
          top: true,
          right: true,
          bottom: true,
          left: true,
          topRight: true,
          bottomRight: true,
          bottomLeft: true,
          topLeft: true,
        }}
        dragHandleClassName="modal-drag-handle"
      >
        <ModalContent onClick={(e) => e.stopPropagation()}>
          <CloseButton onClick={onClose}>&times;</CloseButton>
          {children}
        </ModalContent>
      </Rnd>
    </ModalOverlay>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
