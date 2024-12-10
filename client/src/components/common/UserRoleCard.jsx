import React from "react";
import { Link } from "react-router-dom";
import "./UserRoleCard.css";

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

export default UserRoleCard;