import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log("from secCon");
  console.log(movies);
  if (movies == null) return null;

  return (
    <div className="bg-black text-white p-4">
      <div className="text-2xl font-bold mb-2">{title}</div>
      <div className="flex overflow-x-scroll space-x-4 p-2 scrollbar-hide">
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
