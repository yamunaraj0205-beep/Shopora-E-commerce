import { Route, Routes } from "react-router";
import ProductPage from "./assets/pages/ProductsPage";
import CartPage from "./assets/pages/CartPage";
import CheckoutPage from "./assets/pages/CheckoutPage";
import "./App.css";
import HomePage from "./assets/pages/HomePage";
import AboutPage from "./assets/pages/AboutPage";
import ContactPage from "./assets/pages/Contact";
import Login from "./assets/pages/LoginPage";
import PrivacyAndPolicy from "./assets/pages/Privacy-PolicyPage";
import ReturnsAndRefunds from "./assets/pages/Returns-Refunds";
import SingUp from "./assets/pages/SignUpPage";
import TermsAndCondition from "./assets/pages/Terms-and-Condition";
import ProductDetails from "./assets/pages/ProductDetailsPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/privacy-policy" element={<PrivacyAndPolicy />} />
      <Route path="/returns-and-refunds" element={<ReturnsAndRefunds />} />
      <Route path="/sigup" element={<SingUp />} />
      <Route path="/terms and conditions" element={<TermsAndCondition />} />

      <Route path="/project-details" element={<ProductDetails />} />
    </Routes>
  );
}

export default App;
