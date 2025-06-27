const Upcoming = ({ Image, Name, Description, TicketPrice, Maxlimit }) => {
  return (
    <>
      <div className="upcoming__card">
        <div className="upcoming__image-wrapper">
          <img className="upcoming__image" src={Image} alt={Name} />
        </div>

        <div className="upcoming__details">
          <span><span className="upcoming__label">Title:</span> {Name}</span>
          <span><span className="upcoming__label">Description:</span> {Description}</span>
          <span><span className="upcoming__label">Ticket Price:</span> {TicketPrice}</span>
          <span><span className="upcoming__label">Max Limit:</span> {Maxlimit}</span>
        </div>
      </div>
    </>
  );
};

export default Upcoming;
