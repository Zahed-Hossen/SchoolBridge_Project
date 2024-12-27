import styled from 'styled-components';
import PropTypes from 'prop-types';

// const CardContainer = styled.div`
//   background-color: rgb(61, 147, 173);
//   border: 1px solid #ccc;
//   border-radius: 8px;
//   padding: 20px;
//   margin-bottom: 20px;
//   box-shadow: 0 4px 8pxrgb (56, 127, 148);
//   transition: transform 0.2s;

//   &:hover {
//     transform: translateY(-5px);
//   }

//   @media (max-width: 768px) {
//     padding: 15px;
//     margin-bottom: 15px;
//   }

//   @media (max-width: 480px) {
//     padding: 10px;
//     margin-bottom: 10px;
//   }
// `;

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



















// import styled from 'styled-components';
// import PropTypes from 'prop-types';

// const CardContainer = styled.div`
//   background-color: #f9f9f9;
//   border: 1px solid #ccc;
//   border-radius: 8px;
//   padding: 20px;
//   margin-bottom: 20px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   transition: transform 0.2s;

//   &:hover {
//     transform: translateY(-5px);
//   }
// `;



// const CardTitle = styled.h2`
//   color: #0f2f42;
//   margin-bottom: 15px;
// `;

// const CardContent = styled.div`
//   font-size: 1rem;
//   color: #333;
// `;


// const SummaryCard = ({ title, children }) => (
//   <CardContainer>
//     <CardTitle>{title}</CardTitle>
//     <CardContent>{children}</CardContent>
//   </CardContainer>
// );

// const CalendarCard = ({ children }) => (
//   <CardContainer>
//     <CardContent>{children}</CardContent>
//   </CardContainer>
// );

// const InfoCard = ({ title, children }) => (
//   <CardContainer>
//     <CardTitle>{title}</CardTitle>
//     <CardContent>{children}</CardContent>
//   </CardContainer>
// );

// SummaryCard.propTypes = {
//   title: PropTypes.string.isRequired,
//   children: PropTypes.node.isRequired,
// };

// CalendarCard.propTypes = {
//   children: PropTypes.node.isRequired,
// };

// InfoCard.propTypes = {
//   title: PropTypes.string.isRequired,
//   children: PropTypes.node.isRequired,
// };



// export { SummaryCard,  CalendarCard, InfoCard };

