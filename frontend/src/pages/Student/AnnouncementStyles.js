import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  min-height: 100vh;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 20px;
  color: #333;
`;

export const AnnouncementList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const AnnouncementItem = styled.div`
  background: #ffffff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    margin: 0;
    font-size: 1.1rem;
    font-weight: 600;
    color: #0f2f42;
  }
`;

export const Description = styled.p`
  margin: 5px 0 0;
  font-size: 0.9rem;
  color: #555;
`;

export const Date = styled.span`
  font-size: 0.9rem;
  color: #999;
`;

export const MarkAsReadButton = styled.button`
  background-color: #43a047;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #388e3c;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const PaginationStyles = styled.div`
  .pagination {
    display: flex;
    list-style: none;
    padding: 0;
  }

  .pagination li {
    margin: 0 5px;
  }

  .pagination li a {
    padding: 8px 12px;
    border: 1px solid #ddd;
    border-radius: 4px;
    cursor: pointer;
    color: #333;
    text-decoration: none;
  }

  .pagination li a:hover {
    background-color: #f0f0f0;
  }

  .pagination .active a {
    background-color: #0f2f42;
    color: white;
    border: 1px solid #0f2f42;
  }
`;
