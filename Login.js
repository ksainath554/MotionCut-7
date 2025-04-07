// // import axios from "axios";
// // import React, { useState } from "react";
// // import { Link, useNavigate } from "react-router-dom";
// // import { toast } from "react-toastify";

// // const Login = () => {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [errors, setErrors] = useState({});
// //   const navigate=useNavigate();

// //   // Validation function for email and password
// //   const validateForm = () => {
// //     const errors = {};
// //     if (!email) {
// //       errors.email = "Email is required";
// //     } else if (!/\S+@\S+\.\S+/.test(email)) {
// //       errors.email = "Please enter a valid email address";
// //     }
// //     if (!password) {
// //       errors.password = "Password is required";
// //     }
// //     return errors;
// //   };

// //   // Handle form submission
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     // Validate form fields
// //     // const validationErrors = validateForm();
// //     // if (Object.keys(validationErrors).length > 0) {
// //     //   setErrors(validationErrors);
// //     //   return;
// //     // }

// //     try {
// //       // Make API request to login
// //       const response = await axios.post("http://localhost:3000/api/auth/login", {
// //         email,
// //         password,
// //       });

// //       if (response.data.success) {
// //         console.log(response);
        
// //         toast.success("Login successful!");
// //         // Redirect or save token as needed
// //         const token = response.data.token;
// //         console.log(token);
        
// //         sessionStorage.setItem("authToken", token);
// //         navigate('/homeScreen')
// //         fetchUserDetails();
// //       } else {
// //         toast.error(response.data.message || "Login failed");
// //       }
// //     } catch (error) {
// //       console.error("Error during login:", error);
// //       toast.error(error.response.data.message || "Something went wrong. Please try again later.");
// //     }
// //   };

 

// //   // useEffect(() => {
    
// //   // }, []);
// //   const fetchUserDetails = async () => {
// //     try {
// //       // Retrieve token from localStorage or other secure storage
// //       const token = sessionStorage.getItem('authToken'); // Replace with actual token retrieval
// //       console.log(token);
      
// //       if (!token) {
// //         // setError('User is not logged in');
// //         return;
// //       }

// //       // Make the API request with the token in the Authorization header
// //       const response = await axios.get('http://localhost:3000/api/auth/get-userDetails', {
// //         headers: {
// //           Authorization: `Bearer ${token}`
// //         }
// //       });

// //       console.log(response);
      
// //       if (response.data.success) {
// //         console.log(response.data.user);
// //       } else {
// //         console.log(response.data.message || 'Failed to fetch user details');
// //       }
// //     } catch (err) {
// //       console.error('Error fetching user details:', err);
// //       console.log(err.response?.data?.message || 'An error occurred');
// //     }
// //   };

// //   // fetchUserDetails();

// //   return (
// //     <div className="login-container">
// //       <h2>Login</h2>
// //       <form onSubmit={handleSubmit}>
// //         <div className="form-group">
// //           <label>Email</label>
// //           <input
// //             type="email"
// //             name="email"
// //             placeholder="Enter your email"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //           />
// //           {errors.email && <span className="error-message">{errors.email}</span>}
// //         </div>
// //         <div className="form-group">
// //           <label>Password</label>
// //           <input
// //             type="password"
// //             name="password"
// //             placeholder="Enter your password"
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //           />
// //           {errors.password && <span className="error-message">{errors.password}</span>}
// //         </div>
// //         <button type="submit" className="login-btn">
// //           Login
// //         </button>
// //       </form>
      
// //       <p style={{ textAlign: "center" }}>
// //         Don't have an account?{" "}
// //         <Link
// //           to="/signUp"
// //           className="toggle-link"
// //           style={{ color: "#007BFF", textDecoration: "underline" }}
// //         >
// //           Sign Up
// //         </Link>
// //       </p>
// //     </div>
// //   );
// // };

// // export default Login;
// // import axios from "axios";
// // import React, { useState } from "react";
// // import { Link, useNavigate } from "react-router-dom";
// // import { toast } from "react-toastify";
// // import "./login.css"; // Import CSS

// // const Login = () => {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [errors, setErrors] = useState({});
// //   const navigate = useNavigate();

// //   // Function to fetch user details after login
// //   const fetchUserDetails = async () => {
// //     try {
// //       const token = sessionStorage.getItem("authToken");
// //       if (!token) return;

// //       const response = await axios.get("http://localhost:3000/api/auth/get-userDetails", {
// //         headers: { Authorization: `Bearer ${token}` },
// //       });

// //       if (response.data.success) {
// //         console.log("User Details:", response.data.user);
// //       } else {
// //         console.log(response.data.message || "Failed to fetch user details");
// //       }
// //     } catch (err) {
// //       console.error("Error fetching user details:", err);
// //     }
// //   };

