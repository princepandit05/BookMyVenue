const Venuepage = ({
  Name,
  Address,
  Description,
  Amenities,
  Img,
  onClick,
  venueId,
}) => {
  const trimed_text = Description.length > 30 ? Description.slice(0, 30) : Description;

  return (
    <div className="venue-card" onClick={() => onClick(venueId)}>
      <img className="venue-card__image" src={Img} alt="" />
      <div className="venue-card__details">
        <span><a className="venue-card__label">Name :</a> {Name}</span>
        <span><a className="venue-card__label">Address :</a> {Address}</span>
        <span><a className="venue-card__label">Description :</a> {trimed_text}...</span>
        <span className="venue-card__amenities">
          {Amenities.map((item, index) => (
            <h6 key={index} className="venue-card__amenity">{item.name}</h6>
          ))}
        </span>
      </div>
    </div>
  );
};

export default Venuepage;
