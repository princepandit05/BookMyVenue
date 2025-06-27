import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBuilding, faInfoCircle, faCalendarAlt, faClipboardList, faSearch } from '@fortawesome/free-solid-svg-icons';

const Header = ({ onSearchClick, islogin }) => {
  const [searchtext, setsearchtext] = useState("");

  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__brand">
          Book<span className="header__brand-accent">my</span>Venue
        </div>

        <div className="header__nav">
          <div className="header__search">
            <input
              type="text"
              className="header__search-input"
              placeholder="Search venues..."
              value={searchtext}
              onChange={(e) => setsearchtext(e.target.value)}
            />
            <button 
              className="header__search-button"
              onClick={() => onSearchClick(searchtext)}
            >
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>

          <nav className="header__links">
            <Link className="header__link" to="/">
              <FontAwesomeIcon icon={faHome} className="header__icon" />
              Home
            </Link>
            <Link className="header__link" to="/Venue">
              <FontAwesomeIcon icon={faBuilding} className="header__icon" />
              Venues
            </Link>
            <Link className="header__link" to="/about">
              <FontAwesomeIcon icon={faInfoCircle} className="header__icon" />
              About
            </Link>
            <Link className="header__link" to="/UpcomingBookings">
              <FontAwesomeIcon icon={faCalendarAlt} className="header__icon" />
              Bookings
            </Link>
            <Link className="header__button" to={`/${islogin ? "MyAccount" : "Login"}`}>
              <FontAwesomeIcon icon={faClipboardList} className="header__icon" />
              {islogin ? "My Account" : "Login"}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
