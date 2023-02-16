import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-header">
    <img
      src="https://rubixe.com/assets/img/logo/white-rubixe-logo.png"
      className="rbixe-logo-styles"
      alt="rubixeLogo"
    />
    <div className="nav-li-card">
      <Link to="/" className="link-item">
        <li>HOME</li>
      </Link>
      <Link to="/services" className="link-item">
        <li>SERVICES</li>
      </Link>
      <Link to="/products" className="link-item">
        <li>PRODUCTS</li>
      </Link>
      <Link to="incubation/" className="link-item">
        <li>AI INTERNSHIP</li>
      </Link>
      <Link to="/career" className="link-item">
        <li>CAREER</li>
      </Link>
      <Link to="/blog" className="link-item">
        <li>BLOG</li>
      </Link>
      <Link to="/about" className="link-item">
        <li>ABOUT</li>
      </Link>
      <Link to="/contact-us" className="link-item">
        <li>CONTACT US</li>
      </Link>
    </div>
  </nav>
)

export default Header
