import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaUser, FaSignOutAlt, FaChevronDown, FaInfoCircle, FaMoneyBillWave, FaChartLine, FaBook, FaUserGraduate, FaClipboardList } from 'react-icons/fa';

const HeaderContainer = styled.header`
  background-color: #0f2f42;
  color: white;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 1.5rem;
`;

const Subtitle = styled.h2`
  margin: 0;
  font-size: 1rem;
  font-weight: normal;
`;

const Nav = styled.nav`
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
  position: relative;
`;

const NavItem = styled.li`
  margin: 0 10px;
  position: relative;

  &:hover > ul {
    display: block;
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  display: flex;
  align-items: center;

  &:hover {
    text-decoration: underline;
  }
`;

const DropdownIcon = styled(FaChevronDown)`
  margin-left: 5px;
`;

const DropdownMenu = styled.ul`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #0f2f42;
  list-style-type: none;
  padding: 10px 0;
  margin: 0;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`;

const DropdownItem = styled.li`
  padding: 10px 20px;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #084265;
  }
`;

const DropdownLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  display: flex;
  align-items: center;

  &:hover {
    text-decoration: underline;
  }
`;

const HamburgerIcon = styled(FaBars)`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const CloseIcon = styled(FaTimes)`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileNav = styled.nav`
  display: none;
  flex-direction: column;
  align-items: flex-start;
  background-color: #0f2f42;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 250px;
  padding: 20px;
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;
  z-index: 1000;

  &.open {
    transform: translateX(0);
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const MobileNavList = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 100%;
`;

const MobileNavItem = styled.li`
  margin: 10px 0;
`;

const MobileNavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  display: flex;
  align-items: center;
  padding: 10px 0;

  &:hover {
    text-decoration: underline;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileButton = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 1rem;


  display: flex;
  align-items: center;

  &:hover {
    text-decoration: underline;
  }
`;

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <HeaderContainer>
      <HamburgerIcon onClick={toggleMobileNav} />
      <TitleContainer>
        <Title>Parent Dashboard</Title>
        <Subtitle>Welcome to the Parent Portal</Subtitle>
      </TitleContainer>
      <Nav>
        <NavList>
          <NavItem>
            <NavLink to="/parent/parent-student-info">
              Student Info <DropdownIcon />
            </NavLink>
            <DropdownMenu>
              <DropdownItem>
                <DropdownLink to="/parent/parent-student-info/details">
                  <FaUserGraduate /> Details
                </DropdownLink>
              </DropdownItem>
              <DropdownItem>
                <DropdownLink to="/parent/parent-student-info/attendance">
                  <FaClipboardList /> Attendance
                </DropdownLink>
              </DropdownItem>
            </DropdownMenu>
          </NavItem>
          <NavItem>
            <NavLink to="/parent/fees">
              Fees <DropdownIcon />
            </NavLink>
            <DropdownMenu>
              <DropdownItem>
                <DropdownLink to="/parent/fees/payment">
                  <FaMoneyBillWave /> Payment
                </DropdownLink>
              </DropdownItem>
              <DropdownItem>
                <DropdownLink to="/parent/fees/history">
                  <FaClipboardList /> History
                </DropdownLink>
              </DropdownItem>
            </DropdownMenu>
          </NavItem>
          <NavItem>
            <NavLink to="/parent/performance">
              Performance <DropdownIcon />
            </NavLink>
            <DropdownMenu>
              <DropdownItem>
                <DropdownLink to="/parent/performance/overview">
                  <FaChartLine /> Overview
                </DropdownLink>
              </DropdownItem>
              <DropdownItem>
                <DropdownLink to="/parent/performance/grades">
                  <FaBook /> Grades
                </DropdownLink>
              </DropdownItem>
            </DropdownMenu>
          </NavItem>
          <NavItem>
            <NavLink to="/parent/grades">
              Grades <DropdownIcon />
            </NavLink>
            <DropdownMenu>
              <DropdownItem>
                <DropdownLink to="/parent/grades/report">
                  <FaClipboardList /> Report
                </DropdownLink>
              </DropdownItem>
              <DropdownItem>
                <DropdownLink to="/parent/grades/summary">
                  <FaBook /> Summary
                </DropdownLink>
              </DropdownItem>
            </DropdownMenu>
          </NavItem>
        </NavList>
      </Nav>
      <ProfileContainer>
        <ProfileButton>
          <FaUser /> Profile
        </ProfileButton>
        <ProfileButton>
          <FaSignOutAlt /> Logout
        </ProfileButton>
      </ProfileContainer>
      <MobileNav className={isMobileNavOpen ? 'open' : ''}>
        <CloseIcon onClick={toggleMobileNav} />
        <MobileNavList>
          <MobileNavItem>
            <MobileNavLink to="/parent/parent-student-info" onClick={toggleMobileNav}>
              <FaInfoCircle /> Student Info
            </MobileNavLink>
          </MobileNavItem>
          <MobileNavItem>
            <MobileNavLink to="/parent/fees" onClick={toggleMobileNav}>
              <FaMoneyBillWave /> Fees
            </MobileNavLink>
          </MobileNavItem>
          <MobileNavItem>
            <MobileNavLink to="/parent/performance" onClick={toggleMobileNav}>
              <FaChartLine /> Performance
            </MobileNavLink>
          </MobileNavItem>
          <MobileNavItem>
            <MobileNavLink to="/parent/grades" onClick={toggleMobileNav}>
              <FaBook /> Grades
            </MobileNavLink>
          </MobileNavItem>
          <MobileNavItem>
            <ProfileButton onClick={toggleMobileNav}>
              <FaUser /> Profile
            </ProfileButton>
          </MobileNavItem>
          <MobileNavItem>
            <ProfileButton onClick={toggleMobileNav}>
              <FaSignOutAlt /> Logout
            </ProfileButton>
          </MobileNavItem>
        </MobileNavList>
      </MobileNav>
    </HeaderContainer>
  );
};

