import React from 'react'
import './banner.css'
import axios from '../../utils/axios'
import requests from '../../utils/requests'
import { useEffect, useState } from 'react'


const Banner = () => {
  const [movie, setMovie] = useState({});

  
  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        
        setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length)]);
      } catch (error) {
        console.log("error",error);
      }
  })()
  }, []);
  
  const truncate = (str,n) => {
    return str?.length > n ?` ${ str.substring(0, n - 1) } ...`:str
  }
  return (
    <div
      className="banner"
      style={{
       
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className="banner_button">
          <button className="playButton">play</button>
          <button className="listButton">My List</button>
        </div>
        <div className='overview'>
       
          <p>{truncate(movie?.overview, 150)}</p>
        </div>
       
      </div>
      <div className="banner_fadeBottom" />
       
    </div>
  );
  
}

export default Banner