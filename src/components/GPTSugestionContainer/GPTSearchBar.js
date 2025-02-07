import React from "react";
import { LOGIN_BSCKGROUND_IMG } from "../../utils/Constants";

const GPTSearchBar = () => {
  return (
    <div className=" pt-[7%] flex justify-center">
      <form className="w-1/2 bg-black rounded-lg text-white grid grid-cols-12">
        <div
          className="absolute inset-0 -z-10 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${LOGIN_BSCKGROUND_IMG})` }}
        ></div>

        <input
          className="p-4 m-4 rounded-md col-span-9"
          type="text"
          placeholder="Enter Search Keyword"
        ></input>
        <button className="bg-red-600 text-white rounded-md mr-4 mt-5 p-2 h-[50px] col-span-3">
          Search
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
