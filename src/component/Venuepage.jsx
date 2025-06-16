const Venuepage = ({
  Name,
  Address,
  Description,
  Amenities,
  Img,
  onClick,
  venueId,
}) => {
  if (Description.length > 30) {
    var trimed_text = Description.slice(0, 30);
  }
  // console.log(name);

  return (
    <div className="cards-container" onClick={() => onClick(venueId)}>
      <img className="image" src={Img} alt="" />
      <div className="details-container">
        <span><a className="text-container">Name :</a> {Name}</span>
        <span><a className="text-container">Address :</a> {Address}</span>
        <span><a className="text-container">Description :</a> {trimed_text}...</span>
        <span className="Amenities-container">
          {Amenities.map((item) => {
            return <h6 className="Amenities">{item.name}</h6>;
          })}
        </span>
      </div>
    </div>
  );
};

export default Venuepage;
