import { Link } from "react-router";
import "./AboutPage.css";
function AboutPage() {
  return (
    <>
      <title>About</title>

      {/* HEADER */}

      <header className="header">
        <div className="logo">
          Shop<span>ora</span>
        </div>

        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/product">Products</Link>
          <Link to="/about" className="active">
            About
          </Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <Link to="/login" className="login-btn">
          Login
        </Link>
      </header>

      {/* ABOUT HERO */}

      <section className="about-hero">
        <div className="about-content">
          <p className="small-title">WELCOME TO SHOPORA</p>

          <h1>
            Shopping Made
            <span> Simple.</span>
          </h1>

          <p>
            Shopora is a simple and user-friendly e-commerce website designed to
            make online shopping easy, convenient and enjoyable.
          </p>
        </div>
      </section>

      {/* ABOUT SHOPORA */}

      <section className="about-section">
        <div className="about-text">
          <p className="section-small">ABOUT SHOPORA</p>

          <h2>
            Everything You Need,
            <br />
            All in One Place
          </h2>

          <p>
            Shopora brings a variety of products together in one convenient
            online shopping platform. Users can browse products, explore
            categories, search for items and add products to their cart.
          </p>

          <p>
            The website focuses on providing a clean interface and a simple
            shopping experience from product discovery to checkout.
          </p>
        </div>

        <div className="about-card">
          <div className="about-icon">
            <i className="fa-solid fa-bag-shopping"></i>
          </div>

          <h3>Simple Shopping</h3>

          <p>
            Browse products, add them to your cart and complete your order with
            ease.
          </p>
        </div>
      </section>

      {/* WHY SHOPORA */}

      <section className="why-section">
        <div className="section-heading">
          <p className="section-small">WHY SHOPORA</p>

          <h2>Designed For Easy Shopping</h2>
        </div>

        <div className="features">
          <div className="feature">
            <i className="fa-solid fa-magnifying-glass"></i>

            <h3>Easy Discovery</h3>

            <p>Find products quickly using search and category options.</p>
          </div>

          <div className="feature">
            <i className="fa-solid fa-cart-shopping"></i>

            <h3>Easy Cart</h3>

            <p>
              Add products to your cart and manage your selected items easily.
            </p>
          </div>

          <div className="feature">
            <i className="fa-solid fa-credit-card"></i>

            <h3>Simple Checkout</h3>

            <p>
              Complete your order through a straightforward checkout process.
            </p>
          </div>

          <div className="feature">
            <i className="fa-solid fa-mobile-screen-button"></i>

            <h3>Responsive Design</h3>

            <p>
              Designed to provide a smooth experience across different screen
              sizes.
            </p>
          </div>
        </div>
      </section>

      {/* GOAL */}

      <section className="goal-section">
        <div className="goal-content">
          <i className="fa-solid fa-bullseye"></i>

          <p className="section-small">OUR GOAL</p>

          <h2>Making Online Shopping Easier</h2>

          <p>
            Our goal is to create a clean, simple and convenient shopping
            experience where users can easily discover products and complete
            their purchases.
          </p>

          <Link to="/product" className="shop-btn">
            Start Shopping
            <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </section>

      {/* FOOTER */}

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <h2 className="shop-name-about-page">
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
            <Link to="/terms and conditions">Terms & Conditions</Link>
            <Link to="/returns-and-refunds">Returns & Refunds</Link>
          </div>

          <div className="footer-column">
            <h3>Follow Us</h3>

            <div className="social-icons">
              <a href="#" aria-label="Instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>

              <a href="#" aria-label="Facebook">
                <i className="fa-brands fa-facebook"></i>
              </a>

              <a href="#" aria-label="YouTube">
                <i className="fa-brands fa-youtube"></i>
              </a>

              <a href="#" aria-label="X">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
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

export default AboutPage;
