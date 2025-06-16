const Eventcards = ({img,name,title,onClick,eventId}) => {
    return (
      <div className="cards-container" onClick={()=>onClick(eventId)} >
        <div className="image-container">
          <img src={img}></img>
          </div>
          <div className="details-container"  >
            <span><a className="text-container">Venue :</a>{name}</span>
            <span><a className="text-container">Title :</a> {title}</span>
          </div>
      </div>
    );
  };

  export default Eventcards