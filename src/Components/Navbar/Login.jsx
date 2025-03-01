import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isCheckmarkVisible, setIsCheckmarkVisible] = useState(false); // New state for checkmark
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    const { email, password } = formData;

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((user) => user.email === email.trim());

    if (!user) {
      setError("No account found with this email. Please sign up.");
      return;
    }

    if (user.password !== password) {
      setError("Incorrect password. Please try again.");
      return;
    }

    setIsLoading(true);
    setError(""); // Clear previous error

    setTimeout(() => {
      setIsLoading(false);
      setIsCheckmarkVisible(true); // Show checkmark after loader finishes

      // Store logged-in user in localStorage
      localStorage.setItem("loggedInUser", JSON.stringify(user));

      // Redirect to home page after success message display
      setTimeout(() => {
        navigate("/home");
      }, 2000); // Delay before redirect
    }, 1500); // Simulate loading delay
  };

  return (
    <div className="bodyyyy">
      {isLoading && (
        <div className="loading-animation">
          <div className="circle-loader"></div>
          <p>Logging in...</p>
        </div>
      )}

      {isCheckmarkVisible && (
        <div className="success-message">
          <div className="circle-loader load-complete">
            <div className="checkmark draw"></div>
          </div>
          <p>Successful!</p>
        </div>
      )}

      {!isLoading && !isCheckmarkVisible && (
        <div className="form-container">
          <div className="form-header">
            <i className="fas fa-user"></i>
            <h2>Welcome Back, Login Here</h2>
          </div>
          <form onSubmit={handleSubmit}>
            {/* Email Field */}
            <div className="form-group">
              <input
                type="text"
                name="email"
                placeholder="Username or Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <i className="fas fa-user"></i>
            </div>
            {/* Password Field */}
            <div className="form-group">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <i
                className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
                onClick={togglePasswordVisibility}
                style={{ cursor: "pointer" }}
              ></i>
            </div>
            {/* Error Message */}
            {error && <div className="error-message">{error}</div>}
            {/* Login Button */}
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
          <div className="form-footer">
            <span>Forgot Password?</span>
            <span>Need Help?</span>
          </div>
          <div className="register">
            Do not have an account? <Link to="/signup">Register Here</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
