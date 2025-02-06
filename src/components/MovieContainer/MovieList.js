import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log("from secCon");
  console.log(movies);
  if (movies == null) return null;

  return (
    <div className=" text-white p-2">
      <div className="text-2xl font-bold mb-2">{title}</div>
      <div className="flex overflow-x-scroll space-x-1 scrollbar-hide">
        {movies.map((movie) => (
          <MovieCard
            key={movie?.primaryTitle}
            primaryTitle={movie?.primaryTitle}
            primaryImage={movie?.primaryImage}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