export default Header;






















// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
// import { Link } from 'react-router-dom';
// import { FaBars, FaTimes, FaUser, FaSignOutAlt, FaChevronDown, FaInfoCircle, FaMoneyBillWave, FaChartLine, FaBook, FaUserGraduate, FaClipboardList } from 'react-icons/fa';

// const HeaderContainer = styled.header`
//   background-color: #0f2f42;
//   color: white;
//   padding: 10px 20px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   position: relative;
// `;

// const TitleContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   text-align: center;
// `;

// const Title = styled.h1`
//   margin: 0;
//   font-size: 1.5rem;
// `;

// const Subtitle = styled.h2`
//   margin: 0;
//   font-size: 1rem;
//   font-weight: normal;
// `;

// const Nav = styled.nav`
//   @media (max-width: 768px) {
//     display: none;
//   }
// `;

// const NavList = styled.ul`
//   list-style-type: none;
//   padding: 0;
//   display: flex;
//   justify-content: center;
//   position: relative;
// `;

// const NavItem = styled.li`
//   margin: 0 10px;
//   position: relative;

//   &:hover > ul {
//     display: block;
//   }
// `;

// const NavLink = styled(Link)`
//   color: white;
//   text-decoration: none;
//   font-size: 1rem;
//   display: flex;
//   align-items: center;

//   &:hover {
//     text-decoration: underline;
//   }
// `;

// const DropdownIcon = styled(FaChevronDown)`
//   margin-left: 5px;
// `;

// const DropdownMenu = styled.ul`
//   display: none;
//   position: absolute;
//   top: 100%;
//   left: 0;
//   background-color: #0f2f42;
//   list-style-type: none;
//   padding: 10px 0;
//   margin: 0;
//   border-radius: 5px;
//   box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
// `;

// const DropdownItem = styled.li`
//   padding: 10px 20px;
//   display: flex;
//   align-items: center;

//   &:hover {
//     background-color: #084265;
//   }
// `;

