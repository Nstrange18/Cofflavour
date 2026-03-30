import React from 'react'
import { Link } from 'react-router-dom'
import { FiCoffee } from "react-icons/fi"
import "../styles/LogIn.css"
import { Icon } from '@iconify/react'

const SignUp = () => {
  return (
    <div className="login-gen-div">
      <main className="login-container fade-in">
        
        <div className="login-left-panel">
          <Link to="/" className="brand-logo" style={{ marginBottom: "2rem" }}>
            <div className="brand-icon-wrapper">
              <FiCoffee className="brand-icon" />
            </div>
            <span className="brand-text brand-text-light">Cofflavour</span>
          </Link>

          <div className="catchy-quote">
            <h1 className="quote-text">Join the Coffee <br /> Revolution</h1>
            <h3 className="welcome-text">Create Account</h3>
          </div>
        </div>

        <div className="login-right-panel">
          <div className="input-container">
            <h2>Sign up</h2>

            <section className="inputs">
              <div className="each-input">
                <Icon icon="fa6-solid:user" className="input-icon" />
                <input type="text" placeholder="Full Name"/>
              </div>

              <div className="each-input">
                <Icon icon="fa6-solid:envelope" className="input-icon" />
                <input type="email" placeholder="Email Address"/>
              </div>

              <div className="each-input">
                <Icon icon="fa6-solid:lock" className="input-icon" />
                <input type="password" placeholder="Password"/>
              </div>

              <div className="each-input">
                <Icon icon="fa6-solid:key" className="input-icon" />
                <input type="password" placeholder="Confirm Password"/>
              </div>
            </section>

            <section className="remember-line" style={{ justifyContent: 'flex-start' }}>
              <label className="remember-me">
                <input type="checkbox" name="Terms" />
                <span>I agree to the Terms and Privacy Policy</span>
              </label>
            </section>

            <section className="login-buttons">
              <button className="btn-login-main">Create Account</button>

              <div className="or-divider">
                  <span></span>         
                  <p>Already have an account?</p>
                  <span></span>
              </div>

              <Link to="/login" className="btn-signup-alt" style={{ textAlign: "center", textDecoration: "none", display: "inline-block", boxSizing: "border-box" }}>Log in here</Link>
            </section>
          </div>
        </div>

      </main>
    </div>
  )
}

export default SignUp
