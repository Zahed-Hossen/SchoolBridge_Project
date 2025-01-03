import { useEffect, useState } from 'react';
import styled from 'styled-components';
import GradesTable from './GradesTable';
import PerformanceModal from './PerformanceModal';
import CompareGrades from './CompareGrades';
import Card from '../../../components/Card.jsx';
// import { useParams } from 'react-router-dom';
import axios from 'axios';
import ParentLayout from '../../../components/Parent/ParentLayout';

const Container = styled.div`
  font-family: Arial, sans-serif;
  padding-top: 80px; /* To ensure content is not hidden behind the fixed header */
  background-color: #f0f0f0;
  min-height: 100vh;
`;

const GradesContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  text-align: center;
  color: #0f2f42;
`;

const Dropdown = styled.select`
  margin: 10px 0;
  padding: 5px 10px;
  font-size: 1rem;
`;

const Label = styled.label`
  font-size: 1rem;
  margin-right: 10px;
`;

const GradesPage = () => {
  const childId = 'dummyChildId123';
  // const { childId } = useParams();
  const [gradesData, setGradesData] = useState([]); // Initialize as an empty array
  const [selectedSubject, setSelectedSubject] = useState('All Subjects');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGrades = async () => {
      try {
        const response = await axios.get(
          `https://schoolbridge-project-server.onrender.com/api/grade/grades/${childId}`,
          {
            withCredentials: true,
          },
        );
        setGradesData(response.data);
      } catch (error) {
        console.error('Error fetching grades data:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchGrades();
  }, [childId]);

  const handleSubjectClick = (subject) => {
    setSelectedSubject(subject);
  };

  const handleCloseModal = () => {
    setSelectedSubject(null);
  };

  if (loading) {
    return <p>Loading grades data...</p>;
  }

  if (error) {
    return <p>Error fetching grades data: {error.message}</p>;
  }

  if (!Array.isArray(gradesData)) {
    return <p>Error: Invalid grades data received</p>;
  }

  // Filtered Grades
  const filteredGrades =
    selectedSubject === 'All Subjects'
      ? gradesData
      : gradesData.filter((grade) => grade.subject === selectedSubject);

  const selectedGradeData = gradesData.find(
    (grade) => grade.subject === selectedSubject,
  );

  return (
    <>
      <ParentLayout>
        <Container>
          <GradesContainer>
            <SectionTitle>Student Grades</SectionTitle>
            <Card>
              <Label htmlFor="subject-filter">Filter by Subject:</Label>
              <Dropdown
                id="subject-filter"
                value={selectedSubject || 'All Subjects'}
                onChange={(e) => setSelectedSubject(e.target.value)}
              >
                <option value="All Subjects">All Subjects</option>
                {gradesData.map((grade, index) => (
                  <option key={index} value={grade.subject}>
                    {grade.subject}
                  </option>
                ))}
              </Dropdown>
            </Card>
            <Card>
              <GradesTable
                grades={filteredGrades}
                onSubjectClick={handleSubjectClick}
              />
            </Card>
            {selectedSubject && (
              <PerformanceModal
                subject={selectedSubject}
                data={selectedGradeData.details}
                onClose={handleCloseModal}
              />
            )}
            <Card>
              <h3>Compare Grades</h3>
              <CompareGrades grades={gradesData} />
            </Card>
          </GradesContainer>
        </Container>
      </ParentLayout>
    </>
  );
};

export default GradesPage;
