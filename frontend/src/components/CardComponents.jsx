import styled from 'styled-components';
import PropTypes from 'prop-types';


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

const SummaryCard = styled(CardContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const CalendarCard = styled(CardContainer)`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const InfoCard = styled(CardContainer)`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const Card = ({ children }) => {
  return <CardContainer>{children}</CardContainer>;
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

const CardComponents = () => {
  return (
    <div>
      <SummaryCard>
        <div>Summary Item 1</div>
        <div>Summary Item 2</div>
        <div>Summary Item 3</div>
      </SummaryCard>
      <CalendarCard>
        <div>Day 1</div>
        <div>Day 2</div>
        <div>Day 3</div>
        <div>Day 4</div>
        <div>Day 5</div>
        <div>Day 6</div>
        <div>Day 7</div>
        {/* Add more days as needed */}
      </CalendarCard>
      <InfoCard>
        <div>Info Item 1</div>
        <div>Info Item 2</div>
        <div>Info Item 3</div>
      </InfoCard>
    </div>
  );
};

export default CardComponents;
export { SummaryCard, Card,CalendarCard, InfoCard };

