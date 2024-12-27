import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const UserRolesSectionContainer = styled.section`
  padding: 50px 20px;
  background-color: #c1e5f6; /* Lightest blue from your color palette */
  text-align: center;
`;

export const SectionHeading = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: 2rem; /* Responsive font size */
  color: #135f86; /* Medium-dark blue from your color palette */
  margin-bottom: 30px;
`;

export const RolesContainer = styled.div`
  display: flex;
  flex-wrap: wrap; /* Ensures responsive layout */
  justify-content: center;
  gap: 20px;
`;

export const UserRoleCardContainer = styled.div`
  flex: 1 1 250px; /* Responsive card size */
  max-width: 300px; /* Ensure cards don't grow too large */
  padding: 20px;
  border: 1px solid #c1e5f6; /* Soft blue border */
  border-radius: 8px;
  background-color: #f2f9fd; /* White card background */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

export const RoleIcon = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 15px;
`;

export const RoleTitle = styled.h3`
  font-family: "Montserrat", sans-serif;
  font-size: 1.25rem;
  color: #155677;
  margin-bottom: 0.5rem;
`;

export const RoleDescription = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  color: #174863;
  line-height: 1.5;
`;

export const RoleLink = styled(Link)`
  display: inline-block;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #4db7e3;
  color: white;
  border-radius: 5px;
  text-decoration: none;

  &:hover {
    background-color: #269fd1;
  }
`;
