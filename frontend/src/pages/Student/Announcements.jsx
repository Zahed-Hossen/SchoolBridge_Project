import { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import StudentLayout from '../../components/Student/StudentLayout';

// Styled components
const Container = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  min-height: 100vh;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 20px;
  color: #333;
`;

const AnnouncementList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const AnnouncementItem = styled.div`
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

const Description = styled.p`
  margin: 5px 0 0;
  font-size: 0.9rem;
  color: #555;
`;

const Date = styled.span`
  font-size: 0.9rem;
  color: #999;
`;

const MarkAsReadButton = styled.button`
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

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage] = useState(5);
  const [isLoading, setIsLoading] = useState(true);

  const fetchAnnouncements = useCallback(async () => {
    try {
      const response = await axios.get(
        'http://localhost:5000/api/announcements',
        {
          withCredentials: true,
        },
      );
      setAnnouncements(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching announcements:', error);
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAnnouncements();
  }, [fetchAnnouncements]);

  const handleMarkAsRead = (id) => {
    setAnnouncements((prevAnnouncements) =>
      prevAnnouncements.map((announcement) =>
        announcement.id === id ? { ...announcement, read: true } : announcement,
      ),
    );
  };

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentItems = announcements.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(announcements.length / itemsPerPage);

  console.log('currentItems:', currentItems);

  if (isLoading) {
    return <p>Loading announcements...</p>;
  }

  return (
    <>
      <StudentLayout>
        <Container>
          <Title>Announcements</Title>
          <AnnouncementList>
            {Array.isArray(currentItems) && currentItems.length > 0 ? (
              currentItems.map((announcement) => (
                <AnnouncementItem key={announcement.id}>
                  <div>
                    <h3>{announcement.title}</h3>
                    <Description>{announcement.description}</Description>
                    <Date>{announcement.date}</Date>
                  </div>
                  {!announcement.read && (
                    <MarkAsReadButton
                      onClick={() => handleMarkAsRead(announcement.id)}
                    >
                      Mark as Read
                    </MarkAsReadButton>
                  )}
                </AnnouncementItem>
              ))
            ) : (
              <p>No announcements yet.</p>
            )}
          </AnnouncementList>
          <PaginationContainer>
            <ReactPaginate
              previousLabel={'Previous'}
              nextLabel={'Next'}
              breakLabel={'...'}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={3}
              onPageChange={handlePageClick}
              containerClassName={'pagination'}
              activeClassName={'active'}
            />
          </PaginationContainer>
        </Container>
      </StudentLayout>
    </>
  );
};

export default Announcements;
