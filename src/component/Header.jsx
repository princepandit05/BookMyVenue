import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBuilding, faInfoCircle, faCalendarAlt, faClipboardList, faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Header = ({ onSearchClick ,islogin }) => {
  const [searchtext, setsearchtext] = useState("");
  const [logdata, setlogdata] = useState("Login");
  const [path, setpath] = useState("Login");

  // const changeData = () => {
  //   if (logdata === "Profile") {
  //     setlogdata("Login");
  //     setpath("Login");
  //   } else {
  //     setlogdata("Profile");
  //     setpath("");
  //   }
  // };

  console.log(islogin);
  
  return (
    <div className="container">
      <div className="navabr-container">
        <div className="event-logo">
          <h4>Book<span className="my">my</span>Venue</h4>
        </div>
        <div
          className="search-bar"
          value={searchtext}
          onChange={(ele) => setsearchtext(ele.target.value)}
        >
          <input type="text" id="input" placeholder="Search for event"></input>
          <span className="search" onClick={() => onSearchClick(searchtext)}>
            Search
          </span>
        </div>

        <div className="item-list">
          <Link className="link" to={"/"}>
            <FontAwesomeIcon icon={faHome} className="icon" /> Home
          </Link>
          <Link className="link" to={"/Venue"}>
            <FontAwesomeIcon icon={faBuilding} className="icon" /> Venue
          </Link>
          <span className="link">
            <FontAwesomeIcon icon={faInfoCircle} className="icon" /> About
          </span>
          <Link className="link" to={"/UpcomingBookings"}>
            <FontAwesomeIcon icon={faCalendarAlt} className="icon" /> Upcoming Bookings
          </Link>
          <span className="link">
            <FontAwesomeIcon icon={faClipboardList} className="icon" /> My Booking
          </span>
          <Link className="link" to={`/${path}`} >
            <FontAwesomeIcon icon={islogin ? "Profile" : "Login"} className="icon" /> {logdata}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
