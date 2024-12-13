import React from "react";
import PropTypes from "prop-types";
import "./ReusableButton.css"; // Add styles for different button variants

const ReusableButton = ({ 
    text, 
    onClick, 
    variant = "primary", 
    disabled = false, 
    isLoading = false 
}) => {
    return (
        <button 
            className={`reusable-button ${variant}`} 
            onClick={onClick} 
            disabled={disabled || isLoading}
        >
            {isLoading ? "Loading..." : text}
        </button>
    );
};

ReusableButton.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    variant: PropTypes.oneOf(["primary", "secondary", "danger"]), // Variants for styling
    disabled: PropTypes.bool,
    isLoading: PropTypes.bool,
};

export default ReusableButton;