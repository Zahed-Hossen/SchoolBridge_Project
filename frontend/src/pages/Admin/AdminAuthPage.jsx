import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '../../components/Admin/AdminLayout';

const Container = styled.div`
  padding: 20px;
  font-family: 'Roboto', sans-serif;
  background-color: #f0f8f8;
`;

const Title = styled.h1`
  font-weight: 700;
  color: #333;
  font-size: 24px;
`;

const Subtitle = styled.h2`
  font-weight: 700;
  color: #333;
  font-size: 20px;
  margin-top: 20px;
`;

const Button = styled.div`
  display: inline-block;
  padding: 10px 20px;
  border-radius: 20px;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
  margin: 5px 0;
  background-color: #174863;
  color: #f2f9fd;

  &:hover {
    background-color: ${(props) => props.color || '#333'};
    color: ${(props) => props.color || '#e0e0e0'};
  }
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background-color: #e0e0e0;
  border-radius: 20px;
  padding: 10px;
  margin: 20px 0;
`;

const SearchInput = styled.input`
  border: none;
  background: none;
  outline: none;
  flex: 1;
  padding: 0 10px;
`;

const UserCard = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
  margin: 10px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const UserImage = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

const UserInfo = styled.div`
  flex: 1;
`;

const UserName = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: 700;
`;

const UserEmail = styled.p`
  margin: 0;
  color: #666;
`;

const UserActions = styled.div`
  display: flex;
  flex-direction: column;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  width: 100%;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
`;

const Icon = styled.i`
  font-size: 24px;
  color: #00bfff;
