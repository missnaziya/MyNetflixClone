import React from 'react';
import Row from './Row';      
import requests from './request';
import Banner from './Banner';
import Home from './Home';
import  './MyNetflixClone.css' 
import Navbar from './Navbar';
import PopUp from './PopUp';

const MyNetflixClone = () => {



return<div className='main'>

<h1 className= 'logo'  >
NETFLIX     <Navbar/>
</h1>

{/* <Navbar /> */}

<Home />
<Banner />

<Row title='NETFLIX ORIGINALS' fetchUrl ={requests.fetchNetflixOrignals}
isLargeRow />
<Row title=' Trending Now' fetchUrl ={requests.fetchTrending} />
<Row title=' Top Rated' fetchUrl ={requests.fetchTopRated} />
<Row title=' Action Movies' fetchUrl ={requests.fetchActionMovies} />
<Row title=' Comedy Movies' fetchUrl ={requests.fetchComedyMovies} />
<Row title=' Horror Movies' fetchUrl ={requests.fetchHorrorMovies} />
<Row title=' Romance Movies' fetchUrl ={requests.fetchRomanceMovies} />
<Row title=' Documentaries' fetchUrl ={requests.fetchDocumentaries} />












</div>

}
export default MyNetflixClone ;