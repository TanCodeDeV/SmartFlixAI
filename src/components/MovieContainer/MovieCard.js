import React from "react";

const MovieCard = ({ primaryTitle, primaryImage }) => {
  return (
    <div className="w-[200px] flex-shrink-0 p-1">
      <img
        className="w-[192] h-[280px] hover:cursor-pointer hover:h-[290px] hover:w-[197]"
        src={primaryImage}
        alt={primaryTitle}
      />
    </div>
  );
};

export default MovieCard;
