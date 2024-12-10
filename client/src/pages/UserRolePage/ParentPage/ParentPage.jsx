import React from 'react';
import './ParentPage.css';

const ParentPage = () => {
  return (
    <div className="parent-page">
      <header className="header">
        <h1>SchoolBridge</h1>
        <i className="fas fa-cog settings"></i>
      </header>
      <nav className="nav">
        <button className="link-button">Overview</button>
        <button className="link-button">Progress</button>
        <button className="link-button">Messages</button>
        <button className="link-button">Fees</button>
      </nav>
      <div className="content">
        <div className="section">
          <h2>Child at a Glance</h2>
          <div className="grades">
            <div className="grade">
              <i className="fas fa-book"></i>
              A
            </div>
            <div className="grade">
              <i className="fas fa-flask"></i>
              B+
            </div>
            <div className="grade">
              <i className="fas fa-book"></i>
              A-
            </div>
            <div className="grade">
              <i className="fas fa-flask"></i>
              B
            </div>
          </div>
        </div>
        <div className="section">
          <h2>Academic Progress</h2>
          <div className="attendance">
            <p>85%</p>
            <p>
              Last Term
              <span style={{ color: 'green' }}> +5%</span>
            </p>
            <img
              alt="Line chart showing academic progress over time"
              height="150"
              src="https://storage.googleapis.com/a1aa/image/ApgcGZsifQ11UK9YDN12HyIXSGWmXxjZc1UG8cWrYvBG7Y8JA.jpg"
              width="300"
            />
          </div>
        </div>
        <div className="section">
          <h2>Attendance Patterns</h2>
          <div className="attendance">
            <p>95%</p>
            <p style={{ color: 'green' }}> -2%</p>
            <img
              alt="Bar chart showing attendance patterns over time"
              height="150"
              src="https://storage.googleapis.com/a1aa/image/MfH4sHxiSbw1ZSaWj7pZIMlOSM09IToMcts7nwtmcXVF7Y8JA.jpg"
              width="300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentPage;