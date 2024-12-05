import './Footer.css';
import Logo from '../../assets/icons/Logos.png'; // Path to your logo

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-logo">
          <img src={Logo} alt="Curiosity Corner Logo" className="logo" />
        </div>

        {/* Contact Information */}
        <div className="footer-contact">
          <p>Email: info@curiositycorner.com</p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>&copy; 2024 Curiosity Corner</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

  