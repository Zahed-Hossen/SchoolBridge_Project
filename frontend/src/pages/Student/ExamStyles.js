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

export const ExamTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 30px;
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
  color: ${(props) => (props.status === "Upcoming" ? "#1e88e5" : "#43a047")};
  font-weight: ${(props) => (props.status ? "600" : "400")};
`;

export const ChartContainer = styled.div`
  margin-top: 20px;
  padding: 20px;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;
