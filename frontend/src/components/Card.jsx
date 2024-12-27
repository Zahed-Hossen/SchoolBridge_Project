
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardContainer = styled.div`
  background-color: #c1e5f6;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px;
  padding: 20px;
  transition: transform 0.2s;
  cursor: pointer;

  @media (max-width: 768px) {
    margin: 10px;
    padding: 10px;
  }

  &:hover {
    transform: translateY(-5px);
  }
`;

const Card = ({ children }) => {
  return <CardContainer>{children}</CardContainer>;
};
Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;

