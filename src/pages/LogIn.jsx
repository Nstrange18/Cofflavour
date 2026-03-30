import React from 'react'
import { Link } from 'react-router-dom'
import { FiCoffee } from "react-icons/fi"
import "../styles/LogIn.css"
import { Icon } from '@iconify/react'

const LogIn = () => {
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
            <h1 className="quote-text">A Coffee a day keeps <br /> the grumpy away</h1>
            <h3 className="welcome-text">Welcome!</h3>
          </div>
        </div>

        <div className="login-right-panel">
          <div className="input-container">
            <h2>Log in</h2>

            <section className="inputs">
              <div className="each-input">
                <Icon icon="fa6-solid:user" className="input-icon" />
                <input type="text" placeholder="Username"/>
              </div>

              <div className="each-input">
                <Icon icon="fa6-solid:lock" className="input-icon" />
                <input type="password" placeholder="Password"/>
              </div>
            </section>

            <section className="remember-line">
              <label className="remember-me">
                <input type="checkbox" name="Remember Me" />
                <span>Remember Me</span>
              </label>

              <a href="#" className="forgot-password-link">Forgot password?</a>
            </section>

            <section className="login-buttons">
              <button className="btn-login-main">Log in</button>

              <div className="or-divider">
                  <span></span>         
                  <p>or</p>
                  <span></span>
              </div>

              <Link to="/signup" className="btn-signup-alt" style={{ textAlign: "center", textDecoration: "none", display: "inline-block", boxSizing: "border-box" }}>Sign up</Link>
            </section>
          </div>
        </div>

      </main>
    </div>
  )
}

export default LogIn