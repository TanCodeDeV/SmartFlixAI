import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div>
      <MovieList title={"Top 250"} movies={movies?.top250Movies} />
      <MovieList title={"Trending"} movies={movies?.top250Movies} />
      <MovieList title={"Popular"} movies={movies?.top250Movies} />
      <MovieList title={"Recommended for you"} movies={movies?.top250Movies} />
    </div>
  );
};

export default SecondaryContainer;
