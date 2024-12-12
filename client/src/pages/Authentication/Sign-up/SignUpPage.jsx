import React, { useState, useRef, useEffect } from "react";
import "./SignUpPage.css";

const SignUpPage = ({ isOpen, onClose }) => {
  const [role, setRole] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [feedback, setFeedback] = useState({ message: "", type: "" });
  const modalRef = useRef(null);

  useEffect(() => {
    const modal = modalRef.current;
    let isDragging = false;
    let isResizing = false;
    let startX, startY, startWidth, startHeight;

  
    const handleMouseDown = (e) => {
      if (e.target.classList.contains("resize-handle")) {
        isResizing = true;
        startX = e.clientX;
        startY = e.clientY;
        startWidth = parseInt(
          document.defaultView.getComputedStyle(modal).width,
          10
        );
        startHeight = parseInt(
          document.defaultView.getComputedStyle(modal).height,
          10
        );
      } else {
        isDragging = true;
        startX = e.clientX - modal.offsetLeft;
        startY = e.clientY - modal.offsetTop;
      }
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    };

    const handleMouseMove = (e) => {
      if (isDragging) {
        modal.style.left = `${e.clientX - startX}px`;
        modal.style.top = `${e.clientY - startY}px`;
      } else if (isResizing) {
        modal.style.width = `${startWidth + e.clientX - startX}px`;
        modal.style.height = `${startHeight + e.clientY - startY}px`;
      }
    };

    const handleMouseUp = () => {
      isDragging = false;
      isResizing = false;
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    modal.addEventListener("mousedown", handleMouseDown);
    return () => {
      modal.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Clear previous error styles
    clearErrorStyles();

    // Validate all fields
    const errors = [];
    if (!role || role === "Choose your role in SchoolBridge") {
      errors.push("Please select your role.");
      setErrorStyle(document.getElementById("role"));
    }
    if (!fullName.trim()) {
      errors.push("Full name is required.");
      setErrorStyle(document.getElementById("fullname"));
    }
    if (!email.trim() || !validateEmail(email)) {
      errors.push("Enter a valid email address.");
      setErrorStyle(document.getElementById("email"));
    }
    if (!password.trim()) {
      errors.push("Password is required.");
      setErrorStyle(document.getElementById("password"));
    } else if (password.length < 8) {
      errors.push("Password must be at least 8 characters.");
      setErrorStyle(document.getElementById("password"));
    }
    if (password !== confirmPassword) {
      errors.push("Passwords do not match.");
      setErrorStyle(document.getElementById("confirm-password"));
    }
    if (!termsAccepted) {
      errors.push("You must agree to the Terms of Service.");
      setErrorStyle(document.getElementById("terms"));
    }

    if (errors.length > 0) {
      showFeedback(errors.join("\n"), "error"); // Display error messages
    } else {
      // Send form data to the backend
      const formData = {
        role,
        fullName,
        email,
        password,
      };

      try {
        const response = await fetch(
          "http://localhost:5000/api/auth/register",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        const result = await response.json();
        if (response.ok) {
          showFeedback(result.message, "success"); // Display success message
          onClose();
        } else {
          showFeedback(result.message, "error"); // Display error message
        }
      } catch (error) {
        console.error("Error during signup:", error);
        showFeedback("Something went wrong. Please try again later.", "error");
      }
    }
  };

  // Email validation function
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Highlight fields with errors
  const setErrorStyle = (element) => {
    element.classList.add("error");
  };

  // Clear error styles
  const clearErrorStyles = () => {
    document.querySelectorAll("input, select").forEach((element) => {
      element.classList.remove("error");
    });
  };

  // Function to display feedback messages
  const showFeedback = (message, type) => {
    setFeedback({ message, type });
    setTimeout(() => {
      setFeedback({ message: "", type: "" });
    }, 5000);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-content"
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <span className="close-btn" onClick={onClose}>
            &times;
          </span>
          <h2>Sign Up</h2>
        </div>
        <div id="feedback" className={`feedback-message ${feedback.type}`}>
          {feedback.message}
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="role">Select Your Role</label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="">Choose your role in SchoolBridge</option>
              <option value="Teacher">Teacher</option>
              <option value="Student">Student</option>
              <option value="Parent">Parent</option>
              <option value="Admin">Admin</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="fullname">Full Name</label>
            <input
              id="fullname"
              placeholder="Enter your full name"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              placeholder="Enter a valid email address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              placeholder="Create a strong password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              id="confirm-password"
              placeholder="Re-enter your password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group checkbox-label">
            <input
              id="terms-of-service"
              name="terms-of-service"
              type="checkbox"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
              required
            />
            <label htmlFor="terms-of-service">
              I agree to the Terms of Service and Privacy Policy.
            </label>
          </div>
          <button type="submit" className="submit-btn">
            Sign Up
          </button>
        </form>
        <div className="footer">
          <p>
            Already have an account? <a href="/login">Log In</a>
          </p>
        </div>
        <div className="resize-handle"></div>
      </div>
    </div>
  );
};

export default SignUpPage;