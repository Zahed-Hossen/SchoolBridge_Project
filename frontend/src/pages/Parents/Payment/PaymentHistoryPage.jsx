import { useState } from 'react';
import styled from 'styled-components';
// import Header from '../Header';
import Card from '../../../components/Card.jsx';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import ParentLayout from '../../../components/Parent/ParentLayout';


const Container = styled.div`
  font-family: Arial, sans-serif;
  padding-top: 80px; /* To ensure content is not hidden behind the fixed header */
  background-color: #f0f0f0;
  min-height: 100vh;
`;

const HistoryContainer = styled.div`
  padding: 20px;
`;

const SectionTitle = styled.h2`
  text-align: center;
  color: #0f2f42;
`;

const SearchBar = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const DatePickerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 30px;
  background-color:rgba(42, 129, 155, 0.77);
  border-radius: 30px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  block-size: 80px;
  side: 80px;



  @media (max-width: 768px) {
   flex-direction: column;
  }


`;

const HistoryTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const TableHeader = styled.th`
  background-color: #0f2f42;
  color: white;
  padding: 10px;
  text-align: left;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f9fd;
  }
`;

const TableCell = styled.td`
  padding: 10px;
  text-align: left;
  border: 1px solid #ddd;
`;

const DownloadButton = styled.button`
  background-color: #0f2f42;
  color: white;
  border: none;
  padding: 8px 15px;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: #09516a;
  }
`;

const PaymentHistoryPage = () => {
  const [search, setSearch] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [paymentHistory] = useState([
    {
      date: '2024-12-01',
      amount: 2000,
      method: 'Credit Card',
      receipt: 'receipt-2024-12-01.pdf',
    },
    {
      date: '2024-11-15',
      amount: 1500,
      method: 'Bank Transfer',
      receipt: 'receipt-2024-11-15.pdf',
    },
    {
      date: '2024-10-20',
      amount: 500,
      method: 'Cash',
      receipt: 'receipt-2024-10-20.pdf',
    },
  ]);

  const filteredHistory = paymentHistory.filter((payment) => {
    const paymentDate = new Date(payment.date);
    const isWithinRange =
      (!startDate || paymentDate >= startDate) &&
      (!endDate || paymentDate <= endDate);
    return (
      isWithinRange &&
      (payment.date.includes(search) ||
        payment.amount.toString().includes(search) ||
        payment.method.toLowerCase().includes(search.toLowerCase()))
    );
  });

  return (
    <>
      <ParentLayout>
      <Container>
        <HistoryContainer>
          <SectionTitle>Payment History</SectionTitle>
          <Card>
          <SearchBar
            type="text"
            placeholder="Search by date, amount, or method..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          </Card>
          {/* <Card> */}
            <DatePickerContainer>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                placeholderText="Start Date"
                isClearable
              />
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                placeholderText="End Date"
                isClearable
              />
            </DatePickerContainer>
          {/* </Card> */}
          <Card>
          <HistoryTable>
            <thead>
              <tr>
                <TableHeader>Date</TableHeader>
                <TableHeader>Amount</TableHeader>
                <TableHeader>Payment Method</TableHeader>
                <TableHeader>Receipt</TableHeader>
              </tr>
            </thead>
            <tbody>
              {filteredHistory.map((payment, index) => (
                <TableRow key={index}>
                  <TableCell>{payment.date}</TableCell>
                  <TableCell>${payment.amount}</TableCell>
                  <TableCell>{payment.method}</TableCell>
                  <TableCell>
                    <a href={`/receipts/${payment.receipt}`} download>
                      <DownloadButton>Download</DownloadButton>
                    </a>
                  </TableCell>
                </TableRow>
              ))}
            </tbody>
          </HistoryTable>
          </Card>
        </HistoryContainer>
      </Container>
      </ParentLayout>
    </>
  );
};

export default PaymentHistoryPage;
