import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  min-height: 100vh;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 20px;
  color: #333;
`;

export const AttendanceTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
`;

export const TableHeader = styled.th`
  background-color: #0f2f42;
  color: #ffffff;
  font-weight: 600;
  padding: 12px;
  text-align: left;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f9fd;
  }
`;

export const TableCell = styled.td`
  padding: 10px;
  color: ${(props) =>
    props.status === "Present" ? "#43a047" : "#e53935"};
  font-weight: ${(props) => (props.status ? "600" : "400")};
`;

export const ChartContainer = styled.div`
  margin-top: 30px;
  padding: 20px;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const FilterContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

export const DatePickerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  label {
    margin-bottom: 5px;
    font-weight: 600;
    color: #333;
  }
  .react-datepicker-wrapper {
    width: 100%;
  }
  .react-datepicker__input-container input {
    width: 100%;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ddd;
  }
`;
