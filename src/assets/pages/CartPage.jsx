import { useEffect, useState } from "react";
import { Link } from "react-router";
import "./Cart.css";

function getSavedCart() {
  try {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];

    return savedCart.map((item) => ({
      ...item,
      quantity: item.quantity || 1,
    }));
  } catch {
    return [];
  }
}

function getPrice(price) {
  return Number(String(price).replace(/[^\d.]/g, "")) || 0;
}

function CartPage() {
  const [cart, setCart] = useState(getSavedCart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

  const subtotal = cart.reduce(
    (total, item) => total + getPrice(item.product.price) * item.quantity,
    0,
  );

  function increaseQuantity(productId) {
    setCart((previousCart) =>
      previousCart.map((item) =>
        item.product.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    );
  }

  function decreaseQuantity(productId) {
    setCart((previousCart) =>
      previousCart.map((item) =>
        item.product.id === productId
          ? {
              ...item,
              quantity: Math.max(1, item.quantity - 1),
            }
          : item,
      ),
    );
  }

  function deleteProduct(productId) {
    setCart((previousCart) =>
      previousCart.filter((item) => item.product.id !== productId),
    );
  }

  return (
    <>
      <title>Cart</title>

      <div className="cart-page-container">
        <div className="cart-page-item">
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
              </div>
            </div>
          </div>

          <div className="cart-container-cart-page">
            <div className="cart-product">
              <div className="cart-item-total">
                <p className="item-total">Your Cart ({itemCount} items)</p>
              </div>

              <div className="cart-box">
                {cart.length === 0 ? (
                  <div className="empty-cart">
                    <p>Your cart is empty!</p>
                    <Link to="/product">Continue Shopping</Link>
                  </div>
                ) : (
                  <>
                    <div className="cart-header">
                      <p>Product</p>
                      <p>Product Name</p>
                      <p>Price</p>
                      <p>Quantity</p>
                      <p>Total</p>
                      <p>Delete</p>
                    </div>

                    {cart.map((item) => (
                      <div className="Products" key={item.product.id}>
                        <div className="cart-img">
                          <img
                            src={item.product.image}
                            alt={item.product.productName}
                            className="img-cart"
                          />
                        </div>

                        <div className="cart-product-name">
                          <p className="product-name">
                            {item.product.productName}
                          </p>
                        </div>

                        <div className="cart-product-price">
                          <p className="product-price">
                            ₹{getPrice(item.product.price)}
                          </p>
                        </div>

                        <div className="quantity">
                          <button
                            className="less-button"
                            onClick={() => decreaseQuantity(item.product.id)}
                          >
                            -
                          </button>

                          <span className="cart-quantity">{item.quantity}</span>

                          <button
                            className="add-button"
                            onClick={() => increaseQuantity(item.product.id)}
                          >
                            +
                          </button>
                        </div>

                        <div className="cart-product-total cart-total-price">
                          <p>₹{getPrice(item.product.price) * item.quantity}</p>
                        </div>

                        <div className="cart-product-delete">
                          <button
                            className="delete-button"
                            onClick={() => deleteProduct(item.product.id)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>

            <div className="order-summary">
              <h2 className="order-summary-head">Order Summary</h2>

              <div className="summary-row">
                <p>Subtotal</p>
                <p className="subtotal">₹{subtotal}</p>
              </div>

              <div className="summary-row">
                <p>Shipping</p>
                <p>Free</p>
              </div>

              <hr />

              <div className="summary-total">
                <p>Total</p>
                <p className="total-value">₹{subtotal}</p>
              </div>

              {cart.length > 0 && (
                <Link to="/checkout">
                  <button className="checkout-button">
                    Proceed to Checkout
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartPage;
