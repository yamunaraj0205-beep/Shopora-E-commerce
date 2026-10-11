import { useState } from "react";
import "./ProductsPage.css";
import { Link } from "react-router";
import { products } from "../product";

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

function ProductPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [cart, setCart] = useState(getSavedCart);

  const cartCount = cart.reduce(
    (total, item) => total + (Number(item.quantity) || 0),
    0,
  );

  // SEARCH AND CATEGORY FILTER
  const filteredProducts = products.filter((product) => {
    const productName = (product.productName || "").toLowerCase();
    const productAbout = (product.about || "").toLowerCase();
    const searchText = search.toLowerCase();

    const matchesSearch =
      productName.includes(searchText) || productAbout.includes(searchText);

    const matchesCategory =
      category === "All" ||
      (product.category || "").trim().toLowerCase() ===
        category.trim().toLowerCase();

    return matchesSearch && matchesCategory;
  });

  // ADD TO CART
  function addToCart(product) {
    const updatedCart = cart.map((item) => ({ ...item }));

    const existingItem = updatedCart.find(
      (item) => item.product?.id === product.id,
    );

    if (existingItem) {
      existingItem.quantity = (Number(existingItem.quantity) || 0) + 1;
    } else {
      updatedCart.push({
        product,
        quantity: 1,
      });
    }

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }

  return (
    <div className="products-page">
      {/* HEADER */}
      <header className="products-header">
        <div className="products-header-main">
          {/* LOGO */}
          <Link to="/" className="products-logo">
            <span className="products-logo-main">SHOPEASY</span>
            <span className="products-logo-sub">SHOP</span>
          </Link>

          {/* SEARCH */}
          <div className="products-search-box">
            <input
              type="text"
              className="products-search-bar js-search-bar"
              placeholder="Search for products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <button
              type="button"
              className="products-search-btn"
              onClick={() => setSearch(search.trim())}
            >
              🔍
            </button>

            <div className="js-search-suggestions"></div>
          </div>

          {/* ORDER */}
          <Link to="/product" className="products-orders">
            <span className="small-text">Order</span>
            <strong>Now</strong>
          </Link>

          {/* CART */}
          <Link to="/cart" className="products-cart-link">
            <div className="products-cart-icon">
              🛒
              <span className="products-cart-count js-cart">{cartCount}</span>
            </div>
          </Link>
        </div>

        {/* CATEGORY */}
        <div className="products-category-container">
          <nav className="products-category">
            <Link to="/" className="products-category-link">
              Home
            </Link>

            <Link to="/product" className="products-category-link active">
              Products
            </Link>

            <div>
              <select
                className="js-category"
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                  setSearch("");
                }}
              >
                <option value="All">All</option>
                <option value="Fashion">Fashion</option>
                <option value="Electronics">Electronics</option>
                <option value="Home">Home</option>
                <option value="Bags">Bags</option>
                <option value="Kitchen">Kitchen</option>
                <option value="Footwear">Footwear</option>
              </select>
            </div>

            <Link to="/about" className="products-category-link">
              About
            </Link>

            <Link to="/contact" className="products-category-link">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* MAIN PRODUCTS */}
      <main className="products-main-container">
        <div className="products-container js-product-container">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                className="product"
                data-product-id={product.id}
                key={product.id}
              >
                {/* CLICKABLE PRODUCT IMAGE */}
                <div className="img">
                  <Link to={`/project-details?id=${product.id}`}>
                    <img
                      className="product-img"
                      src={product.image}
                      alt={product.productName}
                    />
                  </Link>
                </div>

                <div className="content">
                  {/* CLICKABLE PRODUCT NAME */}
                  <h3 className="product-name">
                    <Link to={`/project-details?id=${product.id}`} className="name-value">
                      {product.productName}
                    </Link>
                  </h3>

                  <p className="product-about">{product.about}</p>

                  <img
                    className="rating"
                    src={product.rating}
                    alt="Product rating"
                  />

                  <p className="price">
                    {typeof product.price === "number"
                      ? `₹${product.price.toLocaleString("en-IN")}`
                      : product.price}
                  </p>

                  <div className="button-cart">
                    <button
                      type="button"
                      className="add-to-cart js-add-to-cart"
                      data-product-id={product.id}
                      onClick={() => addToCart(product)}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="no-products">
              No products found. Try another search.
            </p>
          )}
        </div>
      </main>
    </div>
  );
}

export default ProductPage;
