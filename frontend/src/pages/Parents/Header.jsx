import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  background-color: #0f2f42;
  color: white;
  padding: 20px;
  text-align: center;

`;

const Title = styled.h1`
  margin: 0;
  font-size: 2rem;
`;

const Nav = styled.nav`
  margin-top: 10px;
`;

const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
`;

const NavItem = styled.li`
  margin: 0 10px;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Title><NavLink as={Link} to="/parent/parentdashboard">Parent Dashboard </NavLink></Title>
      <Nav>
        <NavList>
            <NavItem><NavLink as={Link} to="/parent/parent-student-info">Student Info</NavLink></NavItem>
            <NavItem><NavLink as={Link} to="/parent/fees">Fees</NavLink></NavItem>
            <NavItem><NavLink as={Link} to="/parent/payment-history">Payment </NavLink></NavItem>
            <NavItem><NavLink as={Link} to="/parent/grades">Grades</NavLink></NavItem>
            <NavItem><NavLink as={Link} to="/parent/attendance">Attendance</NavLink></NavItem>
            <NavItem><NavLink as={Link} to="/parent/performance">Performance</NavLink></NavItem>
        </NavList>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
