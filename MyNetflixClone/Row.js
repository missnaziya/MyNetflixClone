import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./MyNetflixClone.css";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const base_url = "https://image.tmdb.org/t/p/original/";
  const [movies, setMovies] = useState([]);
  const [popData,setPopData]= useState();
  const [movieName, setMovieName] = useState();
  const [overview,setOverview] = useState();

  const [popup, setPopup] = useState(false);
  const ShowPopup = (value) => {
    setPopData(value?.backdrop_path)
    // setMovieName(value?. original_title : value?.original_name);
    setMovieName(value?.original_title);
    setOverview(value.overview);



      
    setPopup(!popup);
    console.log("clicked");
  };
  const ClosePopup = () => {
    setPopup(false);
  };

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

console.log(movies)
  
  return (
    <div className="row">
      <h2> {title} </h2>

      <div className="row_posters">
        {movies.map((movie) => (
          <img
            onClick={()=>ShowPopup(movie)}
            className={`row_poster && ${isLargeRow && "row_posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.backdrop_path : movie?.backdrop_path
            }`}
            alt={movie.name}
          />
          ))}
          {/* console.log(movie.data);  */}
      </div>
   
      <div>
        {popup && (
          <div className="popup-new">
            <div className="popup">
              <div className="container">
                <div className="popup_image">{/* image   */}
                <img className="mypopup_image"
           
                
            src={`${base_url}${popData}`}
            // src="https://www.bing.com/th?id=OIP.SjcnMEPJORHBiBBQpma9fQHaLG&w=204&h=306&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
            alt={movies.name}
          />

                </div>
                <div className="movie_details">
                  {/* Movie  */}
                    {movieName} <br />
                  Watch Now
                  <div className="btns">
                    <button className="play mybtn">Play </button>
                    <button className="play mybtn" onClick={ClosePopup}>
                      Close
                    </button>
                  </div>
                </div>
              </div>
              <div className="discription">
                {/* ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum. */}

                {overview}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Row;
