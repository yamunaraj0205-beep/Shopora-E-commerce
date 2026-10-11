import { useState, useEffect } from "react";
import { Link } from "react-router";
import "./Checkout.css";

function getSavedCart() {
  try {
    return JSON.parse(localStorage.getItem("cart")) || [];
  } catch {
    return [];
  }
}

function getPrice(price) {
  return Number(String(price).replace(/[^\d.]/g, "")) || 0;
}

function CheckoutPage() {
  const [cart] = useState(getSavedCart);

  const [form, setForm] = useState({
    name: "",
    address: "",
    city: "",
    pincode: "",
    payment: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const subtotal = cart.reduce(
    (total, item) =>
      total + getPrice(item.product.price) * (item.quantity || 1),
    0,
  );

  const shippingPrice =
    form.payment === "cash on Delivery"
      ? 50
      : form.payment === "Credit and debit card"
        ? 20
        : 0;

  const total = subtotal + shippingPrice;

  useEffect(() => {
    if (success) {
      // Keep the success message visible.
    }
  }, [success]);

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: "",
    }));

    setSuccess("");
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Please Enter Your Name";
    }

    if (!form.address.trim()) {
      newErrors.address = "Please Enter Your Address";
    }

    if (!form.city.trim()) {
      newErrors.city = "Please Enter Your City";
    }

    if (!/^\d{6}$/.test(form.pincode.trim())) {
      newErrors.pincode = "Enter a valid 6-digit Pincode";
    }

    if (!form.payment) {
      newErrors.payment = "Please select a payment method";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setSuccess("");
      return;
    }

    if (cart.length === 0) {
      setSuccess("Your cart is empty!");
      return;
    }

    setSuccess("✓ Order Placed Successfully!");

    // Save the order details for future use.
    const order = {
      customer: form,
      items: cart,
      subtotal,
      shipping: shippingPrice,
      total,
      createdAt: new Date().toISOString(),
    };

    const previousOrders = JSON.parse(localStorage.getItem("orders") || "[]");

    localStorage.setItem("orders", JSON.stringify([...previousOrders, order]));

    localStorage.removeItem("cart");
  }

  return (
    <div className="checkout-page">
      <div className="checkout-category-container">
        <div className="checkout-category-list">
          <div className="checkout-category">
            <Link to="/" className="checkout-list">
              Home
            </Link>

            <Link to="/product" className="checkout-list">
              Products
            </Link>

            <Link to="/about" className="checkout-list">
              About
            </Link>

            <Link to="/contact" className="checkout-list">
              Contact
            </Link>
          </div>
        </div>
      </div>

      <form className="checkout-content" onSubmit={handleSubmit}>
        <div className="checkout-ordersummary">
          <div className="checkout-about-user">
            <div className="checkout-head">
              <h1 className="checkout-head-line">Checkout</h1>
            </div>

            <div className="checkout-shipping-address">
              <p className="checkout-address-title">Shipping Address</p>
            </div>

            <div className="checkout-user-name">
              <label htmlFor="name" className="checkout-label-name">
                Full Name
              </label>

              <input
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                type="text"
                placeholder="Enter your name"
                className="checkout-name-input"
                style={{ borderColor: errors.name ? "red" : "" }}
              />
            </div>

            <p className="checkout-name-alert">{errors.name}</p>

            <div className="checkout-user-address">
              <label htmlFor="address" className="checkout-label-address">
                Address
              </label>

              <input
                id="address"
                name="address"
                value={form.address}
                onChange={handleChange}
                type="text"
                className="checkout-address-input"
                placeholder="Enter your address"
                style={{ borderColor: errors.address ? "red" : "" }}
              />
            </div>

            <p className="checkout-address-alert">{errors.address}</p>

            <div className="checkout-city">
              <div className="checkout-city-field">
                <label htmlFor="city" className="checkout-label-city">
                  City
                </label>

                <input
                  id="city"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  type="text"
                  className="checkout-city-input"
                  placeholder="Enter city"
                  style={{ borderColor: errors.city ? "red" : "" }}
                />

                <p className="checkout-city-alert">{errors.city}</p>
              </div>

              <div className="checkout-pincode-field">
                <label htmlFor="pincode" className="checkout-label-pincode">
                  Pincode
                </label>

                <input
                  id="pincode"
                  name="pincode"
                  value={form.pincode}
                  onChange={handleChange}
                  type="text"
                  inputMode="numeric"
                  maxLength={6}
                  className="checkout-pincode-input"
                  placeholder="Enter pincode"
                  style={{ borderColor: errors.pincode ? "red" : "" }}
                />

                <p className="checkout-pincode-alert">{errors.pincode}</p>
              </div>
            </div>

            <div className="checkout-payment-method">
              <label className="checkout-payment-option">
                <input
                  type="radio"
                  name="payment"
                  value="cash on Delivery"
                  checked={form.payment === "cash on Delivery"}
                  onChange={handleChange}
                />
                <p>Cash on Delivery</p>
              </label>

              <label className="checkout-payment-option">
                <input
                  type="radio"
                  name="payment"
                  value="gpay"
                  checked={form.payment === "gpay"}
                  onChange={handleChange}
                />
                <p>UPI / PhonePe / Google Pay</p>
              </label>

              <label className="checkout-payment-option">
                <input
                  type="radio"
                  name="payment"
                  value="Credit and debit card"
                  checked={form.payment === "Credit and debit card"}
                  onChange={handleChange}
                />
                <p>Credit / Debit Card</p>
              </label>
            </div>

            <p className="checkout-payment-alert">{errors.payment}</p>
          </div>

          {success && (
            <p
              className="checkout-order-success"
              style={{
                color: success.startsWith("✓") ? "green" : "#DC2626",
              }}
            >
              {success}
            </p>
          )}
        </div>

        <div className="checkout-order-summary">
          <h2>Order Summary</h2>

          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div className="checkout-order" key={item.product.id}>
                <div className="checkout-order-img">
                  <img
                    className="checkout-img-for-order"
                    src={item.product.image}
                    alt={item.product.productName}
                  />

                  <p className="checkout-quantity">Qty: {item.quantity || 1}</p>
                </div>

                <div className="checkout-order-price">
                  <p className="checkout-price">
                    ₹{getPrice(item.product.price) * (item.quantity || 1)}
                  </p>
                </div>
              </div>
            ))
          )}

          <div className="checkout-total">
            <p>Subtotal</p>
            <p>₹{subtotal}</p>
          </div>

          <div className="checkout-total">
            <p>Shipping</p>
            <p>₹{shippingPrice}</p>
          </div>

          <div className="checkout-final-total">
            <p>Total</p>
            <p>₹{total}</p>
          </div>

          <button
            type="submit"
            className="checkout-place-order"
            disabled={cart.length === 0}
          >
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
}

export default CheckoutPage;
