import { useState } from 'react';
import PropTypes from 'prop-types'
import studentIcon from '../../assets/icons/studentIcon.jpg';
import teacherIcon from '../../assets/icons/teacherIcon.png';
import administratorIcon from '../../assets/icons/administratorIcon.png';
import parentIcon from '../../assets/icons/parentIcon.png';

import Modal from '../../components/Modal';
import {
  UserRolesSectionContainer,
  SectionHeading,
  RolesContainer,
  UserRoleCardContainer,
  RoleIcon,
  RoleTitle,
  RoleDescription,
  RoleLink,
} from './UserRoleSectionStyles';

const userRoles = [
  {
    icon: studentIcon,
    role: 'Students',
    description:
      'Access assignments, track progress, and communicate with teachers.',
    link: '/student/dashboard',
    additionalInfo:
      'Students can access their assignments, track their academic progress, and communicate directly with their teachers through the platform.',
  },
  {
    icon: teacherIcon,
    role: 'Teachers',
    description:
      'Manage classes, share resources, and evaluate student performance.',
    link: '/teacher/dashboard',
    additionalInfo:
      'Teachers can manage their classes, share educational resources, and evaluate student performance efficiently.',
  },
  {
    icon: administratorIcon,
    role: 'Administrators',
    description: 'Oversee school operations and manage resources efficiently.',
    link: '/admin/dashboard',
    additionalInfo:
      'Administrators have access to all school data and can manage resources, staff, and students efficiently.',
  },
  {
    icon: parentIcon,
    role: 'Parents',
    description: "Stay informed about your child's activities and progress.",
    link: '/parent/dashboard',
    additionalInfo:
      "Parents can track their child's progress, view attendance, and communicate with teachers.",
  },
];

const UserRoleCard = ({ icon, role, description, link, additionalInfo }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLearnMoreClick = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <UserRoleCardContainer>
        <RoleIcon src={icon} alt={`${role} icon`} />
        <RoleTitle>{role}</RoleTitle>
        <RoleDescription>{description}</RoleDescription>
        <RoleLink href="#" onClick={handleLearnMoreClick}>Learn More</RoleLink>
      </UserRoleCardContainer>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2>{role}</h2>
        <p>{additionalInfo}</p>
        <RoleLink to={link}>Go to {role} Page</RoleLink>
      </Modal>
    </>
  );
};

UserRoleCard.propTypes = {
  icon: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  additionalInfo: PropTypes.string.isRequired,
};

const UserRoleSection = () => {
  return (
    <UserRolesSectionContainer>
      <SectionHeading>Who We Serve</SectionHeading>
      <RolesContainer>
      {userRoles.map((role, index) => (
         <UserRoleCard
            key={index}
           icon={role.icon}
           role={role.role}
           description={role.description}
           link={role.link}
           additionalInfo={role.additionalInfo}
          />
        ))}

      </RolesContainer>
    </UserRolesSectionContainer>

  );
};

export default UserRoleSection;
