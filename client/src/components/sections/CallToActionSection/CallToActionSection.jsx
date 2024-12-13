import "./CallToActionSection.css";

const CallToActionSection = () => {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2 className="cta-heading">Ready to Transform Your School?</h2>
        <p className="cta-subheading">
          Join thousands of educators, parents, and administrators improving school management with SchoolBridge.
        </p>
        <div className="cta-buttons">
          <button className="btn-primary">Get Started Now</button>
          <button className="btn-secondary">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;