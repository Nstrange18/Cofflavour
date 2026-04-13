import "../styles/Banner.css"

import { Link } from "react-router-dom"

const Banner = () => {
  return (
    <section className="banner-gen-div fade-in">
      <div className="banner-content-container container">

        <div className="banner-writeup-div">
          <h1 className="banner-head-text">
            Elevate Your <span className="highlight">Coffee</span> Experience
          </h1>
          <p className="banner-mid-text">
            Discover the rich, bold flavors of our ethically sourced, perfectly roasted coffee. Your daily fuel, elevated.
          </p>
          <div className="banner-actions">
            <Link to="/products" className="btn-primary banner-btn">Explore Menu</Link>
            <Link to="/about" className="btn-outline banner-btn">Our Story</Link>
          </div>
        </div>

        <div className="banner-img-div">
          <div className="banner-img-backdrop"></div>
          <img src="/coffee-images/Iced_Coffee_Cappuccino_Cup__Cappuccino_Ice__Iced_Coffee_Cup__Ice_Coffee_PNG_Transparent_Image_and_Clipart_for_Free_Download-removebg-preview.webp" alt="Iced Coffee" loading="lazy" />
        </div>

      </div>
    </section>
  )
}

export default Banner