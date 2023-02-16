import {Link} from 'react-router-dom'
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillCopyrightCircle,
} from 'react-icons/ai'
import './index.css'

const FooterItem = () => (
  <div className="footer-card">
    <div className="first-card">
      <div className="details-1">
        <p>ABOUT US</p>
        <p>
          Rubixe™ is a global technology company specializing in disruptive
          technologies – Artificial Intelligence (AI), Machine Learning, Robotic
          Process Automation (RPA), BlockChain and Internet of Things (IoT).
          Rubixe mission to enable businesses to leverage the full potential of
          disruptive technologies to stay competitive in the market.
        </p>
      </div>
      <div className="details-1">
        <p>Menus</p>
        <Link to="/" className="link-item">
          <li className="footer-link">Home</li>
        </Link>
        <Link to="/services" className="link-item">
          <li className="footer-link">Service</li>
        </Link>
        <Link to="/products" className="link-item">
          <li className="footer-link">Products</li>
        </Link>

        <Link to="/career" className="link-item">
          <li className="footer-link">Career</li>
        </Link>
      </div>
      <div className="details-1">
        <p>LEARN MORE</p>
        <Link to="/about" className="link-item">
          <li className="footer-link">About</li>
        </Link>
        <Link to="/contact-us" className="link-item">
          <li className="footer-link">Contact Us</li>
        </Link>
      </div>
      <div className="details-1">
        <p>ADDRESS</p>
        Novel Tech Park, 1st Floor, Hosur Rd, Kudlu gate, Bengaluru, Karnataka
        560068 Phone: 0804-717-8999 Email-address: hi@rubixe.com
        <div className="social">
          <p>SOCIAL MEDIA</p>
        </div>
        <div className="icon-container">
          <Link to="https://www.facebook.com/Rubixe.Official/">
            <AiFillFacebook className="icon" />
          </Link>
          <Link to="https://www.linkedin.com/company/rubixe/">
            <AiFillLinkedin className="icon" />
          </Link>
        </div>
      </div>
    </div>
    <div className="bottom-card">
      <AiFillCopyrightCircle className="icon-c" />
      <p className="footer-para">
        Copyright 2017 - 2023 | Rubixe is a brand of THINK AHEAD INNOVATIONS
        PVT. LTD. | All Rights Reserved
      </p>
    </div>
  </div>
)

export default FooterItem
