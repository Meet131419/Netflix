import React, { useEffect, useState } from 'react'
import './Row.css'
import axios from './axios';
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'
const Row = ({title , fetchUrl , isLargeRow = false}) => {

   const[movies,setMovies] = useState([]);
   const[trailerUrl,setTrailerUrl] = useState("")


   const base_url = "https://image.tmdb.org/t/p/original/"


   useEffect(()=>{
         async function fetchData(){
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request
         }
         fetchData()
   },[fetchUrl])

    console.log(movies)

    const handleClick = (movie) => {
      if(trailerUrl){
          setTrailerUrl("");
      } else {
          movieTrailer(movie?.name || "")
          .then((url) => {
              const urlParams = new URLSearchParams(new URL(url).search);
              setTrailerUrl(urlParams.get('v'));
          })
          .catch(() => alert('Sorry 😔 Trailer Unavailable'))
      }
  }

    const opts = {
      height: "390",
      width: "100%",
      playerVars: {
          autoplay: 1,
      }
  }



  return (
    <div className='row'>
  <h2>{title}</h2>
  <div className='row_posters'>
  {movies.map(
    (movie) =>
      ((isLargeRow && movie.poster_path) || 
      (!isLargeRow && movie.backdrop_path)) && (
        <img 
        onClick={()=> handleClick(movie)}
        className={`row_poster ${isLargeRow && "row_posterLarge"}`}
        key={movie.id}
      src={`${base_url}${
          isLargeRow ? movie.poster_path : movie.backdrop_path
      }`} alt={movie.name}/>
      )

   
  )}
  </div>
  {trailerUrl && <YouTube videoId = {trailerUrl} opts = {opts}/> }

    </div>
  )
}

export default Row