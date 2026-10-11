import { useState } from "react";
import { Link, useSearchParams } from "react-router";
import { products } from "../product.js";
import "./product-details.css";
function ProductDetails() {
  const [searchParams] = useSearchParams();

  const productId = Number(searchParams.get("id"));

  const product = products.find((item) => item.id === productId);

  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState("");

  const [cartCount, setCartCount] = useState(() => {
    try {
      const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
      return savedCart.reduce(
        (total, item) => total + (Number(item.quantity) || 0),
        0,
      );
    } catch {
      return 0;
    }
  });

  function addQuantity() {
    setQuantity((previous) => previous + 1);
  }

  function lessQuantity() {
    setQuantity((previous) => Math.max(1, previous - 1));
  }

  function addToCart() {
    if (!product) return;

    let savedCart;

    try {
      savedCart = JSON.parse(localStorage.getItem("cart")) || [];
      if (!Array.isArray(savedCart)) savedCart = [];
    } catch {
      savedCart = [];
    }

    const matchingItem = savedCart.find(
      (item) => item.product?.id === product.id,
    );

    if (matchingItem) {
      matchingItem.quantity = (Number(matchingItem.quantity) || 0) + quantity;
    } else {
      savedCart.push({
        product: product,
        quantity: quantity,
      });
    }

    localStorage.setItem("cart", JSON.stringify(savedCart));

    setCartCount(
      savedCart.reduce(
        (total, item) => total + (Number(item.quantity) || 0),
        0,
      ),
    );

    setMessage("Product added to cart successfully!");
  }

  if (!product) {
    return (
      <div className="cart-container">
        <h2>Product not found</h2>
        <p>Please select a product from the products page.</p>
        <Link to="/product">Go to Products</Link>
      </div>
    );
  }

  return (
    <>
      <title>Product Details - Shopora</title>

      <div className="product-details-page">
        {/* CATEGORY SECTION */}

        <div className="nav-container">
          <div className="category-container">
            <div className="category-list">
              <div className="category">
                <Link to="/" className="list">
                  Home
                </Link>

                <Link to="/product" className="list">
                  Products
                </Link>

                <Link to="/about" className="list">
                  About
                </Link>

                <Link to="/contact" className="list">
                  Contact
                </Link>

                <Link to="/cart" className="list">
                  Cart ({cartCount})
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* PRODUCT DETAILS */}

        <div className="cart-products">
          <div className="cart-items js-product-details">
            <div className="cart-head">
              <h1 className="heading-cart">Product Details</h1>
            </div>

            <div className="cart-products-list">
              <div className="cart-list-container">
                <div className="cart-item">
                  <div className="cart-img">
                    <img
                      src={product.image}
                      className="cart-product-img"
                      width="300"
                      alt={product.productName}
                    />
                  </div>

                  <div className="cart-content">
                    <div className="cart-product-about1">
                      <div className="cart-name">
                        <p className="cart-product-name">
                          {product.productName}
                        </p>
                      </div>

                      <div className="cart-product-about">
                        <p className="cart-about">
                          {product.description ||
                            "Explore this product from our Shopora collection."}
                        </p>
                      </div>

                      <div className="cart-product-rating">
                        {product.rating && (
                          <img
                            src={product.rating}
                            className="cart-rating"
                            alt="Product rating"
                          />
                        )}
                      </div>

                      <div className="cart-prodcut-price">
                        <p className="cart-price">
                          ₹
                          {(
                            Number(
                              String(product.price).replace(/[^\d.]/g, ""),
                            ) * quantity
                          ).toLocaleString("en-IN")}
                        </p>
                      </div>

                      <div className="quantity">
                        <p className="cart-quantity">
                          <button
                            type="button"
                            className="add-button"
                            onClick={addQuantity}
                          >
                            +
                          </button>

                          <span className="cart-quantity-item">{quantity}</span>

                          <button
                            type="button"
                            className="less-button"
                            onClick={lessQuantity}
                            disabled={quantity === 1}
                          >
                            -
                          </button>
                        </p>
                      </div>

                      <div className="cart-product-button">
                        <button
                          type="button"
                          className="cart-button"
                          onClick={addToCart}
                        >
                          Add To Cart
                        </button>
                      </div>

                      {message && (
                        <p className="result" role="status">
                          {message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER */}

        <div className="footer-container-cart">
          <div className="footer-content-cart">
            <p className="last-content">Shopora. Shop Smart. Live Better</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default ProductDetails;
