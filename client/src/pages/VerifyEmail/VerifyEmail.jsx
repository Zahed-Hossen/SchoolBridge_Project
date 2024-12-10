// import React, { useEffect, useState } from "react";

// const VerifyEmail = () => {
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     const urlParams = new URLSearchParams(window.location.search);
//     const token = urlParams.get("token");

//     if (token) {
//       fetch(`http://localhost:5000/api/auth/verify-email?token=${token}`)
//         .then((response) => response.json())
//         .then((data) => {
//           if (data.error) {
//             setMessage(data.message);
//           } else {
//             setMessage("Email verified successfully! You can now log in.");
//           }
//         })
//         .catch(() => {
//           setMessage("An error occurred. Please try again later.");
//         });
//     } else {
//       setMessage("Invalid verification link.");
//     }
//   }, []);

//   return (
//     <div className="verification-message">
//       <h1>{message}</h1>
//     </div>
//   );
// };

// export default VerifyEmail;