// const DropdownLink = styled(Link)`
//   color: white;
//   text-decoration: none;
//   font-size: 1rem;
//   display: flex;
//   align-items: center;

//   &:hover {
//     text-decoration: underline;
//   }
// `;

// const HamburgerIcon = styled(FaBars)`
//   display: none;
//   font-size: 1.5rem;
//   cursor: pointer;

//   @media (max-width: 768px) {
//     display: block;
//   }
// `;

// const CloseIcon = styled(FaTimes)`
//   display: none;
//   font-size: 1.5rem;
//   cursor: pointer;

//   @media (max-width: 768px) {
//     display: block;
//   }
// `;

// const MobileNav = styled.nav`
//   display: none;
//   flex-direction: column;
//   align-items: flex-start;
//   background-color: #0f2f42;
//   position: fixed;
//   top: 0;
//   left: 0;
//   height: 100%;
//   width: 250px;
//   padding: 20px;
//   transform: translateX(-100%);
//   transition: transform 0.3s ease-in-out;
//   z-index: 1000;

//   &.open {
//     transform: translateX(0);
//   }

//   @media (max-width: 768px) {
//     display: flex;
//   }
// `;

// const MobileNavList = styled.ul`
//   list-style-type: none;
//   padding: 0;
//   width: 100%;
// `;

// const MobileNavItem = styled.li`
//   margin: 10px 0;
// `;

// const MobileNavLink = styled(Link)`
//   color: white;
//   text-decoration: none;
//   font-size: 1rem;
//   display: flex;
//   align-items: center;
//   padding: 10px 0;

//   &:hover {
//     text-decoration: underline;
//   }
// `;

// const ProfileContainer = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const ProfileButton = styled.button`
//   background-color: transparent;
//   border: none;
//   color: white;
//   cursor: pointer;
//   margin-left: 10px;
//   display: flex;
//   align-items: center;

//   &:hover {
//     text-decoration: underline;
//   }
// `;

// const Header = ({ userRole }) => {
//   const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

//   const toggleMobileNav = () => {
//     setIsMobileNavOpen(!isMobileNavOpen);
//   };

//   const getTitle = () => {
//     switch (userRole) {
//       case 'parent':
//         return 'Parent Dashboard';
//       case 'student':
//         return 'Student Dashboard';
//       case 'teacher':
//         return 'Teacher Dashboard';
//       default:
//         return 'Dashboard';
//     }
//   };

//   const getSubtitle = () => {
//     switch (userRole) {
//       case 'parent':
//         return 'Welcome to the Parent Portal';
//       case 'student':
//         return 'Welcome to the Student Portal';
//       case 'teacher':
//         return 'Welcome to the Teacher Portal';
//       default:
//         return 'Welcome';
//     }
//   };

