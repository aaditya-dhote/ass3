// Given a list of movies as an array of objects with properties id, title, rating, year and category. Create a React component to list down all movies with rating and year. Create radio buttons to filter by category. Create a dropdown to filter by rating. Fake fetch has been provided.

import { useState, useEffect } from "react";
import { fakeFetch } from "./fakeFetch";

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [cat, setCat] = useState("All");
  const [fil, setFil] = useState("All");

  const category = (e) => {
    setCat(e.target.value);
  };
  const filter = (e) => {
    setFil(e.target.value);
  };

  const one = async () => {
    try {
      const response = await fakeFetch("https://example.com/api/movies");
      if (response.status === 200) {
        setMovies(response.data);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    one();
  }, []);

  const getFilteredMovies = () => {
    return movies.filter((movie) => {
      const categoryMatch = cat === "All" || movie.category === cat;
      const ratingMatch = fil === "All" || movie.rating >= parseFloat(fil);
      return categoryMatch && ratingMatch;
    });
  };

  const filteredMovies = getFilteredMovies();

  return (
    <div style={{ border: "2px solid pink", margin: "15px" }}>
      <h2>Category Filter:</h2>
      <input
        onChange={category}
        type="radio"
        name="category"
        value="All"
        defaultChecked={true}
      />
      <label>All</label>
      <input onChange={category} type="radio" name="category" value="Drama" />
      <label>Drama</label>
      <input onChange={category} type="radio" name="category" value="Crime" />
      <label>Crime</label>
      <input onChange={category} type="radio" name="category" value="Action" />
      <label>Action</label>

      <h2>Rating Filter:</h2>
      <select onChange={filter}>
        <option value="">All</option>
        <option value="8">8.0+</option>
        <option value="8.5">8.5+</option>
        <option value="9.0">9.0+</option>
        <option value="9.5">9.5+</option>
      </select>

      <MovieList movies={filteredMovies} />
    </div>
  );
};

const MovieList = ({ movies }) => {
  return (
    <>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h3>
            {movie.title} ({movie.year})
          </h3>
          <p>Rating: {movie.rating}</p>
        </div>
      ))}
    </>
  );
};
