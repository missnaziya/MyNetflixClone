import "./MyNetflixClone.css";
import react,{useState} from 'react';



const PopUp = () => {


 const [popup, setPopup] = useState(false);
 const  ShowPopup = () => {
    setPopup(!popup); 
    console.log("clicked")
 }

 const ClosePopup =() => {
    setPopup(false);
 }


  return (
    <div>
      <button onClick={ShowPopup}>Open Popup</button>
     <div>
        {popup?  <div className="popup">
       
       <div className="container">
       <div className="popup_image">
                {/* image   */}
            </div >
            <div className="movie_details">
            Movie <br/>
            Watch Now

           <div className="btns">  
            <button className="play mybtn" >Play </button>
            <button className="play mybtn" onClick={ClosePopup} >Close</button>
            </div>

            </div>
       </div>
    <div  className="discription">
          ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
    </div>
      </div>:""}


     </div>
    </div>
  );
};

export default PopUp;
