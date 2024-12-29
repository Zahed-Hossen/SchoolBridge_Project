import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Modal from './EditModal'; // Reusable modal component
import NotificationsDropdown from './NotificationsDropdown'; // Import NotificationsDropdown component
import ParentLayout from '../../../components/Parent/ParentLayout';

const Container = styled.div`
  padding: 20px;
  max-width: 900px;
  margin: 0 auto;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  color: #0f2f42;
  text-align: center;
`;

const Section = styled.div`
  margin-bottom: 30px;
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
`;

const InfoItem = styled.div`
  background-color: white;
  padding: 10px 15px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const InfoLabel = styled.p`
  font-weight: bold;
  color: #0f2f42;
  margin: 0;
`;

const InfoValue = styled.p`
  color: #333;
  margin: 5px 0 0;
`;

const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto;
  display: block;
`;

const EditButton = styled.button`
  background-color: #0f2f42;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  display: block;
  width: 100%;
  text-align: center;

  &:hover {
    background-color: #084265;
  }
`;

const ChildCard = styled.div`
  background-color: white;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const ChildName = styled.h3`
  color: #0f2f42;
  margin-bottom: 10px;
`;

const ParentStudentInfo = () => {
  const [parentData, setParentData] = useState(null);
  const [childrenData, setChildrenData] = useState([]);
  const [modalData, setModalData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchParentData = async () => {
      try {
        const response = await fetch(
          'https://schoolbridge-project-server.onrender.com/api/parent/info',
        );
        if (!response.ok) {
          if (response.status === 404) {
            console.error(
              'Parent not found:',
              response.status,
              await response.text(),
            );
            setError('Parent information not found.');
          } else {
            console.error(
              'Error fetching parent data:',
              response.status,
              await response.text(),
            );
            setError('Failed to fetch parent and children information.');
          }
          return;
        }
        const data = await response.json();
        setParentData(data.parent);
        setChildrenData(data.children);
      } catch (error) {
        console.error('Error fetching parent data:', error);
        setError('Failed to fetch parent and children information.');
      }
    };

    fetchParentData();
  }, []);

  const openModal = (data) => {
    setModalData(data);
    setShowModal(true);
  };

  const handleModalSubmit = async (updatedData) => {
    try {
      const response = await fetch(
        `https://schoolbridge-project-server.onrender.com/api/${updatedData.type}/update`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedData),
        },
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const updatedInfo = await response.json();
      if (updatedData.type === 'parent') {
        setParentData(updatedInfo);
      } else {
        setChildrenData((prevChildren) =>
          prevChildren.map((child) =>
            child.id === updatedInfo.id ? updatedInfo : child,
          ),
        );
      }
      setShowModal(false);
    } catch (error) {
      console.error('Error updating information:', error);
      setError('Failed to update information.');
    }
  };

  const handleViewPerformance = (childId) => {
    navigate(
      `https://schoolbridge-project-server.onrender.com/performance/${childId}`,
    );
  };

  const handleViewGrades = (childId) => {
    navigate(
      `https://schoolbridge-project-server.onrender.com/grades/${childId}`,
    );
  };

  if (error) {
    return <p>{error}</p>;
  }

  if (!parentData) {
    return <p>Loading parent and children information...</p>;
  }

  return (
    <>
      <ParentLayout>
        <Container>
          <header
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '20px',
            }}
          >
            <h1>Parent Info</h1>
            <NotificationsDropdown />
          </header>
          <Title>Parent and Student Information</Title>

          {/* Parent Info Section */}
          <Section>
            <Title>Parent Info</Title>
            <ProfileImage
              src={parentData.profilePicture || '/default-profile.png'}
              alt="Parent Profile"
            />
            <InfoGrid>
              <InfoItem>
                <InfoLabel>Name:</InfoLabel>
                <InfoValue>{parentData.name}</InfoValue>
              </InfoItem>
              <InfoItem>
                <InfoLabel>Email:</InfoLabel>
                <InfoValue>{parentData.email}</InfoValue>
              </InfoItem>
              <InfoItem>
                <InfoLabel>Contact:</InfoLabel>
                <InfoValue>{parentData.contact}</InfoValue>
              </InfoItem>
              <InfoItem>
                <InfoLabel>Address:</InfoLabel>
                <InfoValue>{parentData.address}</InfoValue>
              </InfoItem>
            </InfoGrid>
            <EditButton
              onClick={() => openModal({ ...parentData, type: 'parent' })}
            >
              Edit Parent Info
            </EditButton>
          </Section>

          {/* Children Info Section */}
          <Section>
            <Title>Children Info</Title>
            <InfoGrid>
              {childrenData.map((child) => (
                <ChildCard key={child.id}>
                  <ProfileImage
                    src={child.profilePicture || '/default-profile.png'}
                    alt={`${child.name} Profile`}
                  />
                  <ChildName>{child.name}</ChildName>
                  <p>Grade: {child.grade}</p>
                  <p>Roll Number: {child.rollNumber}</p>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <EditButton
                      onClick={() => openModal({ ...child, type: 'child' })}
                    >
                      Edit Child Info
                    </EditButton>
                    <EditButton onClick={() => handleViewPerformance(child.id)}>
                      View Performance
                    </EditButton>
                    <EditButton onClick={() => handleViewGrades(child.id)}>
                      View Grades
                    </EditButton>
                  </div>
                </ChildCard>
              ))}
            </InfoGrid>
          </Section>

          {/* Edit Modal */}
          {showModal && (
            <Modal
              data={modalData}
              onClose={() => setShowModal(false)}
              onSubmit={handleModalSubmit}
            />
          )}
        </Container>
      </ParentLayout>
    </>
  );
};

export default ParentStudentInfo;
