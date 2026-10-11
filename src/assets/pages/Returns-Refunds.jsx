import { Link } from "react-router";
import "./returne-and-refunds.css";
function ReturnsAndRefunds() {
  return (
    <>
      <title>Return & Refund Policy</title>
      <header>
        <div className="shop">
          <div className="shop-name">
            <span className="logo">shop</span>
            <span className="logo-two">ora</span>
          </div>

          <nav>
            <ol>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/product">Product</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ol>
          </nav>

          <div className="login">
            <button className="login-btn">
              <Link to="/login">Login</Link>
            </button>
          </div>
        </div>
      </header>

      <main>
        <div className="head">
          <h2>RETURN & REFUND POLICY</h2>
          <h3 className="welcome">Welcome to Shopora</h3>
        </div>

        <div className="content">
          <p>
            We want you to have a good shopping experience. If you are not
            satisfied with your order, you can request a return or refund
            according to the policy below.
          </p>
        </div>

        <div className="all-section">
          <section className="policy-section">
            <h3>1. Return Eligibility</h3>

            <ul>
              <li>The product must be unused and in its original condition.</li>
              <li>
                The product should be returned with its original packaging.
              </li>
              <li>
                Return requests must be made within 7 days of receiving the
                product.
              </li>
            </ul>
          </section>

          <section className="policy-section">
            <h3>2. Non-Returnable Products</h3>

            <ul>
              <li>Used or damaged products may not be accepted.</li>
              <li>
                Products without original packaging may not be eligible for
                return.
              </li>
            </ul>
          </section>

          <section className="policy-section">
            <h3>3. How to Request a Return</h3>

            <ul>
              <li>Contact our customer support team.</li>
              <li>Provide your order number and reason for return.</li>
              <li>Our team will review your request.</li>
            </ul>
          </section>

          <section className="policy-section">
            <h3>4. Refunds</h3>

            <ul>
              <li>
                Refunds will be processed after the returned product is received
                and checked.
              </li>
              <li>The refund amount will depend on the approved return.</li>
            </ul>
          </section>

          <section className="policy-section">
            <h3>5. Refund Processing Time</h3>

            <ul>
              <li>
                Approved refunds may take a few business days to reach your
                account.
              </li>
              <li>Processing time may vary depending on the payment method.</li>
            </ul>
          </section>

          <section className="policy-section">
            <h3>6. Damaged or Wrong Product</h3>

            <ul>
              <li>
                If you receive a damaged or incorrect product, contact us as
                soon as possible.
              </li>
              <li>
                We may ask for photos or other details to verify the issue.
              </li>
            </ul>
          </section>

          <section className="policy-section">
            <h3>7. Contact Us</h3>

            <ul>
              <li>
                If you have any questions about returns or refunds, contact our
                customer support team.
              </li>
            </ul>
          </section>
        </div>
      </main>

      <footer>
        <h3>© 2026 Shopora. All rights reserved.</h3>
      </footer>
    </>
  );
}
export default ReturnsAndRefunds;
