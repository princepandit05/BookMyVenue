const Upcoming = ({ Image,Name,Description,TicketPrice,Maxlimit }) => {
  return (
    <>
      <div className="upcomming-container">
         <div className="imageupcomming-images">
         <img className="upcomming-images" src={Image}></img>
         </div>
       
        <div className="upcomming-details">
        <span><span className="upcommingtext">Title :</span> {Name}</span>
        <span> <span className="upcommingtext">Description :</span> {Description}</span>
        <span><span className="upcommingtext">TicketPrice :</span> {TicketPrice}</span>
        <span><span className="upcommingtext">Maxlimit : </span>{Maxlimit}</span>
        </div>
      </div>
    </>
  );
};

export default Upcoming;
