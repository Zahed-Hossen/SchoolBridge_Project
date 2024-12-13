



// import React, { useState } from 'react';
// import './Auth.css';

// const LoginPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState('');
//   const [errors, setErrors] = useState({});

//   const validateForm = () => {
//     const newErrors = {};
//     if (!email) newErrors.email = 'Email is required';
//     if (!password) newErrors.password = 'Password is required';
//     if (!role) newErrors.role = 'Role is required';
//     if (password && password.length < 6) newErrors.password = 'Password must be at least 6 characters';
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       // Submit form data
//       const response = await fetch('/api/auth/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password, role }),
//       });
//       const data = await response.json();
//       console.log(data);
//     }
//   };

//   return (
//     <div className="auth-container">
//       <div className="auth-header">
//         <h1>SchoolBridge</h1>
//         <p>Welcome Back!</p>
//       </div>
//       <form className="auth-form" onSubmit={handleSubmit}>
//         <label htmlFor="email">Email</label>
//         <input
//           type="email"
//           id="email"
//           placeholder="Enter your email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         {errors.email && <p className="error">{errors.email}</p>}

//         <label htmlFor="password">Password</label>
//         <input
//           type="password"
//           id="password"
//           placeholder="Enter your password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         {errors.password && <p className="error">{errors.password}</p>}

//         <label htmlFor="role">Role</label>
//         <select
//           id="role"
//           value={role}
//           onChange={(e) => setRole(e.target.value)}
//           required
//         >
//           <option value="" disabled>Select your role</option>
//           <option value="student">Student</option>
//           <option value="teacher">Teacher</option>
//           <option value="admin">Admin</option>
//         </select>
//         {errors.role && <p className="error">{errors.role}</p>}

//         <button type="submit" className="auth-button">Log In</button>
//       </form>
//       <div className="auth-links">
//         <a href="/forgot-password">Forgot Password?</a>
//         <p>New to SchoolBridge? <a href="/signup">Sign Up Here</a></p>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;