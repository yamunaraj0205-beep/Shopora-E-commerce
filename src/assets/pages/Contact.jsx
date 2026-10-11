import { useState } from "react";
import { Link } from "react-router";
import "./contact.css";

function ContactPage() {
  const [nameValue, setNameValue] = useState("");
  const [gmailValue, setGmailValue] = useState("");
  const [textValue, setTextValue] = useState("");

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    const newErrors = {};

    if (nameValue.trim() === "") {
      newErrors.name = "Please fill the name";
    }

    if (gmailValue.trim() === "") {
      newErrors.email = "Please fill the email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(gmailValue)) {
      newErrors.email = "Please enter a valid email";
    }

    if (textValue.trim() === "") {
      newErrors.message = "Please fill the message";
    }

    setErrors(newErrors);
    setSuccess(false);

    if (Object.keys(newErrors).length === 0) {
      setSuccess(true);

      setNameValue("");
      setGmailValue("");
      setTextValue("");
    }
  }

  return (
    <>
      <title>Shopora - Contact</title>

      {/* HEADER */}

      <header className="header">
        <div className="logo">
          Shop<span>ora</span>
        </div>

        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/product">Products</Link>
          <Link to="/about">About</Link>
          <Link to="/contact" className="active">
            Contact
          </Link>
        </nav>

        <Link to="/login" className="login-btn">
          Login
        </Link>
      </header>

      {/* CONTACT HERO */}

      <section className="contact-hero">
        <p>GET IN TOUCH</p>

        <h1>We're Here to Help</h1>

        <span>
          Have a question or need help? Send us a message and we'll get back to
          you.
        </span>
      </section>

      {/* CONTACT SECTION */}

      <section className="contact-section">
        {/* CONTACT INFORMATION */}

        <div className="contact-info">
          <p className="section-small">CONTACT US</p>

          <h2>Let's Talk</h2>

          <p className="info-description">
            If you have any questions about our products, orders or shopping
            experience, feel free to contact us.
          </p>

          <div className="info-item">
            <div className="info-icon">
              <i className="fa-solid fa-envelope"></i>
            </div>

            <div>
              <h3>Email</h3>
              <p>support@shopora.com</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">
              <i className="fa-solid fa-phone"></i>
            </div>

            <div>
              <h3>Phone</h3>
              <p>+91 98765 43210</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">
              <i className="fa-solid fa-clock"></i>
            </div>

            <div>
              <h3>Support Hours</h3>
              <p>Monday - Saturday</p>
              <p>9:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>

        {/* CONTACT FORM */}

        <div className="contact-form">
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>

              <input
                type="text"
                id="name"
                className="name-input"
                placeholder="Enter your name"
                value={nameValue}
                onChange={(event) => {
                  setNameValue(event.target.value);
                  setErrors((previous) => ({
                    ...previous,
                    name: "",
                  }));
                  setSuccess(false);
                }}
                style={{
                  border: errors.name ? "1px solid red" : undefined,
                }}
              />

              <p className="result">{errors.name}</p>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>

              <input
                type="email"
                id="email"
                className="email-input"
                placeholder="Enter your email"
                value={gmailValue}
                onChange={(event) => {
                  setGmailValue(event.target.value);
                  setErrors((previous) => ({
                    ...previous,
                    email: "",
                  }));
                  setSuccess(false);
                }}
                style={{
                  border: errors.email ? "1px solid red" : undefined,
                }}
              />

              <p className="result-email">{errors.email}</p>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>

              <textarea
                id="message"
                rows={6}
                placeholder="Write your message..."
                className="message-input"
                value={textValue}
                onChange={(event) => {
                  setTextValue(event.target.value);
                  setErrors((previous) => ({
                    ...previous,
                    message: "",
                  }));
                  setSuccess(false);
                }}
                style={{
                  border: errors.message ? "1px solid red" : undefined,
                }}
              ></textarea>

              <p className="result-message">{errors.message}</p>
            </div>

            <button type="submit" className="send-btn js-send-btn">
              Send Message
              <i className="fa-solid fa-paper-plane"></i>
            </button>

            {success && (
              <p className="result" style={{ color: "green" }} role="status">
                Message sent successfully!
              </p>
            )}
          </form>
        </div>
      </section>

      {/* FAQ */}

      <section className="faq-section">
        <p className="section-small">NEED HELP?</p>

        <h2>Frequently Asked Questions</h2>

        <div className="faq-container">
          <div className="faq">
            <h3>How can I track my order?</h3>

            <p>
              You can check your order details from your order page after
              completing your purchase.
            </p>
          </div>

          <div className="faq">
            <h3>Can I return a product?</h3>

            <p>
              Please check our return policy for information about eligible
              products and returns.
            </p>
          </div>

          <div className="faq">
            <h3>How can I contact support?</h3>

            <p>You can send us a message using the contact form above.</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <h2 className="shop-name-contact-page">
              Shop<span>ora</span>
            </h2>

            <p>Better products. Happier you.</p>
          </div>

          <div className="footer-column">
            <h3>Quick Links</h3>

            <Link to="/">Home</Link>
            <Link to="/product">Products</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="footer-column">
            <h3>Policies</h3>

            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms and conditions">Terms &amp; Conditions</Link>
            <Link to="/returns-and-refunds">Returns &amp; Refunds</Link>
          </div>

          <div className="footer-column">
            <h3>Follow Us</h3>

            <div className="social-icons">
              <Link to="#" aria-label="Instagram">
                <i className="fa-brands fa-instagram"></i>
              </Link>

              <Link to="#" aria-label="Facebook">
                <i className="fa-brands fa-facebook"></i>
              </Link>

              <Link to="#" aria-label="YouTube">
                <i className="fa-brands fa-youtube"></i>
              </Link>

              <Link to="#" aria-label="X">
                <i className="fa-brands fa-x-twitter"></i>
              </Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          © 2026 Shopora. All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default ContactPage;
