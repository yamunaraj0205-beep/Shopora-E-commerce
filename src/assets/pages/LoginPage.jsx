import { useState } from "react";
import { Link, useNavigate } from "react-router";
import "./login.css";

function Login() {
  const [emailAddressValue, setEmailAddressValue] = useState("");
  const [passWordValue, setPassWordValue] = useState("");
  const [result, setResult] = useState("");
  const [resultColor, setResultColor] = useState("red");

  const navigate = useNavigate();

  function handleLogin(event) {
    event.preventDefault();

    const savedDetails = localStorage.getItem("userDetails");

    if (!savedDetails) {
      setResult("Account not found. Please create an account.");
      setResultColor("red");
      return;
    }

    let userDetails;

    try {
      userDetails = JSON.parse(savedDetails);
    } catch {
      setResult("Saved account details are invalid.");
      setResultColor("red");
      return;
    }

    if (
      userDetails &&
      userDetails.email === emailAddressValue.trim() &&
      userDetails.password === passWordValue
    ) {
      setResult("Login Successful!");
      setResultColor("green");

      setTimeout(() => {
        navigate("/");
      }, 1000);
    } else {
      setResult("Password or email incorrect");
      setResultColor("red");
    }
  }

  function handleForgotPassword(event) {
    event.preventDefault();

    setResult(
      "Password reset is not connected yet. Please create a reset feature.",
    );
    setResultColor("green");
  }

  return (
    <>
      <title>Login - Shopora</title>

      <div className="login-container">
        <div className="login-box">
          {/* Logo */}

          <div className="logo">Shopora</div>

          <h1>Welcome Back</h1>

          <p className="login-text">Login to continue shopping</p>

          <form onSubmit={handleLogin}>
            {/* Email */}

            <div className="input-group">
              <label htmlFor="email">Email Address</label>

              <input
                type="email"
                id="email"
                className="email-input"
                placeholder="Enter your email"
                value={emailAddressValue}
                onChange={(event) => setEmailAddressValue(event.target.value)}
                required
              />
            </div>

            {/* Password */}

            <div className="input-group">
              <label htmlFor="password">Password</label>

              <input
                type="password"
                id="password"
                className="password-input"
                placeholder="Enter your password"
                value={passWordValue}
                onChange={(event) => setPassWordValue(event.target.value)}
                required
              />
            </div>

            {/* Remember + Forgot */}

            <div className="login-options">
              <label className="remember">
                <input type="checkbox" />
                Remember me
              </label>

              <Link
                to="#"
                className="forget-pass"
                onClick={handleForgotPassword}
              >
                Forgot password?
              </Link>
            </div>

            {/* Login Button */}

            <button type="submit" className="login-button js-login-button">
              Login
            </button>

            <p className="result" style={{ color: resultColor }} role="status">
              {result}
            </p>
          </form>

          {/* Create Account */}

          <p className="create-account">
            Don't have an account? <Link to="/sigup">Create account</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
