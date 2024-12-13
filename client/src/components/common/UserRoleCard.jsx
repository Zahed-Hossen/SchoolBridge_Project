import { Link } from "react-router-dom";
import "./UserRoleCard.css";
import PropTypes from 'prop-types';

const UserRoleCard = ({ icon, role, description, link }) => {
  return (
    <div className="user-role-card">
      <i className={`fas ${icon}`}></i>
      <h3>{role}</h3>
      <p>{description}</p>
      <Link to={link} className="role-link">
        Learn More
      </Link>
    </div>
  );
};
UserRoleCard.propTypes = {
  icon: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default UserRoleCard;