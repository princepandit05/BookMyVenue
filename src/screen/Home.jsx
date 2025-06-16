import { useEffect, useState } from "react";
import Eventcards from "../component/Eventcards";
import { BASE_URL } from "../../data";
import { useNavigate, useOutletContext } from "react-router-dom";

const Home = () => {
    const [data, setData] = useState([]);
    const [filterData, setfilterData] = useState([]);
    const {filterText} = useOutletContext()
    const navgate = useNavigate()
    const {setmediadata} = useOutletContext();
    
    useEffect(() => {
      fetchData();
    },[]);

    useEffect(() =>{
         onfilter(filterText)
    },[filterText])
  
    const fetchData = async () => {
      const Rawdata = await fetch(`${BASE_URL}/get-feed`);
      const result = await Rawdata.json();
      setData(result.data.data);
      setfilterData(result.data.data);
      setmediadata(result.data.data)
      // console.log("=========>",result);
      
    };
    
    const onfilter = (searchtext) => {
      const filterData = data.filter((item) =>
        item.restaurantName.toLowerCase().includes(searchtext.toLowerCase())
      );
      setfilterData(filterData);
    };

    const onCardClick = (eventId)=>{
      navgate(`/event-detail/${eventId}`)
    }

    return (
      <>
  
         <div className="main-layout"> 
          {filterData.length == 0 ? <div className="loader" ></div>:
          filterData.map((item) => (
            <Eventcards 
              onClick={onCardClick} 
              eventId = {item.id}
              img={item.profilePicture}
              name={item.restaurantName}
              title={item.title}
            />
          ))}
        </div>
      </>
    );
  };

  export default Home