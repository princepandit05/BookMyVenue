import { useOutletContext, useParams } from "react-router-dom";

const Eventdetails = () => {
  const { mediadata } = useOutletContext();
  const { eventId } = useParams();

  return (
    <>
      {mediadata.map((item) => (
        <>
          {item.id == eventId
            ? item.media.map((url, index) => (
                <div className="event-media__image-wrapper" key={index}>
                  <img className="event-media__image" src={url} alt="" />
                </div>
              ))
            : ""}
        </>
      ))}
    </>
  );
};

export default Eventdetails;
