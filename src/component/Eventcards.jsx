const Eventcards = ({ img, name, title, onClick, eventId }) => {
  return (
    <div className="card" onClick={() => onClick(eventId)}>
      <div className="card__image-wrapper">
        <img className="card__image" src={img} alt={title} />
      </div>
      <div className="card__details">
        <span><span className="card__label">Venue :</span> {name}</span>
        <span><span className="card__label">Title :</span> {title}</span>
      </div>
    </div>
  );
};

export default Eventcards;
