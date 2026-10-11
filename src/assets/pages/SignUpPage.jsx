import { useState } from "react";
import { Link } from "react-router";
import "./signup.css";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState({});
  const [result, setResult] = useState("");

  function createAccount() {
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Please enter your name";
    }

    if (!email.trim()) {
      newErrors.email = "Please enter your email";
    }

    if (!password) {
      newErrors.password = "Please enter your password";
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    setResult("");

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    const userDetails = {
      name: name.trim(),
      email: email.trim(),
      password: password,
    };

    localStorage.setItem("userDetails", JSON.stringify(userDetails));

    setResult("Account created successfully!");

    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  }

  return (
    <>
      <title>Create Account</title>

      <div className="signup-container">
        <div className="signup-box">
          <div className="logo">Shopora</div>

          <h1>Create Account</h1>

          <p className="signup-text">Create your account to start shopping</p>

          <div className="input-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              className="name-input"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                border: errors.name ? "1px solid red" : undefined,
              }}
            />
            {errors.name && <p className="name-alert">{errors.name}</p>}
          </div>

          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              className="email-input"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                border: errors.email ? "1px solid red" : undefined,
              }}
            />
            {errors.email && <p className="email-alert">{errors.email}</p>}
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="password-input"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                border: errors.password ? "1px solid red" : undefined,
              }}
            />
            {errors.password && (
              <p className="passwrd-alert">{errors.password}</p>
            )}
          </div>

          <div className="input-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              className="confirm-pass"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={{
                border: errors.confirmPassword ? "1px solid red" : undefined,
              }}
            />
            {errors.confirmPassword && (
              <p className="confirm-pass-alert">{errors.confirmPassword}</p>
            )}
          </div>

          <button
            type="button"
            className="signup-button js-signup-button"
            onClick={createAccount}
          >
            Create Account
          </button>

          {result && (
            <p className="result" style={{ color: "green" }} role="status">
              {result}
            </p>
          )}

          <p className="login-link">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default SignUp;
