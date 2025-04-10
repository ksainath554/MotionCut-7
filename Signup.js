// import axios from "axios";
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { toast } from "react-toastify";
// import UserModel from "../model/userModel.js";

// const SignUp = () => {
//   const [formValues, setFormValues] = useState(new UserModel({}));

//   const [formErrors, setFormErrors] = useState({});

//   const validateForm = () => {
//     const errors = {};

//     if (!formValues.username) {
//       errors.username = "Username is required";
//     } else if (!/^[A-Za-z0-9_]{3,15}$/.test(formValues.username)) {
//       errors.username =
//         "Username should be 3-15 characters long and can only contain letters, numbers, and underscores.';";
//     }

//     if(!formValues.email){
// errors.email="Email is required"
//     }else if(!/\S+@\S+\.\S+/.test(formValues.email)){
//       errors.email="Please enter a valid email address"
//     }
//     if (!formValues.mobile) {
//       errors.mobile = 'Mobile number is required';
//     } else if (!/^\d{10}$/.test(formValues.mobile)) {
//       errors.mobile = 'Mobile number should be 10 digits';
//     }

//     if (!formValues.password) {
//       errors.password = 'Password is required';
//     }
// return errors;

//   };


//   const handleSubmit=async (e)=>{
//     e.preventDefault();
//     console.log(formValues);
    
//     const errors=validateForm();
//     console.log(errors);
//     if(Object.keys(errors).length===0){
//       // alert("Form submitted")
//     }else{
//       // alert("Form Submission Failed");
//       setFormErrors(errors);
//     }
//     try {
//       const response = await axios.post("http://localhost:3000/api/auth/register-user", formValues);
//       console.log(response, 'res');

//       if (response.data.success) {
//           toast.success(response.data.message || 'Registration successful!');
//           setFormValues({username:"",email:"",mobile:"",password:""});
//           setFormErrors("");
//       } else {
//           toast.error(response.data.message || 'Registration failed!');
//       }
//   } catch (error) {
//       console.error('Error during registration:', error);
//       toast.error(error.response.data.message || "Something went wrong. Please try again later.");
//   }
    
    

//   }

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormValues({ ...formValues, [name]: value });
    
//   };
//   return (
//     <div className="login-container">
//       <h2>Sign Up</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Username</label>
//           <input
//             type="text"
//             placeholder="Enter your username"
//             name="username"
//             value={formValues.username}
//             onChange={handleInputChange}
           
//           />
//          {formErrors.username?<span className="error-message">{formErrors.username}</span>:''} 
//         </div>
//         <div className="form-group">
//           <label>Email</label>
//           <input
//             type="email"
//             name="email"
//             placeholder="Enter your email"
//             value={formValues.email}
//             onChange={handleInputChange}
//           />
//           {formErrors.email?<span className="error-message">{formErrors.email}</span>:''} 
//         </div>
//         <div className="form-group">
//           <label>Mobile No</label>
//           <input
//             type="tel"
//             name="mobile"
//             placeholder="Enter your mobile number"
//             value={formValues.mobile}
//             onChange={handleInputChange}
//           />
//           {formErrors.mobile?<span className="error-message">{formErrors.mobile}</span>:''} 
//         </div>
//         <div className="form-group">
//           <label>Password</label>
//           <input
//             type="password"
//             name="password"
//             placeholder="Enter your password"
//             value={formValues.password}
//             onChange={handleInputChange}
//           />
//           {formErrors.password?<span className="error-message">{formErrors.password}</span>:''} 
//         </div>
//         <button type="submit" className="login-btn">
//           Sign Up
//         </button>
//       </form>
//       <p style={{ textAlign: "center" }}>
//         Already have an account?{" "}
//         <Link
//           to="/login"
//           className="toggle-link"
//           style={{ color: "#007BFF", textDecoration: "underline" }}
//         >
//           Login
//         </Link>
//       </p>
//     </div>
//   );
// };

// export default SignUp;
// import axios from "axios";
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { toast } from "react-toastify";
// import UserModel from "../model/userModel.js";
// import "./auth.css"; 
//  // Importing CSS for styling

// const SignUp = () => {
//   const [formValues, setFormValues] = useState(new UserModel({}));
//   const [formErrors, setFormErrors] = useState({});

//   const validateForm = () => {
//     const errors = {};

//     if (!formValues.username) {
//       errors.username = "Username is required";
//     } else if (!/^[A-Za-z0-9_]{3,15}$/.test(formValues.username)) {
//       errors.username = "Username should be 3-15 characters long and can only contain letters, numbers, and underscores.";
//     }

//     if (!formValues.email) {
//       errors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
//       errors.email = "Please enter a valid email address";
//     }

//     if (!formValues.mobile) {
//       errors.mobile = "Mobile number is required";
//     } else if (!/^\d{10}$/.test(formValues.mobile)) {
//       errors.mobile = "Mobile number should be 10 digits";
//     }

//     if (!formValues.password) {
//       errors.password = "Password is required";
//     }
    
