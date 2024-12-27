import styled from 'styled-components';
import Card from '../../../components/Card';

const Section = styled.section`
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 8px;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  color: #0f2f42;
`;

const PaymentList = styled.div`
  margin-top: 10px;
`;

const PaymentItem = styled.p`
  font-size: 1rem;
  color: #333;
  margin-bottom: 10px;
`;

const PaymentHistory = () => {
  return (
    <Card>
      <Section id="payment-history">
        <Title>Payment History</Title>
        <PaymentList>
          <PaymentItem>Payment 1: $500 on 01/01/2023</PaymentItem>
          <PaymentItem>Payment 2: $150 on 01/02/2023</PaymentItem>
          <PaymentItem>Payment 3: $100 on 01/03/2023</PaymentItem>
        </PaymentList>
      </Section>
    </Card>
  );
};

export default PaymentHistory;