//   return (
//     <HeaderContainer>
//       <HamburgerIcon onClick={toggleMobileNav} />
//       <TitleContainer>
//         <Title>{getTitle()}</Title>
//         <Subtitle>{getSubtitle()}</Subtitle>
//       </TitleContainer>
//       <Nav>
//         <NavList>
//           <NavItem>
//             <NavLink to={`/${userRole}/student/dashboard`}>Dashboard</NavLink>
//           </NavItem>
//           <NavItem>
//             <NavLink to={`/${userRole}/parent-student-info`}>
//               Student Info <DropdownIcon />
//             </NavLink>
//             <DropdownMenu>
//               <DropdownItem>
//                 <DropdownLink to={`/${userRole}/parent-student-info/details`}>
//                   <FaUserGraduate /> Details
//                 </DropdownLink>
//               </DropdownItem>
//               <DropdownItem>
//                 <DropdownLink
//                   to={`/${userRole}/parent-student-info/attendance`}
//                 >
//                   <FaClipboardList /> Attendance
//                 </DropdownLink>
//               </DropdownItem>
//             </DropdownMenu>
//           </NavItem>
//           <NavItem>
//             <NavLink to={`/${userRole}/fees`}>
//               Fees <DropdownIcon />
//             </NavLink>
//             <DropdownMenu>
//               <DropdownItem>
//                 <DropdownLink to={`/${userRole}/fees/payment`}>
//                   <FaMoneyBillWave /> Payment
//                 </DropdownLink>
//               </DropdownItem>
//               <DropdownItem>
//                 <DropdownLink to={`/${userRole}/fees/history`}>
//                   <FaClipboardList /> History
//                 </DropdownLink>
//               </DropdownItem>
//             </DropdownMenu>
//           </NavItem>
//           <NavItem>
//             <NavLink to={`/${userRole}/performance`}>
//               Performance <DropdownIcon />
//             </NavLink>
//             <DropdownMenu>
//               <DropdownItem>
//                 <DropdownLink to={`/${userRole}/performance/overview`}>
//                   <FaChartLine /> Overview
//                 </DropdownLink>
//               </DropdownItem>
//               <DropdownItem>
//                 <DropdownLink to={`/${userRole}/performance/grades`}>
//                   <FaBook /> Grades
//                 </DropdownLink>
//               </DropdownItem>
//             </DropdownMenu>
//           </NavItem>
//           <NavItem>
//             <NavLink to={`/${userRole}/grades`}>
//               Grades <DropdownIcon />
//             </NavLink>
//             <DropdownMenu>
//               <DropdownItem>
//                 <DropdownLink to={`/${userRole}/grades/report`}>
//                   <FaClipboardList /> Report
//                 </DropdownLink>
//               </DropdownItem>
//               <DropdownItem>
//                 <DropdownLink to={`/${userRole}/grades/summary`}>
//                   <FaBook /> Summary
//                 </DropdownLink>
//               </DropdownItem>
//             </DropdownMenu>
//           </NavItem>
//         </NavList>
//       </Nav>
//       <ProfileContainer>
//         <ProfileButton>
//           <FaUser /> Profile
//         </ProfileButton>
//         <ProfileButton>
//           <FaSignOutAlt /> Logout
//         </ProfileButton>
//       </ProfileContainer>
//       <MobileNav className={isMobileNavOpen ? 'open' : ''}>
//         <CloseIcon onClick={toggleMobileNav} />
//         <MobileNavList>
//           <MobileNavItem>
//             <MobileNavLink
//               to={`/${userRole}/dashboard`}
//               onClick={toggleMobileNav}
//             >
//               <FaInfoCircle /> Dashboard
//             </MobileNavLink>
//           </MobileNavItem>
//           <MobileNavItem>
//             <MobileNavLink
//               to={`/${userRole}/parent-student-info`}
//               onClick={toggleMobileNav}
//             >
//               <FaInfoCircle /> Student Info
//             </MobileNavLink>
//           </MobileNavItem>
//           <MobileNavItem>
//             <MobileNavLink to={`/${userRole}/fees`} onClick={toggleMobileNav}>
//               <FaMoneyBillWave /> Fees
//             </MobileNavLink>
//           </MobileNavItem>
//           <MobileNavItem>
//             <MobileNavLink
//               to={`/${userRole}/performance`}
//               onClick={toggleMobileNav}
//             >
//               <FaChartLine /> Performance
//             </MobileNavLink>
//           </MobileNavItem>
//           <MobileNavItem>
//             <MobileNavLink to={`/${userRole}/grades`} onClick={toggleMobileNav}>
//               <FaBook /> Grades
//             </MobileNavLink>
//           </MobileNavItem>
//           <MobileNavItem>
//             <ProfileButton onClick={toggleMobileNav}>
//               <FaUser /> Profile
//             </ProfileButton>
//           </MobileNavItem>
//           <MobileNavItem>
//             <ProfileButton onClick={toggleMobileNav}>
//               <FaSignOutAlt /> Logout
//             </ProfileButton>
//           </MobileNavItem>
//         </MobileNavList>
//       </MobileNav>
//     </HeaderContainer>
//   );
// };
// Header.propTypes = {
//   userRole: PropTypes.string.isRequired,
// };

// export default Header;
