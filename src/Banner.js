import React, { useEffect, useState } from 'react'
import "./Banner.css";
import axios from "./axios";
import requests from './Request';

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    // async function fetchData() {
    //   const request = await axios.get(requests.fetchNetflixOriginals)
    //   setMovie(
    //     request.data.results[
    //       Math.floor(Math.random() * request.data.results.length - 1)
    //     ]
    //   );
    //   return request;
    // }
    const fetchData = async()=>{
      const request = await axios.get(requests.fetchNetflixOriginals);
      // const data = request.data.results[2];

      const data = request.data.results[
               Math.floor(Math.random() * request.data.results.length - 1)
             ];
      console.log(data);
     setMovie(data);
     }

    fetchData();
  }, []);

  console.log(movie);
  // console.log("1" + movie.overview);

  // function truncate(string, n){
  //   return string.length > n ? string.substr(0, n-1) + '...' : string;
  // }

  return (
    <header className="banner"
     style = {{
        backgroundSize: "cover",
        backgroundImage:  `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
        backgroundPosition: "center center",
   }}>
        <div className='banner_contents'>
          <h1 className='banner_title'>
            {movie.original_name}
          </h1>
          <div className='banner_buttons'>
            <button className='banner_button'>Play</button>
            <button className='banner_button'>My List</button>
          </div>
          <h1 className='banner_description'>
            {(movie.overview)}</h1>  
            {/* {movie.original_name} */}
           </div> 
           <div className='banner--fadeBottom' />
    </header>
  );
}

export default Banner;