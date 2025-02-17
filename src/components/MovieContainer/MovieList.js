import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log("MovieList received movies:", movies); // Debugging step

  if (!Array.isArray(movies) || movies.length === 0) return null; // Ensure movies is an array

  return (
    <div className="text-white p-2">
      <div className="text-2xl font-bold mb-2">{title}</div>

      {/* Ensure only this section scrolls */}
      <div className="relative w-full">
        <div className="flex overflow-x-auto space-x-3 scrollbar-hide w-full max-w-full h-[300px]">
          {movies.map((movie, index) => (
            <MovieCard
              key={movie?.id || index} // Fallback key to avoid React warnings
              primaryTitle={movie?.primaryTitle}
              primaryImage={movie?.primaryImage}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
