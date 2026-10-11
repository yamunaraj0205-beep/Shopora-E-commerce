import { Link } from "react-router";
import "./terms-and-conditions.css";

function TermsAndCondition() {
  return (
    <>
      <title>TERMS & CONDITIONS</title>

      {/* HEADER */}

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
                <Link to="/products">Products</Link>
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

      {/* MAIN */}

      <main className="terms-main">
        <div className="contact-section">
          {/* HEADING */}

          <div className="head">
            <h2>TERMS & CONDITIONS</h2>

            <h3 className="welcome">Welcome to ShopEasy</h3>
          </div>

          {/* INTRODUCTION */}

          <div className="content">
            <p className="website">
              By using this website, you agree to follow the terms and
              conditions mentioned below.
            </p>
          </div>

          {/* ALL TERMS */}

          <div className="all-section">
            {/* 1. USE OF WEBSITE */}

            <section>
              <div className="first-question">
                <h3 className="first">1. Use of Website</h3>

                <ul>
                  <li className="first-point">
                    You must use this website only for lawful purposes.
                  </li>

                  <li className="first-point">
                    Do not misuse or damage the website.
                  </li>
                </ul>
              </div>
            </section>

            {/* 2. PRODUCTS & PRICES */}

            <section>
              <div className="second-question">
                <h3 className="second">2. Products & Prices</h3>

                <ul>
                  <li className="second-point">
                    Product prices may change at any time.
                  </li>

                  <li className="second-point">
                    Product images are for reference purposes.
                  </li>
                </ul>
              </div>
            </section>

            {/* 3. ORDERS */}

            <section>
              <div className="third-question">
                <h3 className="third">3. Orders</h3>

                <ul>
                  <li className="third-point">
                    You are responsible for providing correct delivery
                    information.
                  </li>

                  <li className="third-point">
                    We reserve the right to cancel an order when necessary.
                  </li>
                </ul>
              </div>
            </section>

            {/* 4. PAYMENTS */}

            <section>
              <div className="fourth-question">
                <h3 className="fourth">4. Payments</h3>

                <ul>
                  <li className="fourth-point">
                    All payments must be completed through the available payment
                    methods.
                  </li>
                </ul>
              </div>
            </section>

            {/* 5. DELIVERY */}

            <section>
              <div className="fifth-question">
                <h3 className="fifth">5. Delivery</h3>

                <ul>
                  <li className="fifth-point">
                    Delivery time may vary depending on location and other
                    circumstances.
                  </li>
                </ul>
              </div>
            </section>

            {/* 6. RETURNS & REFUNDS */}

            <section>
              <div className="sixth-question">
                <h3 className="sixth">6. Returns & Refunds</h3>

                <ul>
                  <li className="sixth-point">
                    Returns and refunds are subject to our return and refund
                    policy.
                  </li>
                </ul>
              </div>
            </section>

            {/* 7. PRIVACY */}

            <section>
              <div className="seventh-question">
                <h3 className="seventh">7. Privacy</h3>

                <ul>
                  <li className="seventh-point">
                    Your personal information will be handled according to our
                    Privacy Policy.
                  </li>
                </ul>
              </div>
            </section>

            {/* 8. CHANGES TO TERMS */}

            <section>
              <div className="eighth-question">
                <h3 className="eighth">8. Changes to Terms</h3>

                <ul>
                  <li className="eighth-point">
                    We may update these Terms & Conditions whenever necessary.
                  </li>
                </ul>
              </div>
            </section>

            {/* 9. CONTACT US */}

            <section>
              <div className="ninth-question">
                <h3 className="ninth">9. Contact Us</h3>

                <ul>
                  <li className="ninth-point">
                    If you have any questions, contact our customer support
                    team.
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* FOOTER */}

      <footer>
        <div className="footer">
          <h3 className="footer-content">
            © 2026 Shopora. All rights reserved.
          </h3>
        </div>
      </footer>
    </>
  );
}

export default TermsAndCondition;
