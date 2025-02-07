import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black absolute">
      <div className="-mt-48 relative z-20 pl-12">
        <MovieList title={"Top 250 Movies"} movies={movies?.top250Movies} />
        <MovieList
          title={"Top Box Office US"}
          movies={movies?.topBoxOfficeUs}
        />
        <MovieList
          title={"Most Popular Movies"}
          movies={movies?.mostPopularMovies}
        />
        <MovieList
          title={"Recommended for you"}
          movies={movies?.top250Movies}
        />
      </div>
    </div>
  );
};

export default SecondaryContainer;
