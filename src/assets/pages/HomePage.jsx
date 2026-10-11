import { useState } from "react";
import { Link } from "react-router";
import { products } from "../product.js";
import "./HomePage.css";

function HomePage() {
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = JSON.parse(localStorage.getItem("cart")) || [];

      return savedCart.map((item) => ({
        ...item,
        quantity: item.quantity ?? 1,
      }));
    } catch {
      return [];
    }
  });

  const cartCount = cart.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  function addToCart(product) {
    const updatedCart = [...cart];

    const existingItem = updatedCart.find(
      (item) => item.product.id === product.id,
    );

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      updatedCart.push({
        product: product,
        quantity: 1,
      });
    }

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }

  const homeProducts = products.slice(0, 4);

  return (
    <>
      <title>Shopora - Home</title>

      <div className="home-container">
        <header className="header">
          <div className="logo">
            Shop<span>ora</span>
          </div>

          <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="/product">Products</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>

          <div className="header-right">
            <Link to="/cart" className="cart">
              <i className="fa-solid fa-cart-shopping"></i>
              <span className="cart-count">{cartCount}</span>
            </Link>

            <Link to="/login" className="login-btn">
              Login
            </Link>
          </div>
        </header>

        <section className="hero">
          <div className="hero-content">
            <p className="hero-small">TRENDY • QUALITY • BEST PRICES</p>

            <h1>
              Upgrade Your
              <br />
              Style Today
            </h1>

            <p className="hero-description">
              Discover the latest trends and shop your favourite products at the
              best prices.
            </p>

            <Link to="/product" className="shop-btn">
              Shop Now
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>

          <div className="hero-image">
            <img src="./images/n.png" alt="Shopping" />
          </div>
        </section>

        <section className="benefits">
          <div className="benefit">
            <i className="fa-solid fa-truck"></i>
            <div>
              <h3>Free Shipping</h3>
              <p className="benifit-other">For orders over ₹999</p>
            </div>
          </div>

          <div className="benefit">
            <i className="fa-solid fa-shield-halved"></i>
            <div>
              <h3>Secure Payment</h3>
              <p>100% safe and secure</p>
            </div>
          </div>

          <div className="benefit">
            <i className="fa-solid fa-headset"></i>
            <div>
              <h3>24/7 Support</h3>
              <p>We're here to help</p>
            </div>
          </div>

          <div className="benefit">
            <i className="fa-solid fa-rotate"></i>
            <div>
              <h3>Easy Returns</h3>
              <p>Hassle free returns</p>
            </div>
          </div>
        </section>

        <section className="products-section">
          <div className="section-heading">
            <h2>Our Products</h2>

            <Link to={"/project-details?id=${product.id}"}>View Details</Link>
          </div>

          <div className="products-grid">
            {homeProducts.map((product) => (
              <div
                className="product"
                data-product-id={product.id}
                key={product.id}
              >
                <div className="img-home">
                  <img
                    src={product.image}
                    alt={product.productName}
                    className="product-home-img"
                  />
                </div>

                <div className="content-home">
                  <div className="product-name-home">
                    <h2 className="name-home">{product.productName}</h2>
                  </div>

                  <div className="product-about-home">
                    <p className="about-home">{product.about}</p>
                  </div>

                  <div className="home-rating">
                    <img
                      src={product.rating}
                      alt="Product rating"
                      className="rating-home"
                    />
                  </div>

                  <div className="product-price-home">
                    <p className="price-home">
                      {typeof product.price === "number"
                        ? `₹${product.price.toLocaleString("en-IN")}`
                        : product.price}
                    </p>
                  </div>

                  <div className="product-button-home">
                    <button
                      className="button-home"
                      onClick={(event) => {
                        event.stopPropagation();
                        addToCart(product);
                      }}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer className="footer">
          <div className="footer-container">
            <div className="footer-brand">
              <h2 className="shop-name-home-page">
                Shop<span>ora</span>
              </h2>
              <p>Better products. Happier you.</p>
            </div>

            <div className="footer-column">
              <h3>Quick Links</h3>
              <Link to="/">Home</Link>
              <Link to="/product">Products</Link>
              <Link to="/about">About Us</Link>
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
      </div>
    </>
  );
}

export default HomePage;
