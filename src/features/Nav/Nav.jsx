import  { useState } from 'react';
import './Nav.css';
import Logo from '../../assets/icons/Logos.png';

function Nav({ showLogo }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="nav-content">
      {showLogo && (
        <div className="logo-container">
          <img src={Logo} alt="Curiosity Corner Logo" className="logo" />
        </div>
      )}
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>
      <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/library">Library</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
}
export default Nav;
