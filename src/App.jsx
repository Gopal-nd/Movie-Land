import { useEffect, useState } from "react";
import React from "react";
import "./App.css";
import Search from "./search.svg";
import Card from "./Card";

// API Key =  961958d0

const API_URL = "http://www.omdbapi.com?apikey=961958d0";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [newsearch, setnewsearch] = useState('');

  useEffect(() => {
    search("thor");
  }, []);

  const search = async (title) => {
    const respons = `${API_URL}&s=${title}`;
    const result = await fetch(respons);
    const data = await result.json();

    setMovies(data.Search);
  };

  // const movie1 = {
  //   Title: "Thor: Love and Thunder",
  //   Year: "2022",
  //   imdbID: "tt10648342",
  //   Type: "movie",
  //   Poster:
  //     "https://m.media-amazon.com/images/M/MV5BYmMxZWRiMTgtZjM0Ny00NDQxLWIxYWQtZDdlNDNkOTEzYTdlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
  // };

  return (
    <div className="app">
      <h1>Movie Land</h1>

      <div className="search">
        <input
          placeholder="Search for Movies"
          value={newsearch}
          onChange={(e) => setnewsearch(e.target.value)}
        />
        <img src={Search} 
        alt="search"
         onClick={() => search(newsearch)} />
      </div>
      {movies.length > 0 ? (
        <div className="container">
          {movies.map((movie)=>(
            <Card movie={movie}/>
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies Found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
