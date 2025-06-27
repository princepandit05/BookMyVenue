import { useEffect, useState } from "react";
import Eventcards from "../component/Eventcards";
import { BASE_URL } from "../../data";
import { useNavigate, useOutletContext } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const { filterText } = useOutletContext();
  const navigate = useNavigate();
  const { setmediadata } = useOutletContext();

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    onFilter(filterText);
  }, [filterText]);

  const fetchData = async () => {
    const rawData = await fetch(`${BASE_URL}/get-feed`);
    const result = await rawData.json();
    setData(result.data.data);
    setFilterData(result.data.data);
    setmediadata(result.data.data);
  };

  const onFilter = (searchtext) => {
    const filtered = data.filter((item) =>
      item.restaurantName.toLowerCase().includes(searchtext.toLowerCase())
    );
    setFilterData(filtered);
  };

  const onCardClick = (eventId) => {
    navigate(`/event-detail/${eventId}`);
  };

  return (
    <>
      <div className="feed">
        {filterData.length === 0 ? (
          <div className="feed__loader"></div>
        ) : (
          filterData.map((item) => (
            <Eventcards
              key={item.id}
              onClick={onCardClick}
              eventId={item.id}
              img={item.profilePicture}
              name={item.restaurantName}
              title={item.title}
            />
          ))
        )}
      </div>
    </>
  );
};

export default Home;
