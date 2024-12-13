import React from "react";
import PropTypes from "prop-types";
import "./ReusableInput.css"; // Add custom styles for input fields

const ReusableInput = ({ 
    label, 
    type = "text", 
    value, 
    onChange, 
    placeholder, 
    error 
}) => {
    return (
        <div className="form-group">
            {label && <label>{label}</label>}
            <input 
                type={type} 
                value={value} 
                onChange={onChange} 
                placeholder={placeholder} 
                className={error ? "input-error" : ""}
            />
            {error && <p className="error-message">{error}</p>}
        </div>
    );
};

ReusableInput.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    error: PropTypes.string,
};

export default ReusableInput;