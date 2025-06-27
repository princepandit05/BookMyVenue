import { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { BASE_URL } from "../../data";
import MenuAccordion from "../component/menuAccordion";

const Venuedetail = () => {
  const [venuedata, setvenuedata] = useState([]);
  const [amenities, setamenities] = useState([]);
  const [menudata, setmenudata] = useState([]);

  const { venueId } = useParams();

  useEffect(() => {
    fetchVenue();
  }, []);

  const fetchVenue = async () => {
    const Rawvenue = await fetch(
      `${BASE_URL}/get-restaurant-details?restaurantId=${venueId}`
    );
    const Resultvenue = await Rawvenue.json();
    setvenuedata(Resultvenue.data);
    setamenities(Resultvenue.data.amenities);
    setmenudata(Resultvenue.data.packages);
  };

  return (
    <>
      <div className="venue-detail">
        <div className="venue-detail__content">
          <img className="venue-detail__image" src={venuedata.profileImage} />

          <div className="venue-detail__info">
            <span><a className="venue-detail__label">Name :</a> {venuedata.name}</span>
            <span><a className="venue-detail__label">Address :</a> {venuedata.address}</span>
            <span><a className="venue-detail__label">Avg Rating :</a> {venuedata.avg_rating}</span>
            <span><a className="venue-detail__label">Base Price :</a> {venuedata.basePrice}</span>
            <span><a className="venue-detail__label">Description :</a> {venuedata.description}</span>
            
            <div className="venue-detail__amenities">
              {amenities.map((item) => (
                <span className="venue-detail__amenity-box">
                  <a>{item.name}</a> - <a>{item.value}</a>
                </span>
              ))}
            </div>
          </div>
        </div>

        {menudata.map((item) => (
          <div key={item.packageName} className="venue-detail__menu-section">
            <h1 className="venue-detail__menu-title">{item.packageName}</h1>
            {item.packageItems.map((menuItem) => (
              <MenuAccordion
                key={menuItem.menuType}
                menutype={menuItem.menuType}
                menuoption={menuItem.menuOptions}
              />
            ))}
          </div>
        ))}
      </div>
    </>
  );
};
export default Venuedetail;
