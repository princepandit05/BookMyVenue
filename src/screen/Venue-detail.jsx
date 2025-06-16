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
    // console.log("============>", Resultvenue.data);
  };
  // console.log(venuedata);

  return (
    <>
      <div className="venuedetail">
        {
          <>
            <div className="detail-container">
              <img className="venue-image" src={venuedata.profileImage}></img>

              <div className="venuetext-detail">
                <span>
                  <a className="venuetext">Name :</a>
                  {venuedata.name}
                </span>
                <span>
                  <a className="venuetext">Address :</a>
                  {venuedata.address}
                </span>
                <span>
                  <a className="venuetext">Avg_rating:</a>
                  {venuedata.avg_rating}
                </span>
                <span>
                  <a className="venuetext">BasePrice:</a>
                  {venuedata.basePrice}
                </span>
                <span>
                  <a className="venuetext">Description :</a>
                  {venuedata.description}
                </span>
                <span className="amenities-container">
                  {amenities.map((item) => {
                    return (
                      <span className="amenities-box">
                        <a>{item.name}</a> - <a>{item.value}</a>
                      </span>
                    );
                  })}
                </span>
              </div>
            </div>
            {
              <>
                {menudata.map((item) => (
                  <>
                    <h1 className="menusection">{item.packageName} </h1>
                    {item.packageItems.map((item) => (
                      <>
                        <MenuAccordion
                          menutype={item.menuType}
                          menuoption={item.menuOptions}
                        />
                      </>
                    ))}
                  </>
                ))}
              </>
            }
          </>
        }
      </div>
    </>
  );
};
export default Venuedetail;