`;

const AdminAuthPage = () => {
  const navigate = useNavigate();

  const handleReset = async () => {
    try {
      const response = await axios.post(
        'https://schoolbridge-project-server.onrender.com/api/admin/reset',
        {
          withCredentials: true,
        },
      );
      console.log('Reset successful:', response.data);
      alert('System reset successfully');
    } catch (error) {
      console.error('Error resetting system:', error);
      alert('Error resetting system');
    }
  };

  const handleAudit = async () => {
    try {
      const response = await axios.post(
        'https://schoolbridge-project-server.onrender.com/api/admin/audit',
        {
          withCredentials: true,
        },
      );
      console.log('Audit successful:', response.data);
      alert('Audit completed successfully');
    } catch (error) {
      console.error('Error performing audit:', error);
      alert('Error performing audit');
    }
  };

  const handleLogout = () => {
    try {
     
      localStorage.removeItem('authToken');
      navigate(
        'https://schoolbridge-project-server.onrender.com/api/auth/signin',
        {
          withCredentials: true,
        },
      );
      console.log('Logout successful');
    } catch (error) {
      console.error('Error logging out:', error);
      alert('Error logging out');
    }
  };

  return (
    <AdminLayout>
      <Container>
        <Title>Authentication...</Title>
        <Subtitle>User Accounts Overview</Subtitle>
        <div>
          <Button className="btn btn-add">Add</Button>
          <Button className="btn btn-report" bgColor="#00bfff" color="#fff">
            Report
          </Button>
        </div>
        <Subtitle>User Accounts Overview</Subtitle>
        <SearchBar>
          <SearchInput
            placeholder="Search by name, email, or role"
            type="text"
          />
          <Icon className="fas fa-search"></Icon>
        </SearchBar>
        <UserCard>
          <UserImage
            alt="Profile picture of John Smith"
            src="https://storage.googleapis.com/a1aa/image/SLL5pD4zSe1mTyvNnn4Hl1x5l72oeGiSH5hOTy6OHPzQRG9TA.jpg"
          />
          <UserInfo>
            <UserName>John Smith</UserName>
            <UserEmail>john.smith@example.com</UserEmail>
          </UserInfo>
          <UserActions>
            <Button className="btn btn-reset" onClick={handleReset}>
              Reset...
            </Button>
            <Button className="btn btn-view" bgColor="#00bfff" color="#fff">
              View Details
            </Button>
          </UserActions>
        </UserCard>
        <UserCard>
          <UserImage
            alt="Profile picture of Emma Johnson"
            src="https://storage.googleapis.com/a1aa/image/dwiHgR8ueSUEIyiwKDp3fPcnDfJZ3O070ZyzonoOlBi1iM6nA.jpg"
          />
          <UserInfo>
            <UserName>Emma Johnson</UserName>
            <UserEmail>emma.johnson@example.com</UserEmail>
          </UserInfo>
          <UserActions>
            <Button className="btn btn-deactivate">Deactivate...</Button>
            <Button className="btn btn-view" bgColor="#00bfff" color="#fff">
              View Details
            </Button>
          </UserActions>
        </UserCard>
        <UserCard>
          <UserImage
            alt="Profile picture of Liam Brown"
            src="https://storage.googleapis.com/a1aa/image/NLyuBxuWm3qCORV4LJffvgefgq21E49SwPW6lfZXz1rzKyofE.jpg"
          />
          <UserInfo>
            <UserName>Liam Brown</UserName>
            <UserEmail>liam.brown@example.com</UserEmail>
          </UserInfo>
          <UserActions>
            <Button className="btn btn-reset">Reset...</Button>
            <Button className="btn btn-view" bgColor="#00bfff" color="#fff">
              View Details
            </Button>
          </UserActions>
        </UserCard>
        <UserCard>
          <UserImage
            alt="Profile picture of Olivia Davis"
            src="https://storage.googleapis.com/a1aa/image/BfyfGeJFx9DBtIoNEUouMuhsdFoO4PvGWvn7ZdJYMdaliM6nA.jpg"
          />
          <UserInfo>
            <UserName>Olivia Davis</UserName>
            <UserEmail>olivia.davis@example.com</UserEmail>
          </UserInfo>
          <UserActions>
            <Button className="btn btn-deactivate">Deactivate...</Button>
            <Button className="btn btn-view" bgColor="#00bfff" color="#fff">
              View Details
            </Button>
          </UserActions>
        </UserCard>
        <UserCard>
          <UserImage
            alt="Profile picture of Noah Wilson"
            src="https://storage.googleapis.com/a1aa/image/XFeIt5eYwEtqEEgTWueHisvr8SeirvU9DK3xqKHWXZ4gFZ0PB.jpg"
          />
          <UserInfo>
            <UserName>Noah Wilson</UserName>
            <UserEmail>noah.wilson@example.com</UserEmail>
          </UserInfo>
          <UserActions>
            <Button className="btn btn-reset">Reset...</Button>
            <Button className="btn btn-view" bgColor="#00bfff" color="#fff">
              View Details
            </Button>
          </UserActions>
        </UserCard>
        <UserCard>
          <UserImage
            alt="Profile picture of Ava Martinez"
            src="https://storage.googleapis.com/a1aa/image/KaOHrM2DKS6kFpKyuZY48oeKPsvKsfddhqYmevf5XcdQFZ0PB.jpg"
          />
          <UserInfo>
            <UserName>Ava Martinez</UserName>
            <UserEmail>ava.martinez@example.com</UserEmail>
          </UserInfo>
          <UserActions>
            <Button className="btn btn-deactivate">Deactivate...</Button>
            <Button className="btn btn-view" bgColor="#00bfff" color="#fff">
              View Details
            </Button>
          </UserActions>
        </UserCard>
        <Subtitle>Role Assignment Tools</Subtitle>
        <div>
          <Button className="btn btn-add">Role</Button>
          <Button className="btn btn-report" bgColor="#00bfff" color="#fff">
            Status
          </Button>
          <Button className="btn btn-add">Login Period</Button>
        </div>
        <Subtitle>Account Verification Tools</Subtitle>
        <div>
          <Button className="btn btn-add">Send</Button>
          <Button className="btn btn-track" bgColor="#00bfff" color="#fff">
            Track
          </Button>
        </div>
        <Subtitle>Security & Password Management</Subtitle>
        <div>
          <Button className="btn btn-add">Reset</Button>
          <Button
            className="btn btn-audit"
            bgColor="#00bfff"
            color="#fff"
            onClick={handleAudit}
          >
            Audit
          </Button>
        </div>
        <div>
          <Button
            className="btn btn-logout"
            bgColor="#0000ff"
            color="#fff"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>
        <Footer>
          <Icon className="fas fa-home"></Icon>
          <Icon className="fas fa-search"></Icon>
          <Icon className="fas fa-user"></Icon>
        </Footer>
      </Container>
    </AdminLayout>
  );
};

export default AdminAuthPage;
