
import { useEffect, useState } from "react";
import "./App.css";
import MoviesList from "./components/MoviesList";

import Navbar from "./components/Navbar";

function App() {
  const [moviesData, setMoviesData] = useState("")
  const [renderMovies, setRenderMovies] = useState([]);
  const [inputValue, setInputValue]  = useState('')
  
  useEffect(()=>{
    async function renderMovies(movieName = "inception"){
     const response = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=78757657&s=${movieName}`);
     const res = await response.json();
     console.log("res", res);
     setMoviesData(res.Search)
    }
    renderMovies(inputValue)
  }, [inputValue])

  
  return (
    <div className="parentDiv">
   <Navbar inputValue={inputValue} setInputValue={setInputValue}/>
   <MoviesList moviesData={moviesData} setMoviesData={setMoviesData} renderMovies={renderMovies} setRenderMovies={setRenderMovies} inputValue={inputValue} setInputValue={setInputValue} />
   </div>
  );
}

export default App;
