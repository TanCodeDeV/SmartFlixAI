import React from "react";

const MovieCard = ({ primaryTitle, primaryImage }) => {
  return (
    <div className="w-[210px] flex-shrink-0">
      <img
        className="w-[195] h-[280px] rounded-md hover:cursor-pointer hover:h-[285px] hover:w-[200]"
        src={primaryImage}
        alt={primaryTitle}
      />
    </div>
  );
};

export default MovieCard;
