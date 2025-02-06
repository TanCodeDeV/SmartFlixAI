import React from "react";
import { VIDEO_URL } from "../../utils/Constants";

const VideoBackground = () => {
  return (
    <div>
      <video autoPlay loop muted className="w-screen aspect-video">
        <source src={VIDEO_URL} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoBackground;
