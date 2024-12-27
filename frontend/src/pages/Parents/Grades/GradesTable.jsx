import styled from 'styled-components';
import PropTypes from 'prop-types';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  font-size: 1rem;
`;

const TableHeader = styled.th`
  background-color: #0f2f42;
  color: white;
  padding: 10px;
  text-align: left;
`;

const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
`;

const GradesTable = ({ grades, onSubjectClick }) => {
  return (
    <Table>
      <thead>
        <tr>
          <TableHeader>Subject</TableHeader>
          <TableHeader>Midterm Grade</TableHeader>
          <TableHeader>Final Grade</TableHeader>
          <TableHeader>Average</TableHeader>
          <TableHeader>Remarks</TableHeader>
        </tr>
      </thead>
      <tbody>
        {grades.map((grade, index) => (
          <tr key={index} onClick={() => onSubjectClick(grade.subject)}>
            <TableCell>{grade.subject}</TableCell>
            <TableCell>{grade.midterm}</TableCell>
            <TableCell>{grade.final}</TableCell>
            <TableCell>{grade.average}</TableCell>
            <TableCell>{grade.remarks}</TableCell>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
GradesTable.propTypes = {
  grades: PropTypes.arrayOf(
    PropTypes.shape({
      subject: PropTypes.string.isRequired,
      midterm: PropTypes.number.isRequired,
      final: PropTypes.number.isRequired,
      average: PropTypes.number.isRequired,
      remarks: PropTypes.string.isRequired,
    })
  ).isRequired,
  onSubjectClick: PropTypes.func.isRequired,
};

export default GradesTable;


