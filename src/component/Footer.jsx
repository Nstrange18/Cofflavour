import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiCoffee } from "react-icons/fi";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <Link to="/" className="brand-logo footer-logo">
            <div className="brand-icon-wrapper">
              <FiCoffee className="brand-icon" />
            </div>
            <span className="brand-text brand-text-light">Cofflavour</span>
          </Link>
          <p className="footer-desc">
            Experience the rich, bold flavors of our ethically sourced, perfectly roasted coffee. Your daily fuel, elevated.
          </p>
          <div className="social-links">
            <a href="#" className="social-icon"><FaFacebookF /></a>
            <a href="#" className="social-icon"><FaTwitter /></a>
            <a href="#" className="social-icon"><FaInstagram /></a>
            <a href="#" className="social-icon"><FaLinkedinIn /></a>
          </div>
        </div>

        <div className="footer-links">
          <h4>Explore</h4>
          <Link className="actual-footer-links" to="/">Home</Link>
          <Link className="actual-footer-links" to="/products">Our Coffee</Link>
          <Link className="actual-footer-links" to="/about">About Us</Link>
          <Link className="actual-footer-links" to="/contact">Contact</Link>
        </div>

        <div className="footer-links">
          <h4>Support</h4>
          <Link className="actual-footer-links" to="#">FAQ</Link>
          <Link className="actual-footer-links" to="#">Shipping Returns</Link>
          <Link className="actual-footer-links" to="#">Store Locator</Link>
          <Link className="actual-footer-links" to="#">Privacy Policy</Link>
        </div>

        <div className="footer-newsletter">
          <h4>Stay Awake</h4>
          <p>Subscribe to our newsletter for the latest brews and exclusive offers.</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit" className="btn-primary">Subscribe</button>
          </form>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Cofflavour. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
