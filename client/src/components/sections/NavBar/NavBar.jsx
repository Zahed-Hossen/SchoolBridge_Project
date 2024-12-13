import React, { useState, useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import "./NavBar.css";

const NavBar = ({ onLoginClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="navbar-logo">
          <a href="/">SchoolBridge</a>
        </div>

        {/* Menu Icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        {/* Links Section (Visible on larger screens or in the menu popup) */}
        <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/features">Features</a>
          </li>
          <li>
            <a href="/pricing">Pricing</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <button className="login-button" onClick={onLoginClick}>Log In</button>
          </li>
        </ul>

        {/* Theme Toggle Button */}
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;




// import React, { useState, useContext } from "react";
// import { ThemeContext } from "../../../context/ThemeContext";
// import "./NavBar.css";

// const NavBar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const { theme, toggleTheme } = useContext(ThemeContext);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <nav className="navbar">
//       <div className="logo">
//         <a href="/">SchoolBridge</a>
//       </div>
//       <div className="icons">
//         <button className="theme-toggle" onClick={toggleTheme}>
//           {theme === "light" ? "🌙" : "☀️"}
//         </button>
//         <div className="menu-icon" onClick={toggleMenu}>
//           <div className="hamburger"></div>
//           <div className="hamburger"></div>
//           <div className="hamburger"></div>
//         </div>
//       </div>
//       <ul className={`menu ${menuOpen ? "open" : ""}`}>
//         <li><a href="#landing">Landing Page</a></li>
//         <li><a href="#features">Features/Product Overview</a></li>
//         <li><a href="#student-role">Student Role</a></li>
//         <li><a href="#teacher-role">Teacher Role</a></li>
//         <li><a href="#admin-role">Administrative Role</a></li>
//         <li><a href="#parent-role">Parent Role</a></li>
//         <li><a href="#auth">Authentication</a></li>
//         <li><a href="#about">About Us</a></li>
//         <li><a href="#pricing">Pricing</a></li>
//         <li><a href="#contact">Contact Us</a></li>
//       </ul>
//     </nav>
//   );
// };

// export default NavBar;

// import React, { useState, useContext } from "react";
// import { ThemeContext } from "../../../context/ThemeContext";
// import "./NavBar.css";

// const NavBar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const { theme, toggleTheme } = useContext(ThemeContext);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <div className="navbar">
//       <h1>SchoolBridge</h1>
//       <div className="icons">
//         <button className="theme-toggle" onClick={toggleTheme}>
//           {theme === "light" ? "🌙" : "☀️"}
//         </button>
//         <i className="fas fa-bars" onClick={toggleMenu}></i>
//       </div>
//       {menuOpen && (
//         <div className="menu">
//           <ul>
//             <li><a href="#landing">Landing Page</a></li>
//             <li><a href="#features">Features/Product Overview</a></li>
//             <li><a href="#student-role">Student Role</a></li>
//             <li><a href="#teacher-role">Teacher Role</a></li>
//             <li><a href="#admin-role">Administrative Role</a></li>
//             <li><a href="#parent-role">Parent Role</a></li>
//             <li><a href="#auth">Authentication</a></li>
//             <li><a href="#about">About Us</a></li>
//             <li><a href="#pricing">Pricing</a></li>
//             <li><a href="#contact">Contact Us</a></li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default NavBar;
