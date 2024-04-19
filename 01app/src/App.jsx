
import React, { useState } from "react";
import Search from "./components/Search";
import Detail from "./components/Detail";
import "./App.css";
import movies from "./data/movies"; // Import movie data

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseDetail = () => {
    setSelectedMovie(null);
  };

  const handleSearchInput = (query) => {
    setSearchQuery(query);
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>
            <span className="movie">Movie</span> Mania
          </h1>
        </div>
        <h3>
          "No more waiting in line or dealing with sold-out shows. Enjoy instant
          access to a world of movies with us."
        </h3>
      </header>
      <main>
        <Search onSearchInput={handleSearchInput} />
        <div className="container">
          {filteredMovies.map((movie) => (
            <div
              key={movie.id}
              className="item"
              onClick={() => handleMovieSelect(movie)}
            >
              <img src={movie.poster} alt={movie.title} />
              <div className="details">
                <h3 className="title movie-title">{movie.title}</h3>
                <p className="summary movie-summary">{movie.summary}</p>
              </div>
            </div>
          ))}
        </div>
        {selectedMovie && (
          <Detail movie={selectedMovie} onClose={handleCloseDetail} />
        )}
      </main>
    </div>
  );
}

export default App;



