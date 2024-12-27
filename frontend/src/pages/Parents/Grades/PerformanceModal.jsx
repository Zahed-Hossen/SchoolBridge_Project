import PropTypes from 'prop-types';
import styled from 'styled-components';
import PerformanceChart from './PerformanceChart';
import ExportToPDF from './ExportToPDF';

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
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  max-width: 600px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const CloseButton = styled.button`
  background-color: #f44336;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  float: right;

  &:hover {
    background-color: #d32f2f;
  }
`;

const PerformanceModal = ({ subject, data, onClose }) => {
  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>Close</CloseButton>
        <h2>{subject} - Detailed Performance</h2>
        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.category}</td>
                <td>{item.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {data && <PerformanceChart data={data} />}
        <ExportToPDF subject={subject} data={data} />
      </ModalContent>
    </ModalOverlay>
  );
};


PerformanceModal.propTypes = {
  subject: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
      grade: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default PerformanceModal;
