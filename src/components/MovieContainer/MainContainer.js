import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.top250Movies);

  if (!movies || movies.length === 0) return null; // Ensure movies exist and are not empty
  const mainMovie = movies[0];

  if (!mainMovie) return null; // Additional safety check

  return (
    <div>
      <VideoTitle
        title={mainMovie.originalTitle}
        description={mainMovie.description}
      />
      <VideoBackground />
    </div>
  );
};

export default MainContainer;
