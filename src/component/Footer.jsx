import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <>
      <div className="footer">
        <h1 className="footer__brand">
          Book<span className="footer__highlight">my</span>Venue
        </h1>
        <h3 className="footer__tagline">Connecting you to the best events and venues</h3>

        <div className="footer__social-icons">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="footer__icon" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} className="footer__icon" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} className="footer__icon" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="footer__icon" />
          </a>
        </div>

        <h4 className="footer__copyright">
          © 2025 Book<span className="footer__highlight">my</span>Venue. All rights reserved.
        </h4>
      </div>
    </>
  );
};

export default Footer;
