import React from "react";
import FeatureCard from "./FeatureCard.jsx";
import "./FeatureCard.css";
import features from "./FeaturesData.js"; // Import feature details
import "./FeaturesSection.css"; // Import styles for this section

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <h2 className="section-heading">Our Key Features</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
