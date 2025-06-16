import { useEffect, useState } from "react"
import Upcoming from "../component/upcomingpage"

const Booking = () =>{

    const [Fillterbookingdata,setFillterbookingdata] = useState([])
    // console.log("======================>",Fillterbookingdata);
    

    useEffect(()=>{
        fetchbookigdata()
    },[])

    const fetchbookigdata = async () =>{
        const Booking = await fetch(`http://108.174.58.176:4000/get-all-upcoming-events`)
        const Bookingdata = await Booking.json();
        // console.log("===============>",Bookingdata);
        setFillterbookingdata(Bookingdata.data)
    }

    return(
        <>
        <div className="upcommingbooking-card">
          {
            Fillterbookingdata.length == 0 ?(<div className="loader" ></div>) :(
             Fillterbookingdata.map((item) =>
               {
                console.log("=======================>item",item);
                
                return(
                    <>
                    <Upcoming
                     Image = {item.image}
                     Name = {item.name}
                     Description = {item.description}
                     TicketPrice ={item.ticketPrice}
                     Maxlimit = {item.maxLimit}
                   /> 
                    </>
             )
               })
            )}
        </div>
       
        </>
    )
}
export default Booking