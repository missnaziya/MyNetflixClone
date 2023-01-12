import {useState ,useEffect} from 'react';
import './MyNetflixClone.css';
import axios from './axios';
import requests from './request';

const Banner = () =>{


const [movie, setMovie] = useState([]);

useEffect(() =>{
    async function fetchData(){
        const request = await axios.get(requests.fetchNetflixOriginals)
      setMovie(request.data.results[Math.floor(Math.random()*  request.data.results.length -1)]);
   
        
    } fetchData();
},[])

    
    
    return (
        <header className="banner"
        style={{
        backgroundSize:"cover",
        backgroundimage:`url(
     "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
        )`,
        backgroundPosition:"center"


        }}
        >
              {/* header  */}

          <div className='banner_contents'>
               {/* banner_contents */}
               <h1 className='banner_title'>hello
                {movie?.title || movie?.name || movie?.original_name}
               </h1>
          </div>
        
        <div className='buttons'>
        {/* buttons  */}
        </div>

             <div className='banner_discription'>
                    {/* banner_discription */}
             </div>

        </header>
        )
    
}
export default Banner;