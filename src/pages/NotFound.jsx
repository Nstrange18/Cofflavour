import React from 'react'
// import '../styles/NotFound.css'

const NotFound = () => {
  return (
    <>
        <div className='ntf-gen'>
            <h1>Not Found Page</h1>
            <span>Status: <b>404</b></span>
            <br />
            <p>The route name does not exist and doesn't match any of our routes. Please go back and try again.</p>
        </div>
    </>
  )
}

export default NotFound