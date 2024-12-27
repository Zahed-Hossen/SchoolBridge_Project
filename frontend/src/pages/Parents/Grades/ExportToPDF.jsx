import PropTypes from 'prop-types';
import jsPDF from 'jspdf';

const ExportToPDF = ({ subject, data }) => {
  const handleExport = () => {
    const doc = new jsPDF();
    doc.text(`Detailed Performance Report: ${subject}`, 10, 10);

    data.forEach((item, index) => {
      doc.text(`${item.category}: ${item.grade}`, 10, 20 + index * 10);
    });

    doc.save(`${subject}_performance_report.pdf`);
  };

  return <button onClick={handleExport}>Export to PDF</button>;
};
ExportToPDF.propTypes = {
  subject: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
      grade: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ExportToPDF;

