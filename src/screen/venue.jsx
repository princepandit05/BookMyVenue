import { useEffect, useState } from "react";
import Venuepage from "../component/Venuepage";
import { useNavigate, useOutletContext } from "react-router-dom";
import { BASE_URL } from "../../data";

const Venue = () => {
  const [VenueEventcard, setVenueEventcard] = useState([]);
  const [filtervenuedata, setfiltervenuedata] = useState([]);
  const navgate = useNavigate();
  const { filterText } = useOutletContext();

  useEffect(() => {
    fetchEventData();
  }, []);

  useEffect(() => {
    onSearchClick(filterText);
  }, [filterText]);

  const onSearchClick = (searchtext) => {
    const filtered = VenueEventcard.filter((item) =>
      item.name.toLowerCase().includes(searchtext.toLowerCase())
    );
    setfiltervenuedata(filtered);
  };

  const fetchEventData = async () => {
    const EventData = await fetch(`${BASE_URL}/get-all-restaurants`);
    const resultData = await EventData.json();
    setVenueEventcard(resultData.data.rows);
    setfiltervenuedata(resultData.data.rows);
  };

  const onCardClick = (venueId) => {
    navgate(`/venue-detail/${venueId}`);
  };

  return (
    <>
      <div className="venue__card-layout">
        {filtervenuedata.length === 0 ? (
          <div className="loader"></div>
        ) : (
          filtervenuedata.map((item) => (
            <Venuepage
              onClick={onCardClick}
              venueId={item.id}
              Img={item.profileImage}
              Name={item.name}
              Address={item.address}
              Description={item.description}
              Amenities={item.amenities}
            />
          ))
        )}
      </div>
    </>
  );
};

export default Venue;
