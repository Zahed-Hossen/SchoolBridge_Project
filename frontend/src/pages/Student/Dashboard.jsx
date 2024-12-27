import styled from 'styled-components';
import StudentLayout from '../../components/Student/StudentLayout';
import Footer from '../../components/Student/Footer';

// Styled Components
const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;

  @media (min-width: 768px) {
    padding: 3rem;
  }

`;

const WelcomeSection = styled.div`
  background: #0f2f42;
  color: #fff;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
`;

const SummarySection = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
`;

const SummaryCard = styled.div`
  flex: 1 1 calc(33.333% - 2rem);
  background: #fff;
  border: 1px solid #ddd;
  padding: 1.5rem;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    transition: all 0.3s ease-in-out;
  }
`;

const CardTitle = styled.h3`
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
  color: #0f2f42;
`;

const CardValue = styled.p`
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
  color: #195f84;
`;

const QuickLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
`;

const QuickLinkCard = styled.div`
  flex: 1;
  padding: 1.5rem;
  background: #f2f9fd;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: #e1f0f9;
    transition: all 0.3s ease;
  }
`;

const QuickLinkText = styled.p`
  margin: 0;
  font-size: 1.1rem;
  color: #0f2f42;
`;

// Dashboard Component
const Dashboard = () => {
  // Placeholder data
  const userName = 'John Doe';
  const metrics = {
    assignments: 3,
    attendance: '90%',
    exams: 2,
    notifications: 5,
  };

  return (
    <>
    <StudentLayout >
    <DashboardContainer>

      {/* Welcome Section */}
      <WelcomeSection>
        Welcome back, {userName}!
      </WelcomeSection>

      {/* Summary Cards */}
      <SummarySection>
        <SummaryCard>
          <CardTitle>Pending Assignments</CardTitle>
          <CardValue>{metrics.assignments}</CardValue>
        </SummaryCard>

        <SummaryCard>
          <CardTitle>Attendance</CardTitle>
          <CardValue>{metrics.attendance}</CardValue>
        </SummaryCard>

        <SummaryCard>
          <CardTitle>Upcoming Exams</CardTitle>
          <CardValue>{metrics.exams}</CardValue>
        </SummaryCard>

        <SummaryCard>
          <CardTitle>Notifications</CardTitle>
          <CardValue>{metrics.notifications}</CardValue>
        </SummaryCard>
      </SummarySection>

      {/* Quick Links */}
      <QuickLinks>
        <QuickLinkCard>
          <QuickLinkText>📄 View Assignments</QuickLinkText>
        </QuickLinkCard>
        <QuickLinkCard>
          <QuickLinkText>📊 Attendance Report</QuickLinkText>
        </QuickLinkCard>
        <QuickLinkCard>
          <QuickLinkText>📝 Exam Schedule</QuickLinkText>
        </QuickLinkCard>
        <QuickLinkCard>
          <QuickLinkText>🔔 Notifications</QuickLinkText>
        </QuickLinkCard>
      </QuickLinks>
    </DashboardContainer>
    <Footer />
    </StudentLayout>
    </>
  );
};

export default Dashboard;
