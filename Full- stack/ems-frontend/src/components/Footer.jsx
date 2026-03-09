import React from 'react'

const Footer = () => {
  return (
    <div>
    <footer className="footer">
      <div className="footer-content">
        <div className="about-section">
          <div>
            <h3  style={{ color: "red" }}>About</h3>
            <p>
            Welcome to our Natural Disaster Tracking website, where we're dedicated to providing timely and accurate information to help communities prepare for and respond to crises worldwide. With a passionate team of experts and cutting-edge technology, we monitor seismic activity, weather patterns, and other phenomena to forecast and track natural disasters. Our user-friendly platform offers real-time updates, interactive maps, and educational resources to empower individuals and organizations in safeguarding lives and property. Committed to global resilience, we collaborate with governments, NGOs, and emergency responders to mitigate the impact of disasters and foster a safer, more resilient future for all. Join us in our mission today.
            </p>
          </div>
          <div class="footer-social-icon">
                              <h3 style={{ color: "red" }}>Follow us</h3>
                              <a href="#"><i class="fab fa-facebook-f facebook-bg"> <img src="./Facebook_.png" alt="Facebook" /></i></a>
                              <a href="#"><i class="fab fa-twitter twitter-bg"> <img src="./x-.webp" alt="x" /></i></a>
                              <a href="#"><i class="fab fa-google-plus-g google-bg"> <img src="./Google_Maps.png" alt="Google_Maps" style={{ width:"30px"}}/></i></a>
                          </div>
        </div>

        <div className="quick-links">
          <h3  style={{ color: "red" }}>Quick Links</h3>
          <ul className="footer-links">
            <li>
              <a>About Us</a>
            </li>
            <li>
              <a>Contact Us</a>
            </li>

            <li>
              <a>Privacy Policy</a>
            </li>
            <li>
              
              <p><a className="link-offset-2 link-underline link-underline-opacity-0 " href="/AdminLogin" >Admin Login</a></p>
            </li>

          </ul>
        </div>
      </div>

      <hr />
      <div style={{ backgroundcolor: "#023504" }} >
      <div className="copyright" >
        <p >Copyright &copy; 2024 All Rights Reserved by Natural Disaster Tracking System</p>
      </div>
      </div>
    </footer>
  </div>
  )
}

export default Footer