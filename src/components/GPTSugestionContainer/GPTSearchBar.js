import React from "react";
import { LOGIN_BSCKGROUND_IMG } from "../../utils/Constants";
import LanguageConstant from "../../utils/LanguageConstant";
import { useSelector } from "react-redux";

const GPTSearchBar = () => {
  //const languageSelected = useSelector((store) => store.config.lang);
  const languageSelected = useSelector((store) => store.config.lang) || "en"; // Default to English

  //if (languageSelected === null) return;
  console.log("serch bar language");
  //   console.log(languageSelected);
  console.log(
    LanguageConstant?.[languageSelected]?.GPTSearchPlaceholder ||
      "Default Placeholder"
  );

  //console.log(LanguageConstant.languageSelected.GPTSearchPlaceholder);
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
          placeholder={LanguageConstant[languageSelected].GPTSearchPlaceholder}
        ></input>
        <button className="bg-red-600 text-white rounded-md mr-4 mt-5 p-2 h-[50px] col-span-3">
          {LanguageConstant[languageSelected].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
