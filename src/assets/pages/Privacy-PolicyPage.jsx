import { Link } from "react-router";
import "./privacy-policy.css";
function PrivacyAndPolicy() {
  return (
    <>
      <title>Privacy Policy</title>
      <header className="header">
        <div className="logo">
          Shop<span>ora</span>
        </div>

        <nav className="nav">
          <Link to=".//">Home</Link>
          <Link to="/product">Products</Link>
          <Link to="/about">About</Link>
          <Link to="/contact" className="active">
            Contact
          </Link>
        </nav>
        <Link to="/login" className="login-btn">
          {" "}
          Login{" "}
        </Link>
      </header>
      <main className="privacy-container">
        <h1>Privacy Policy</h1>

        <p className="updated">Last updated: October 2026</p>

        <p>
          At Shopora, we respect your privacy and are committed to protecting
          your personal information.
        </p>

        <section>
          <h2>1. Information We Collect</h2>

          <p>We may collect the following information:</p>

          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Delivery address</li>
            <li>Order information</li>
          </ul>
        </section>

        <section>
          <h2>2. How We Use Your Information</h2>

          <p>We use your information to:</p>

          <ul>
            <li>Process your orders</li>
            <li>Provide customer support</li>
            <li>Improve our website</li>
          </ul>
        </section>

        <section>
          <h2>3. Cookies</h2>

          <p>
            We may use cookies to improve your browsing experience and remember
            your preferences.
          </p>
        </section>

        <section>
          <h2>4. Data Security</h2>

          <p>
            We take reasonable steps to protect your personal information from
            unauthorized access.
          </p>
        </section>

        <section>
          <h2>5. Your Rights</h2>

          <p>
            You can contact us if you have questions about your personal
            information or privacy.
          </p>
        </section>

        <section>
          <h2>6. Contact Us</h2>

          <p>
            If you have any questions about this Privacy Policy, contact us at:
          </p>

          <p className="email">support@shopora.com</p>
        </section>
      </main>

      <footer>
        <p>© 2026 Shopora. All rights reserved.</p>
      </footer>
    </>
  );
}
export default PrivacyAndPolicy;
