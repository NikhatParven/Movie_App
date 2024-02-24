// 9e1477c7


import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./app.css";

const API_URL = "http://www.omdbapi.com?apikey=9e1477c7";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;



// other code
// import {useState,useEffect} from 'react';
// import React from 'react'
// import SearchIcon from './search.svg'
// import './app.css'
// import MovieCard from './MovieCard'
// const API_URL= "https://www.omdbapi.com?apikey=9e1477c7";


// const App=()=>{
//     const [movies,setMovies]=useState([]);
//     const [searchTerm,setSearchTerm]=useState(" ");

//     useEffect(()=>{
//         searchMovies('SpiderMan');
//         },[]);
//     const searchMovies =async(title)=>{
//     const response = await fetch(`${API_URL} &s=${title}`);
//     const data = await response.json();
//     setMovies(data.Search)
//     }
    
//     return (
//         <div className='app'>
//             <h1>MovieLand</h1>
//             <div className='search'>
//                 <input 
               
//                 value={searchTerm}
//                 onChange={(e)=>setSearchTerm(e.target.value)}
//                 placeholder='Search for movies'
//                 />
//                 <img 
//                 src={SearchIcon}
//                 alt="search"
//                 onClick={()=>searchMovies(searchTerm)}
//                 />
//                 </div>
//                 {
//                     movies?.length>0?
//                     (
//                     <div className="container">
//                     {movies.map((movie)=>(
//                     <MovieCard movie={movie}/>
//                     ))}
//                  </div>
//                  ):( 
//                     <div className='empty'>No movie found
//                     </div>
//                  )
//                 }
//               </div>
        
//     );
// };
// export default App;