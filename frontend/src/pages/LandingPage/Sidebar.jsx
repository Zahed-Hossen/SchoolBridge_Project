import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsGraphUp, BsPerson, BsFileText, BsBook, BsGraphDown, BsCalendar, BsGear, BsChatDots, BsCalendarEvent, BsQuestionSquare } from 'react-icons/bs';
import AuthPage from '../Auth/AuthPage.jsx';

import {
  NavbarContainer,
  NavbarLogo,
  NavList,
  NavItem,
  NavLink,
  DropdownMenu,
  DropdownItem,
  Hamburger,
  LanguageToggle,
  NavbarButtons,
  Button,
  MobileMenu,
  MobileMenuClose,
  MobileMenuNav,
  MobileMenuNavItem,
  MobileMenuNavLink,
  SidebarIcon,
} from './SidebarStyles';


const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState('EN');
  const [isLoginOpen, setIsLoginOpen] = useState(false); // State for login modal
  const [isSignupOpen, setIsSignupOpen] = useState(false); // State for signup modal

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'EN' ? 'FR' : 'EN'));
  };

  const openLoginModal = () => setIsLoginOpen(true); // Open login modal
  const openSignupModal = () => setIsSignupOpen(true); // Open signup modal
  const closeLoginModal = () => setIsLoginOpen(false); // Close login modal
  const closeSignupModal = () => setIsSignupOpen(false); // Close signup modal

  return (
    <>
      <NavbarContainer>
        <NavbarLogo>
          <Link to="/">SchoolBridge</Link>
        </NavbarLogo>

        <NavList>
          <NavItem>
            <SidebarIcon>
              <BsFileText />
            </SidebarIcon>
            <MobileMenuNavLink href="#">Company</MobileMenuNavLink>
            <DropdownMenu>
              <DropdownItem>
                <NavLink as={Link} to="/about-us">
                  About Us
                </NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink href="#">Team</NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink href="#">Career</NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink as={Link} to="/contact-us">
                  Contact Us
                </NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink as={Link} to="/pricing">
                  Pricing
                </NavLink>
              </DropdownItem>
            </DropdownMenu>
          </NavItem>

          <NavItem>
            <SidebarIcon>
              <BsPerson />
            </SidebarIcon>
            <MobileMenuNavLink href="#">About</MobileMenuNavLink>
            <DropdownMenu>
              <DropdownItem>
                <NavLink as={Link} to="/about-us">
                  About Us
                </NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink href="#">Team</NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink href="#">Career</NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink as={Link} to="/contact-us">
                  Contact Us
                </NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink as={Link} to="/pricing">
                  Pricing
                </NavLink>
              </DropdownItem>
            </DropdownMenu>
          </NavItem>

          <NavItem>
            <SidebarIcon>
              <BsGraphDown />
            </SidebarIcon>
            <MobileMenuNavLink href="#">Pricing</MobileMenuNavLink>
            <DropdownMenu>
              <DropdownItem>
                <NavLink as={Link} to="/about-us">
                  About Us
                </NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink href="#">Team</NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink href="#">Career</NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink as={Link} to="/contact-us">
                  Contact Us
                </NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink as={Link} to="/pricing">
                  Pricing
                </NavLink>
              </DropdownItem>
            </DropdownMenu>
          </NavItem>
          <NavItem>
            <SidebarIcon>
              <BsQuestionSquare />
            </SidebarIcon>
            <MobileMenuNavLink href="#">Contact</MobileMenuNavLink>
            <DropdownMenu>
              <DropdownItem>
                <NavLink as={Link} to="/about-us">
                  About Us
                </NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink href="#">Team</NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink href="#">Career</NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink as={Link} to="/contact-us">
                  Contact Us
                </NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink as={Link} to="/pricing">
                  Pricing
                </NavLink>
              </DropdownItem>
            </DropdownMenu>
          </NavItem>

          <NavItem>
            <SidebarIcon>
              <BsGear />
            </SidebarIcon>
            <NavLink href="#">Features</NavLink>
            <DropdownMenu>
              <DropdownItem>
                <NavLink href="#">Feature 1</NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink href="#">Feature 2</NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink href="#">Feature 3</NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink href="#">Feature 4</NavLink>
              </DropdownItem>
            </DropdownMenu>
          </NavItem>
        </NavList>

        <NavbarButtons>
          <Button onClick={openLoginModal}>Login</Button>
          <Button $primary onClick={openSignupModal}>
            Free demo
          </Button>
        </NavbarButtons>
        <LanguageToggle onClick={toggleLanguage}>{language}</LanguageToggle>

        <Hamburger onClick={toggleMobileMenu}>☰</Hamburger>

        <MobileMenu isOpen={isMobileMenuOpen}>
          <MobileMenuClose onClick={closeMobileMenu}>×</MobileMenuClose>
          <MobileMenuNav>
            <MobileMenuNavItem>
              <SidebarIcon>
                <BsPerson />
              </SidebarIcon>
              <MobileMenuNavLink to="/admin/users">Users</MobileMenuNavLink>
            </MobileMenuNavItem>
            <MobileMenuNavItem>
              <SidebarIcon>
                <BsGraphUp />
              </SidebarIcon>
              <MobileMenuNavLink to="/admin/dashboard">
                Dashboard
              </MobileMenuNavLink>
            </MobileMenuNavItem>
            <MobileMenuNavItem>
              <SidebarIcon>
                <BsPerson />
              </SidebarIcon>
              <MobileMenuNavLink to="/admin/profile">Profile</MobileMenuNavLink>
            </MobileMenuNavItem>
            <MobileMenuNavItem>
              <SidebarIcon>
                <BsFileText />
              </SidebarIcon>
              <MobileMenuNavLink to="/admin/reports">Reports</MobileMenuNavLink>
            </MobileMenuNavItem>
            <MobileMenuNavItem>
              <SidebarIcon>
                <BsBook />
              </SidebarIcon>
              <MobileMenuNavLink to="/admin/courses">Courses</MobileMenuNavLink>
            </MobileMenuNavItem>
            <MobileMenuNavItem>
              <SidebarIcon>
                <BsGraphDown />
              </SidebarIcon>
              <MobileMenuNavLink to="/admin/analytics">
                Analytics
              </MobileMenuNavLink>
            </MobileMenuNavItem>
            <MobileMenuNavItem>
              <SidebarIcon>
                <BsCalendar />
              </SidebarIcon>
              <MobileMenuNavLink to="/admin/events">Events</MobileMenuNavLink>
            </MobileMenuNavItem>
            <MobileMenuNavItem>
              <SidebarIcon>
                <BsGear />
              </SidebarIcon>
              <MobileMenuNavLink to="/admin/settings">
                Settings
              </MobileMenuNavLink>
            </MobileMenuNavItem>
            <MobileMenuNavItem>
              <SidebarIcon>
                <BsChatDots />
              </SidebarIcon>
              <MobileMenuNavLink to="/admin/messages">
                Messages
              </MobileMenuNavLink>
            </MobileMenuNavItem>
            <MobileMenuNavItem>
              <SidebarIcon>
                <BsCalendarEvent />
              </SidebarIcon>
              <MobileMenuNavLink to="/admin/schedule">
                Schedule
              </MobileMenuNavLink>
            </MobileMenuNavItem>
            <MobileMenuNavItem>
              <SidebarIcon>
                <BsQuestionSquare />
              </SidebarIcon>
              <MobileMenuNavLink to="/admin/help">Help</MobileMenuNavLink>
            </MobileMenuNavItem>
          </MobileMenuNav>
        </MobileMenu>
      </NavbarContainer>

      {isLoginOpen && (
        <AuthPage isOpen={isLoginOpen} onClose={closeLoginModal} />
      )}
      {isSignupOpen && (
        <AuthPage isOpen={isSignupOpen} onClose={closeSignupModal} />
      )}
    </>
  );
};

export default Navbar;
