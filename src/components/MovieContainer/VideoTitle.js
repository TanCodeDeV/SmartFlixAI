import React from "react";

const VideoTitle = ({ title, description }) => {
  return (
    <div className=" absolute pt-[20%]  px-20 w-screen aspect-video text-white bg-gradient-to-r from-black">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="p-6 text-lg w-1/4">{description}</p>
      <div className="relative z-20">
        <button className="bg-white text-black text-lg font-medium p-4 px-14 m-2  rounded-md hover:cursor-pointer hover:bg-white/80">
          ▶️ Play
        </button>
        <button className="bg-gray-300/20 text-white text-lg font-medium p-4 px-14 m-2  rounded-md hover:cursor-pointer hover:bg-gray-300/15">
          ℹ️ More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
