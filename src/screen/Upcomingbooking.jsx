import { useEffect, useState } from "react";
import Upcoming from "../component/upcomingpage";

const Booking = () => {
  const [filteredBookingData, setFilteredBookingData] = useState([]);

  useEffect(() => {
    fetchBookingData();
  }, []);

  const fetchBookingData = async () => {
    const response = await fetch(`http://108.174.58.176:4000/get-all-upcoming-events`);
    const bookingData = await response.json();
    setFilteredBookingData(bookingData.data);
  };

  return (
    <>
      <div className="booking__cards">
        {filteredBookingData.length === 0 ? (
          <div className="loader"></div>
        ) : (
          filteredBookingData.map((item) => (
            <Upcoming
              key={item.id}
              Image={item.image}
              Name={item.name}
              Description={item.description}
              TicketPrice={item.ticketPrice}
              Maxlimit={item.maxLimit}
            />
          ))
        )}
      </div>
    </>
  );
};

export default Booking;