// //   // Handle form submission
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     try {
// //       const response = await axios.post("http://localhost:3000/api/auth/login", {
// //         email,
// //         password,
// //       });

// //       if (response.data.success) {
// //         toast.success("Login successful!");
// //         sessionStorage.setItem("authToken", response.data.token);
// //         fetchUserDetails();
// //         navigate("/homeScreen");
// //       } else {
// //         toast.error(response.data.message || "Login failed");
// //       }
// //     } catch (error) {
// //       toast.error(error.response?.data?.message || "Something went wrong.");
// //     }
// //   };

// //   return (
// //     <div className="login-page-container">
// //       {/* Left Side Image */}
// //       <div className="auth-image">
// //         <img src="/loginlogo.jpg" alt="Signup Illustration" />
// //       </div>

// //       {/* Right Side Form */}
// //       <div className="login-form-container">
// //         <h2>Login</h2>
// //         <form onSubmit={handleSubmit}>
// //           <div className="form-group">
// //             <label>Email</label>
// //             <input
// //               type="email"
// //               placeholder="Enter your email"
// //               value={email}
// //               onChange={(e) => setEmail(e.target.value)}
// //             />
// //           </div>
// //           <div className="form-group">
// //             <label>Password</label>
// //             <input
// //               type="password"
// //               placeholder="Enter your password"
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //             />
// //           </div>
// //           <button type="submit" className="login-btn">Login</button>
// //         </form>

// //         <p>
// //           Don't have an account?{" "}
// //           <Link to="/signUp" className="toggle-link">Sign Up</Link>
// //         </p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Login;

// import axios from "axios";
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import "./login.css"; // Import CSS

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   // Fetch user details
//   const fetchUserDetails = async () => {
//     try {
//       const token = sessionStorage.getItem("authToken");
//       if (!token) return;

//       const response = await axios.get("http://localhost:3000/api/auth/get-userDetails", {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       if (response.data.success) {
//         console.log("User Details:", response.data.user);
//       } else {
//         console.log(response.data.message || "Failed to fetch user details");
//       }
//     } catch (err) {
//       console.error("Error fetching user details:", err);
//     }
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post("http://localhost:3000/api/auth/login", {
//         email,
//         password,
//       });

//       if (response.data.success) {
//         toast.success("Login successful!");
//         sessionStorage.setItem("authToken", response.data.token);
//         sessionStorage.setItem("KeepLoggedIn",JSON.stringify(true))
//         fetchUserDetails();
//         navigate("/IpoListings");
//       } else {
//         toast.error(response.data.message || "Login failed");
//       }
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Something went wrong.");
//     }
//   };

//   return (
//     <div className="login-container">
//       {/* Left Side Image */}
//       <div className="login-left">
//         <img src="/loginlogo.jpg" alt="Login Illustration" />
//       </div>

//       {/* Right Side Login Form */}
//       <div className="login-right">
//         <div className="login-form">
//           <h2>Login</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="form-group">
//               <label>Email</label>
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>
//             <div className="form-group">
//               <label>Password</label>
//               <input
//                 type="password"
//                 placeholder="Enter your password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </div>
//             <button type="submit" className="login-btn">Login</button>
//           </form>
//           <p>
//             Don't have an account?{" "}
//             <Link to="/signUp" className="toggle-link">Sign Up</Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./login.css"; // Import CSS

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Fetch user details
  const fetchUserDetails = async () => {
    try {
      const token = sessionStorage.getItem("authToken");
      if (!token) return;

      const response = await axios.get("http://localhost:3000/api/auth/get-userDetails", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.data.success) {
        console.log("User Details:", response.data.user);
      } else {
        console.log(response.data.message || "Failed to fetch user details");
      }
    } catch (err) {
      console.error("Error fetching user details:", err);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/api/auth/login", {
        email,
        password,
      });

      if (response.data.success) {
        toast.success("Login successful!");
        sessionStorage.setItem("authToken", response.data.token);
        sessionStorage.setItem("KeepLoggedIn", JSON.stringify(true)); // Store login state
        fetchUserDetails();
        navigate("/ipo-listings"); // Corrected route
      } else {
        toast.error(response.data.message || "Login failed");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong.");
    }
  };

  return (
    <div className="login-container">
      {/* Left Side Image */}
      <div className="login-left">
        <img src="/loginlogo.jpg" alt="Login Illustration" />
      </div>

      {/* Right Side Login Form */}
      <div className="login-right">
        <div className="login-form">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="login-btn">Login</button>
          </form>
          <p>
            Don't have an account?{" "}
            <Link to="/signUp" className="toggle-link">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

