import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 400px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  background-color: #0f2f42;
  color: white;
  border: none;
  padding: 10px 20px;
  margin-right: 10px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #094162;
  }
`;

const Modal = ({ data, onClose, onSubmit }) => {
  const [formData, setFormData] = useState(data);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <h2>Edit Info</h2>
        <Input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
        />
        {formData.type === 'parent' && (
          <>
            <Input
              name="email"
              value={formData.email || ''}
              onChange={handleChange}
              placeholder="Email"
            />
            <Input
              name="contact"
              value={formData.contact || ''}
              onChange={handleChange}
              placeholder="Contact"
            />
            <Input
              name="address"
              value={formData.address || ''}
              onChange={handleChange}
              placeholder="Address"
            />
          </>
        )}
        {formData.type === 'child' && (
          <>
            <Input
              name="grade"
              value={formData.grade || ''}
              onChange={handleChange}
              placeholder="Grade"
            />
            <Input
              name="rollNumber"
              value={formData.rollNumber || ''}
              onChange={handleChange}
              placeholder="Roll Number"
            />
          </>
        )}
        <Button onClick={() => onSubmit(formData)}>Save</Button>
        <Button onClick={onClose} style={{ backgroundColor: 'red' }}>
          Cancel
        </Button>
      </ModalContent>
    </ModalOverlay>
  );
};
Modal.propTypes = {
  data: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Modal;

