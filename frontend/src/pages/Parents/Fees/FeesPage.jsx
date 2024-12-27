import { useState, useEffect } from 'react';
import styled from 'styled-components';
// import Header from '../Header';
import Card from '../../../components/Card';
import ParentLayout from '../../../components/Parent/ParentLayout';

const Container = styled.div`
  font-family: Arial, sans-serif;
  padding-top: 80px; /* To ensure content is not hidden behind the fixed header */
  background-color: #f0f0f0;
  min-height: 100vh;
`;

const FeesContainer = styled.div`
  padding: 20px;
`;

const SectionTitle = styled.h2`
  text-align: center;
  color: #0f2f42;
`;

const FeeTable = styled.table`
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

const PaymentButton = styled.button`
  background-color: #0f2f42;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: #09516a;
  }
`;

const FilterContainer = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

const FilterLabel = styled.label`
  margin-right: 10px;
`;

const FilterSelect = styled.select`
  padding: 5px;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-right: 10px;
`;

const FeesPage = () => {
  const [feeData, setFeeData] = useState([]);
  const [filter, setFilter] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  useEffect(() => {
    const fetchFeeData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/fees/1'); // Assuming studentId is 1 for demonstration
        const rawResponse = await response.text();
        console.log('Raw response:', rawResponse); // Log the raw response
        const data = JSON.parse(rawResponse);
        setFeeData(data);
      } catch (error) {
        console.error('Error fetching fee data:', error);
      }
    };

    fetchFeeData();
  }, []);

  console.log('feeData:', feeData); // Inspect the value of feeData

  const handlePayment = (fee) => {
    alert(`Payment for ${fee.name} is being processed.`);
    // Mock payment process
    setFeeData((prevData) =>
      prevData.map((item) =>
        item.name === fee.name ? { ...item, status: 'Paid' } : item,
      ),
    );
  };

  return (
    <>
      <ParentLayout>
      <Container>
        <FeesContainer>
          <SectionTitle>Fees Details</SectionTitle>
          <FilterContainer>
            <FilterLabel htmlFor="status">Filter by Status:</FilterLabel>
            <FilterSelect
              id="status"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="">All</option>
              <option value="Paid">Paid</option>
              <option value="Pending">Pending</option>
              <option value="Partially Paid">Partially Paid</option>
            </FilterSelect>
            <FilterLabel htmlFor="month">Month:</FilterLabel>
            <FilterSelect
              id="month"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
            >
              <option value="">All</option>
              <option value="01">January</option>
              <option value="02">February</option>
              <option value="03">March</option>
              <option value="04">April</option>
              <option value="05">May</option>
              <option value="06">June</option>
              <option value="07">July</option>
              <option value="08">August</option>
              <option value="09">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </FilterSelect>
            <FilterLabel htmlFor="year">Year:</FilterLabel>
            <FilterSelect
              id="year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            >
              <option value="">All</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              {/* Add more years as needed */}
            </FilterSelect>
          </FilterContainer>
          <Card>
            <FeeTable>
              <thead>
                <tr>
                  <TableHeader>Fee Name</TableHeader>
                  <TableHeader>Amount</TableHeader>
                  <TableHeader>Status</TableHeader>
                  <TableHeader>Penalty</TableHeader>
                  <TableHeader>Actions</TableHeader>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(feeData) && feeData.length > 0 ? (
                  feeData.map((fee, index) => (
                    <TableRow key={index}>
                      <TableCell>{fee.name}</TableCell>
                      <TableCell>${fee.amount}</TableCell>
                      <TableCell>{fee.status}</TableCell>
                      <TableCell>${fee.penalty}</TableCell>
                      <TableCell>
                        {fee.status !== 'Paid' ? (
                          <PaymentButton onClick={() => handlePayment(fee)}>
                            Pay Now
                          </PaymentButton>
                        ) : (
                          <a href={`/receipts/${fee.name}.pdf`} download>
                            Download Receipt
                          </a>
                        )}
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan="5">No fees data available</TableCell>
                  </TableRow>
                )}
              </tbody>
            </FeeTable>
          </Card>
        </FeesContainer>
      </Container>
      </ParentLayout>
    </>
  );
};

export default FeesPage;
