import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;
  background-color: #F0F7F4;
`;

const Header = styled.div`
  text-align: center;
  padding: 20px 0;
`;

const Logo = styled.img`
  width: 24px;
  height: 24px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin: 10px 0;
  font-weight: bold;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: bold;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
  background-color: #FFFFFF;
  border-radius: 8px;
  margin-bottom: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const Icon = styled.i`
  margin-right: 10px;
`;

const Text = styled.span`
  flex-grow: 1;
`;

const Menubar = () => {
  return (
    <Container>
      <Header>
        <Logo alt="SchoolBridge logo" src="https://storage.googleapis.com/a1aa/image/fdXJie5i3dtrcUb11lUqQ2StJo3iGs1d7yeTou2HdeyGJh0PB.jpg" />
        <Title>SchoolBridge</Title>
      </Header>
      <Section>
        <MenuItem>
          <Icon className="fas fa-home"></Icon>
          <Text>Landing Page</Text>
          <Icon className="fas fa-chevron-right"></Icon>
        </MenuItem>
        <MenuItem>
          <Icon className="fas fa-bullhorn"></Icon>
          <Text>Announcements</Text>
          <Icon className="fas fa-chevron-right"></Icon>
        </MenuItem>
      </Section>
      <Section>
        <SectionTitle>Features</SectionTitle>
        <MenuItem>
          <Icon className="fas fa-info-circle"></Icon>
          <Text>Product Overview</Text>
          <Icon className="fas fa-chevron-right"></Icon>
        </MenuItem>
        <MenuItem>
          <Icon className="fas fa-chalkboard-teacher"></Icon>
          <Text>Classroom Management</Text>
          <Icon className="fas fa-chevron-right"></Icon>
        </MenuItem>
        <MenuItem>
          <Icon className="fas fa-check-circle"></Icon>
          <Text>Attendance Tracking</Text>
          <Icon className="fas fa-chevron-right"></Icon>
        </MenuItem>
        <MenuItem>
          <Icon className="fas fa-tasks"></Icon>
          <Text>Assignment Tools</Text>
          <Icon className="fas fa-chevron-right"></Icon>
        </MenuItem>
        <MenuItem>
          <Icon className="fas fa-comments"></Icon>
          <Text>Communication Hub</Text>
          <Icon className="fas fa-chevron-right"></Icon>
        </MenuItem>
        <MenuItem>
          <Icon className="fas fa-th-large"></Icon>
          <Text>Multi-Role Dashboards</Text>
          <Icon className="fas fa-chevron-right"></Icon>
        </MenuItem>
      </Section>
      <Section>
        <SectionTitle>User Dashboard</SectionTitle>
        <MenuItem>
          <Icon className="fas fa-user"></Icon>
          <Text>My Classes</Text>
          <Icon className="fas fa-chevron-right"></Icon>
        </MenuItem>
        <MenuItem>
          <Icon className="fas fa-clipboard-list"></Icon>
          <Text>Assignments</Text>
          <Icon className="fas fa-chevron-right"></Icon>
        </MenuItem>
        <MenuItem>
          <Icon className="fas fa-chart-bar"></Icon>
          <Text>Attendance Report</Text>
          <Icon className="fas fa-chevron-right"></Icon>
        </MenuItem>
        <MenuItem>
          <Icon className="fas fa-chart-line"></Icon>
          <Text>Progress Report</Text>
          <Icon className="fas fa-chevron-right"></Icon>
        </MenuItem>
      </Section>
      <Section>
        <SectionTitle>Pricing</SectionTitle>
        <MenuItem>
          <Icon className="fas fa-balance-scale"></Icon>
          <Text>Compare Plans</Text>
          <Icon className="fas fa-chevron-right"></Icon>
        </MenuItem>
        <MenuItem>
          <Icon className="fas fa-tags"></Icon>
          <Text>Discounts & Offers</Text>
          <Icon className="fas fa-chevron-right"></Icon>
        </MenuItem>
        <MenuItem>
          <Icon className="fas fa-file-invoice-dollar"></Icon>
          <Text>Request a Custom Plan</Text>
          <Icon className="fas fa-chevron-right"></Icon>
        </MenuItem>
      </Section>
      <Section>
        <SectionTitle>Support</SectionTitle>
        <MenuItem>
          <Icon className="fas fa-envelope"></Icon>
          <Text>Contact Us</Text>
          <Icon className="fas fa-chevron-right"></Icon>
        </MenuItem>
        <MenuItem>
          <Icon className="fas fa-question-circle"></Icon>
          <Text>FAQ</Text>
          <Icon className="fas fa-chevron-right"></Icon>
        </MenuItem>
        <MenuItem>
          <Icon className="fas fa-book"></Icon>
          <Text>Resources</Text>
          <Icon className="fas fa-chevron-right"></Icon>
        </MenuItem>
      </Section>
      <Section>
        <SectionTitle>About Us</SectionTitle>
        <MenuItem>
          <Icon className="fas fa-flag"></Icon>
          <Text>Mission & Vision</Text>
          <Icon className="fas fa-chevron-right"></Icon>
        </MenuItem>
        <MenuItem>
          <Icon className="fas fa-history"></Icon>
          <Text>Our Story</Text>
          <Icon className="fas fa-chevron-right"></Icon>
        </MenuItem>
        <MenuItem>
          <Icon className="fas fa-users"></Icon>
          <Text>Team</Text>
          <Icon className="fas fa-chevron-right"></Icon>
        </MenuItem>
      </Section>
    </Container>
  );
};

export default Menubar;
