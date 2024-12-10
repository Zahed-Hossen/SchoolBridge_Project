import React from "react";
import "./FeatureCard.css"; // Optional styling for individual cards

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="feature-card">
      <div className="icon-wrapper">
        <img src={icon} alt={title} className="feature-icon" />
      </div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
    </div>
  );
};

export default FeatureCard;