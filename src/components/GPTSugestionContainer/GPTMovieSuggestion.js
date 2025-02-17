import React from "react";
import { useSelector } from "react-redux";
import MovieList from "../MovieContainer/MovieList";

const GPTMovieSuggestion = () => {
  const gpt = useSelector((store) => store.GPTSuggestion);
  const { movieName, movieResult } = gpt;
  console.log("Movie name and result from GPT: ");
  console.log("MovieResult Type:", typeof movieResult, movieResult);

  if (movieName == null || movieResult == null) return null;
  return (
    <div className="bg-black">
      <MovieList title={"GPT Suggesstions"} movies={movieResult}></MovieList>
    </div>
  );
};

export default GPTMovieSuggestion;
