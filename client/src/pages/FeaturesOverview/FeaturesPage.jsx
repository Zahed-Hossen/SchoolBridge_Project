import { useNavigate } from "react-router-dom";
import "./FeaturesPage.css";
import HeroImage from "../../assets/image/FeatureOverviewPage_HeroImage.avif";

const FeaturesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="features-page">
      <header className="header">
        <div className="menu-icon">
          <i className="fas fa-bars"></i>
        </div>
        <h1 className="page-title" onClick={() => navigate("/")}>
          SchoolBridge Features
        </h1>

      <nav className="navbar">
        <ul className="nav-links">
          <li className="nav-item">
            <a href="/features" className="nav-link">Features</a>
          </li>
          <li className="nav-item">
            <a href="/pricing" className="nav-link">Pricing</a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-link">About</a>
          </li>
          <li className="nav-item">
            <a href="/contact" className="nav-link">Contact</a>
          </li>
        </ul>
      </nav>
      </header>
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${HeroImage})` }}
      >
        <div className="hero-content">
          <h2 className="hero-heading">Welcome to SchoolBridge</h2>
          <p className="hero-subheading">Redefining School Operations</p>
          <button className="cta-button" onClick={() => navigate("/signup")}>
            Get Started
          </button>
        </div>
      </section>
      <section className="features-section">
        <h2>Our Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <i className="fas fa-chalkboard-teacher"></i>
            <h3>Classroom Management</h3>
            <p>
              Streamline classroom activities and enhance learning experiences.
            </p>
          </div>
          <div className="feature-card">
            <i className="fas fa-comments"></i>
            <h3>Communication Tools</h3>
            <p>
              Improve communication between teachers, students, and parents.
            </p>
          </div>
          <div className="feature-card">
            <i className="fas fa-chart-line"></i>
            <h3>Performance Tracking</h3>
            <p>Monitor and analyze student performance with ease.</p>
          </div>
        </div>
      </section>
      <section className="testimonials-section">
        <h2>What Our Users Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p>
              &quot;SchoolBridge has transformed the way we manage our classrooms.
              It&apos;s a game-changer!&quot;
            </p>
            <h3>- Teacher A</h3>
          </div>
          <div className="testimonial-card">
            <p>
              &quot;The communication tools have made it so much easier to stay in
              touch with my child&apos;s teachers.&quot;
            </p>
            <h3>- Parent B</h3>
          </div>
          <div className="testimonial-card">
            <p>
              &quot;I love being able to track my progress and see where I need to
              improve.&quot;
            </p>
            <h3>- Student C</h3>
          </div>
        </div>
      </section>
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq">
          <h3>What is SchoolBridge?</h3>
          <p>
            SchoolBridge is a platform that streamlines school operations,
            enhances communication, and drives academic success.
          </p>
        </div>
        <div className="faq">
          <h3>How can I sign up?</h3>
          <p>
            You can sign up by clicking the &quot;Get Started&quot; button on the homepage
            and filling out the registration form.
          </p>
        </div>
        <div className="faq">
          <h3>Is there a free trial available?</h3>
          <p>
            Yes, we offer a 30-day free trial for new users. You can sign up and
            start exploring the features right away.
          </p>
        </div>
      </section>
      <footer className="footer">
        <div className="footer-content">
          <button
            className="btn btn-primary"
            onClick={() => navigate("/signup")}
          >
            Get Started
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => navigate("/contact")}
          >
            Contact Us
          </button>
          <div className="footer-links">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-of-service">Terms of Service</a>
            <a href="/contact-us">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FeaturesPage;








// import React from "react";
// import "./FeaturesPage.css";

// const FeaturesPage = () => {
//   return (
//     <div className="features-page">
//       <header className="header">
//         <div className="menu-icon">
//           <i className="fas fa-bars"></i>
//         </div>
//         <h1 className="page-title">SchoolBridge Features</h1>
//       </header>
//       <section className="hero-section">
//         <div className="hero-content">
//           <h2>Welcome to SchoolBridge</h2>
//           <p>Redefining School Operations</p>
//           <button className="cta-button">Get Started</button>
//         </div>
//       </section>
//       <section className="features-section">
//         <h2>Our Features</h2>
//         <div className="features-grid">
//           <div className="feature-card">
//             <i className="fas fa-chalkboard-teacher"></i>
//             <h3>Classroom Management</h3>
//             <p>Streamline classroom activities and enhance learning experiences.</p>
//           </div>
//           <div className="feature-card">
//             <i className="fas fa-comments"></i>
//             <h3>Communication Tools</h3>
//             <p>Improve communication between teachers, students, and parents.</p>
//           </div>
//           <div className="feature-card">
//             <i className="fas fa-chart-line"></i>
//             <h3>Performance Tracking</h3>
//             <p>Monitor and analyze student performance with ease.</p>
//           </div>
//         </div>
//       </section>
//       <section className="testimonials-section">
//         <h2>What Our Users Say</h2>
//         <div className="testimonials-grid">
//           <div className="testimonial-card">
//             <p>"SchoolBridge has transformed the way we manage our classrooms. It's a game-changer!"</p>
//             <h3>- Teacher A</h3>
//           </div>
//           <div className="testimonial-card">
//             <p>"The communication tools have made it so much easier to stay in touch with my child's teachers."</p>
//             <h3>- Parent B</h3>
//           </div>
//           <div className="testimonial-card">
//             <p>"I love being able to track my progress and see where I need to improve."</p>
//             <h3>- Student C</h3>
//           </div>
//         </div>
//       </section>
//       <section className="faq-section">
//         <h2>Frequently Asked Questions</h2>
//         <div className="faq">
//           <h3>What is SchoolBridge?</h3>
//           <p>SchoolBridge is a platform that streamlines school operations, enhances communication, and drives academic success.</p>
//         </div>
//         <div className="faq">
//           <h3>How can I sign up?</h3>
//           <p>You can sign up by clicking the "Get Started" button on the homepage and filling out the registration form.</p>
//         </div>
//         <div className="faq">
//           <h3>Is there a free trial available?</h3>
//           <p>Yes, we offer a 30-day free trial for new users. You can sign up and start exploring the features right away.</p>
//         </div>
//       </section>
//       <footer className="footer">
//         <div className="footer-content">
//           <p>&copy; 2023 SchoolBridge. All rights reserved.</p>
//           <div className="footer-links">
//             <a href="/privacy-policy">Privacy Policy</a>
//             <a href="/terms-of-service">Terms of Service</a>
//             <a href="/contact-us">Contact Us</a>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default FeaturesPage;
