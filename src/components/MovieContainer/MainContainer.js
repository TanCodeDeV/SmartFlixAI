import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.top250Movies);

  if (movies == null) return; //early return ki.e is movie exist then only go ahead
  const mainMovie = movies[0];
  console.log("Main Movie");
  console.log(mainMovie);

  const { originalTitle, description } = mainMovie;

  return (
    <div>
      <VideoTitle title={originalTitle} description={description} />
      <VideoBackground />
    </div>
  );
};

export default MainContainer;
