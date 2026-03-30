import { Link } from "react-router-dom";
import { FiCoffee } from "react-icons/fi";
import "../styles/Contact.css"
import ContactMethods from "../component/ContactMethods"

const Contact = () => {
  return (
    <div className="contact-page fade-in">
      <div className="contact-header">
        <h1>Get in Touch</h1>
        <p>We'd love to hear from you. Please fill out the form below or reach us directly.</p>
      </div>

      <div className="contact-content">
        <div className="contact-info-panel">
          <div className="contact-brand" style={{ marginBottom: "2.5rem" }}>
            <Link to="/" className="brand-logo">
              <div className="brand-icon-wrapper">
                <FiCoffee className="brand-icon" />
              </div>
              <span className="brand-text">Cofflavour</span>
            </Link>
          </div>
          
          <div className="contact-methods-wrapper">
            <ContactMethods 
              icon="fa6-solid:location-dot"
              desc="123 Anywhere St., Any City"
            />
            <ContactMethods 
              icon="fa6-solid:phone"
              desc="123-456-7890"
            />
            <ContactMethods 
              icon="fa6-solid:envelope"
              desc="hello@cofflavour.com"
            />
          </div>
        </div>

        <div className="contact-form-panel">
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="John Doe" />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="john@example.com" />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea rows="5" placeholder="How can we help you?"></textarea>
            </div>
            <button type="submit" className="btn-solid">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact