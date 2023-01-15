import React, { Component } from 'react'
import bgimg from './bgimg.jpg'
export default class About extends Component {
  render() {
    return (
      <>
        <div>
          <img src={bgimg} alt="" style={{ height: '100vh', width: '100vw' }} />
        </div>
        <div className='d-flex align-items-center justify-content-md-center '>
          <div className="position-absolute bottom-50 top-50">
            <h2 className='text-center text-warning fs-1 fw-bold'>About Us</h2>
            <p className="text-center fs-5 text-warning" style={{ fontFamily: 'monospace',maxWidth:'600px' }}>This is a News Website that fetches latest news from NEWS-API and displays the news of all categories in the specified section given in the Navbar.
            </p>
          </div>
        </div>
      </>
    )
  }
}
