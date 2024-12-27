import styled from 'styled-components';
import Card from '../../../components/Card';

const Section = styled.section`
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 1.8rem;
  color: #0f2f42;
`;

const FeeList = styled.div`
  margin-top: 10px;
`;

const FeeItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 1rem;
  color: #333;
`;

const FeeIcon = styled.i`
  margin-right: 10px;
  font-size: 1.2rem;
`;

const FeeAmount = styled.span`
  margin-left: auto;
  font-weight: bold;
`;

const PayNowButton = styled.button`
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #0f2f42;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;

  &:hover {
    background-color: #184c68;
  }
`;

const Fees = () => {
  const handlePayment = (feeName) => {
    alert(`Payment for ${feeName} is being processed.`);
    // Mock payment process
  };

  return (
    <Card>
      <Section id="fees">
        <Title>Fees</Title>
        <FeeList>
          <FeeItem>
            <FeeIcon className="fas fa-graduation-cap" />
            Tuition
            <FeeAmount>$500</FeeAmount>
            <PayNowButton onClick={() => handlePayment('Tuition')}>Pay Now</PayNowButton>
          </FeeItem>
          <FeeItem>
            <FeeIcon className="fas fa-book" />
            Books
            <FeeAmount>$150</FeeAmount>
            <PayNowButton onClick={() => handlePayment('Books')}>Pay Now</PayNowButton>
          </FeeItem>
          <FeeItem>
            <FeeIcon className="fas fa-bus" />
            Transport
            <FeeAmount>$100</FeeAmount>
            <PayNowButton onClick={() => handlePayment('Transport')}>Pay Now</PayNowButton>
          </FeeItem>
        </FeeList>
      </Section>
    </Card>
  );
};

export default Fees;
