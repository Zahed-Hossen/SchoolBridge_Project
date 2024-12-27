import PropTypes from 'prop-types';
import styled from 'styled-components';
import Sidebar from './Sidebar';
const Layout = styled.div`
  display: flex;
`;

const MainContent = styled.div`
  flex: 1;
  padding: 20px;
`;

const TeacherLayout = ({ children }) => {
  return (
    <>
      <Sidebar />
      <Layout>
        <MainContent>{children}</MainContent>
      </Layout>
    </>
  );
};
TeacherLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TeacherLayout;
