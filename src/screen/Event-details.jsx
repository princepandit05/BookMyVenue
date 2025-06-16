
import { useOutletContext, useParams } from "react-router-dom";

const Eventdetails = ()=>{

     const {mediadata} = useOutletContext();
     const { eventId } = useParams();

    //  console.log("===========>",filtereventdata);
   return(
    <>
     
      
      {
        mediadata.map((item)=>{
          
            return(
              <>
              { item.id == eventId ? item.media.map((url)=>{
                  // console.log(url);
                  
                  return(
                    <>
                     <div className="eventimage-container">
                      <img className="images" src={url} alt="" />
                      </div>
                    </>
                  )
                })
                :""
              }
              </>
            )
            
           
        })
      }

     
    </>
)
}

export default Eventdetails