//     return errors;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const errors = validateForm();
//     setFormErrors(errors);

//     if (Object.keys(errors).length === 0) {
//       try {
//         const response = await axios.post("http://localhost:3000/api/auth/register-user", formValues);
        
//         if (response.data.success) {
//           toast.success(response.data.message || "Registration successful!");
//           setFormValues({ username: "", email: "", mobile: "", password: "" });
//           setFormErrors({});
//         } else {
//           toast.error(response.data.message || "Registration failed!");
//         }
//       } catch (error) {
//         toast.error(error.response?.data?.message || "Something went wrong. Please try again later.");
//       }
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormValues({ ...formValues, [name]: value });
//   };

//   return (
//     <div className="auth-container">
//       {/* Left Side - Image */}
//       <div className="auth-image">
//         <img src="/loginlogo.jpg" alt="Signup Illustration" />
//       </div>

//       {/* Right Side - Signup Form */}
//       <div className="auth-form">
//         <h2>Sign Up</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label>Username</label>
//             <input type="text" name="username" placeholder="Enter your username" value={formValues.username} onChange={handleInputChange} />
//             {formErrors.username && <span className="error-message">{formErrors.username}</span>}
//           </div>

//           <div className="form-group">
//             <label>firstname</label>
//             <input type="tel" name="mobile" placeholder="Enter your firstname" value={formValues.mobile} onChange={handleInputChange} />
//             {formErrors.mobile && <span className="error-message">{formErrors.mobile}</span>}
//           </div>

//           <div className="form-group">
//             <label>lastname</label>
//             <input type="tel" name="mobile" placeholder="Enter your lastname" value={formValues.mobile} onChange={handleInputChange} />
//             {formErrors.mobile && <span className="error-message">{formErrors.mobile}</span>}
//           </div>

//           <div className="form-group">
//             <label>Email</label>
//             <input type="email" name="email" placeholder="Enter your email" value={formValues.email} onChange={handleInputChange} />
//             {formErrors.email && <span className="error-message">{formErrors.email}</span>}
//           </div>

//           <div className="form-group">
//             <label>Password</label>
//             <input type="password" name="password" placeholder="Enter your password" value={formValues.password} onChange={handleInputChange} />
//             {formErrors.password && <span className="error-message">{formErrors.password}</span>}
//           </div>

//           <button type="submit" className="signup-btn">Sign Up</button>
//         </form>

//         <p>
//           Already have an account?{" "}
//           <Link to="/login" className="toggle-link">Login</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SignUp;

import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./auth.css"; // Importing CSS for styling

const SignUp = () => {
  const [formValues, setFormValues] = useState({
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    if (!formValues.username) {
      errors.username = "Username is required";
    } else if (!/^[A-Za-z0-9_]{3,15}$/.test(formValues.username)) {
      errors.username = "Username should be 3-15 characters long and can only contain letters, numbers, and underscores.";
    }

    if (!formValues.firstname) {
      errors.firstname = "First name is required";
    }

    if (!formValues.lastname) {
      errors.lastname = "Last name is required";
    }

    if (!formValues.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!formValues.password) {
      errors.password = "Password is required";
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      try {
        const response = await axios.post("http://localhost:3000/api/auth/register-user", formValues);
        
        if (response.data.success) {
          toast.success(response.data.message || "Registration successful!");
          setFormValues({ username: "", firstname: "", lastname: "", email: "", password: "" });
          setFormErrors({});
        } else {
          toast.error(response.data.message || "Registration failed!");
        }
      } catch (error) {
        toast.error(error.response?.data?.message || "Something went wrong. Please try again later.");
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <div className="auth-container">
      {/* Left Side - Image */}
      <div className="auth-image">
        <img src="/loginlogo.jpg" alt="Signup Illustration" />
      </div>

      {/* Right Side - Signup Form */}
      <div className="auth-form">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input type="text" name="username" placeholder="Enter your username" value={formValues.username} onChange={handleInputChange} />
            {formErrors.username && <span className="error-message">{formErrors.username}</span>}
          </div>

          <div className="form-group">
            <label>First Name</label>
            <input type="text" name="firstname" placeholder="Enter your first name" value={formValues.firstname} onChange={handleInputChange} />
            {formErrors.firstname && <span className="error-message">{formErrors.firstname}</span>}
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input type="text" name="lastname" placeholder="Enter your last name" value={formValues.lastname} onChange={handleInputChange} />
            {formErrors.lastname && <span className="error-message">{formErrors.lastname}</span>}
          </div>
          
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" placeholder="Enter your email" value={formValues.email} onChange={handleInputChange} />
            {formErrors.email && <span className="error-message">{formErrors.email}</span>}
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" name="password" placeholder="Enter your password" value={formValues.password} onChange={handleInputChange} />
            {formErrors.password && <span className="error-message">{formErrors.password}</span>}
          </div>

          <button type="submit" className="signup-btn">Sign Up</button>
        </form>

        <p>
          Already have an account?{" "}
          <Link to="/login" className="toggle-link">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;

