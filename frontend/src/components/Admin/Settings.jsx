import styled from 'styled-components';

const Container = styled.div`
  grid-area: settings;
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 4px;
  line-height: 1.5;
  border-radius: 24px;
  box-shadow: 0 2px 4px #135f86;
  padding:
  padding:20px;
  font-family: 'Roboto', sans-serif;
  background-color: #155677;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #fff;
  border-radius: 10px;
  margin: 10px 0;
  box-shadow: 0 2px 4px #135f86;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgb(22, 189, 231);
  }
`;

const Icon = styled.i`
  font-size: 24px;
  margin-right: 10px;
  color: #000000;
`;

const Text = styled.span`
  flex: 1;
  font-size: 16px;
  font-weight: 700;
  color: #000000;
  margin-right: 10px;
  text-transform: capitalize;
`;

const Secure = styled.span`
  color:rgb(94, 193, 226);
  font-size: 14px;
  font-weight: 700;
  text color: #00bfff;
`;

const Button = styled.button`
  padding: 10px 20px;
  border-radius: 20px;
  spacing-between: 16px;
  font-weight: 700;
  cursor: pointer;
  margin: 5px 0;
  background-color: ${(props) => props.color || '#c1e5f6'};
  color: ${(props) => props.color || '#000000'};
  border: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => props.hoverBgColor || '#155677'};
  }
`;

const Settings = () => {
  return (
    <Container>
      <MenuItem>
        <Icon className="fas fa-lock"></Icon>
        <Text>Change Password</Text>
        <Secure>Secure</Secure>
        <Icon className="fas fa-chevron-right"></Icon>
      </MenuItem>
      <MenuItem>
        <Icon className="fas fa-globe"></Icon>
        <Text>Language Options</Text>
        <Icon className="fas fa-chevron-right"></Icon>
      </MenuItem>
      <MenuItem>
        <Icon className="fas fa-cog"></Icon>
        <Text>System Settings</Text>
        <Icon className="fas fa-chevron-right"></Icon>
      </MenuItem>
      <MenuItem>
        <Icon className="fas fa-shield-alt"></Icon>
        <Text>Role & Access Management</Text>
        <Icon className="fas fa-chevron-right"></Icon>
      </MenuItem>
      <Button className="button signup">Sign Up</Button>
      <Button className="button login" bgColor="#00bfff" color="#fff" hoverBgColor="#0099cc">Login</Button>
    </Container>
  );
};

export default Settings;
