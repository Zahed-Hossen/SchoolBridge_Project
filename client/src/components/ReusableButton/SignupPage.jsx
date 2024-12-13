import React, { useState } from "react";
import { signupUser } from "../utils/apiUtils";
import ReusableButton from "../components/ReusableButton";
import ReusableInput from "../components/ReusableInput";

const SignupPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const handleSignup = async () => {
        setError("");
        try {
            const userData = { name, email, password };
            const data = await signupUser(userData);
            setSuccess(true);
            console.log("Signup Success:", data);
        } catch (err) {
            setError(err);
        }
    };

    return (
        <div>
            <h2>Signup</h2>
            <ReusableInput
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
            />
            <ReusableInput
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
            />
            <ReusableInput
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
            />
            <ReusableButton text="Sign Up" onClick={handleSignup} variant="primary" />
            {success && <p>Signup successful! Please verify your email.</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
};

export default SignupPage;