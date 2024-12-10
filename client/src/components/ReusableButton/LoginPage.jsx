import React, { useState } from "react";
import { loginUser } from "../utils/apiUtils";
import ReusableButton from "../components/ReusableButton";
import ReusableInput from "../components/ReusableInput";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async () => {
        setError("");
        setIsLoading(true);
        try {
            const data = await loginUser(email, password);
            console.log("Login Success:", data); // Store token or redirect
        } catch (err) {
            setError(err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <ReusableInput
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                error={error}
            />
            <ReusableInput
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
            />
            <ReusableButton
                text="Login"
                onClick={handleLogin}
                variant="primary"
                isLoading={isLoading}
            />
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
};

export default LoginPage;