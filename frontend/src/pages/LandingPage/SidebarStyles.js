import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.nav`
  position: relative; /* Fixed position */
  top: 0;
  left: 0;
  background-color: #155677;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;

  color: #fff;
  padding: 2rem;
  border-radius: 20px;
  font-size: 1.5rem;
  font-weight: bold;
  z-index: 1000; /* High z-index to stay above other content */
`;

export const NavbarLogo = styled.div`
  color: white;
  font-size: 24px;
  font-weight: bold;

  a {
    color: white;
    text-decoration: none;
  }
`;

export const NavList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-grow: 1;

  @media (max-width: 768px) {
    display: none; /* Hide on mobile devices */
  }
`;

export const NavItem = styled.li`
  position: relative;
  margin-right: 20px;

  &:hover > ul {
    display: block; /* Show dropdown on hover */
  }
`;

export const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 18px;
  margin-left: 10px;

  &:hover {
    text-decoration:underline;
  }
`;

export const DropdownMenu = styled.ul`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  z-index: 1000;

  ${NavItem}:hover & {
    display: block; /* Show dropdown on hover */
  }
`;

export const DropdownItem = styled.li`
  & a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;

    &:hover {
      background-color: #ddd;
    }
  }
`;

export const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  font-size: 30px;

  @media (max-width: 768px) {
    display: block; /* Show on mobile devices */
  }
`;

export const MobileMenu = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  background-color: #155677;
  position: fixed;
  top: 0;
  right: 0;
  width: 250px;
  height: 100%;
  z-index: 1000;
  padding: 20px;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
`;

export const MobileMenuClose = styled.div`
  align-self: flex-end;
  cursor: pointer;
  font-size: 30px;
  color: white;
`;

export const MobileMenuNav = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 20px;
`;

export const MobileMenuNavItem = styled.li`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

export const MobileMenuNavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 18px;
  margin-left: 10px;

  &:hover {
    text-decoration: underline;
  }
`;

export const SidebarIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: white;
`;

export const NavbarButtons = styled.div`
  display: flex;
  gap: 10px;
`;

export const Button = styled.button`
  background-color: ${props => props.$primary ? '#4db7e3' : '#e3f1fb'};
  color: ${props => props.$primary ? 'white' : '#269fd1'};
  border: ${props => props.$primary ? 'none' : '2px solid #269fd1'};
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.$primary ? '#269fd1' : '#c1e5f6'};
  }
`;

export const LanguageToggle = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 16px;
  margin-left: 10px;

  &:hover {
    text-decoration: underline;
  }
`;
