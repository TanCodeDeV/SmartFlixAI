import React, { use, useEffect, useRef } from "react";
import { LOGIN_BSCKGROUND_IMG } from "../../utils/Constants";
import LanguageConstant from "../../utils/LanguageConstant";
import { useDispatch, useSelector } from "react-redux";
import openai from "../../utils/OpenAI";
import client from "../../utils/openaiApi";
import { addGPTMovieResult } from "../../utils/GPTSuggestionSlice";

const GPTSearchBar = () => {
  //const languageSelected = useSelector((store) => store.config.lang);
  const languageSelected = useSelector((store) => store.config.lang) || "en"; // Default to English
  const searchText = useRef();
  const dispatch = useDispatch();

  const search_Movie_By_ID = async (movieID) => {
    const url = "https://imdb236.p.rapidapi.com/imdb/" + movieID;

    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "09d9bcf793mshfd078f7720b2f83p1d4ba5jsnb8674988f9bb",
        "x-rapidapi-host": "imdb236.p.rapidapi.com",
      },
    };

    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  };

  const search_IMDB_ID = async (movieName) => {
    const url =
      "https://movies-tv-shows-database.p.rapidapi.com/?title=" + movieName;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "09d9bcf793mshfd078f7720b2f83p1d4ba5jsnb8674988f9bb",
        "x-rapidapi-host": "movies-tv-shows-database.p.rapidapi.com",
        Type: "get-movies-by-title",
      },
    };
    const getMovieID = await fetch(url, options);
    //return getMovieID.json().movie_results;

    const data = await getMovieID.json();
    return data.movie_results?.[0]?.imdb_id || null;
  };

  const handleGPTSearchClick = async () => {
    const searchTextVal = searchText.current.value.trim();
    if (!searchTextVal) {
      console.error("Search text is empty!");
      return;
    }

    console.log("User Query:", searchTextVal);

    // GPT Query
    const gptQuery = `Act as a Movie Recommendation system and suggest 5 movies for the query: "${searchTextVal}". Only return movie names in this comma seprated format: Movie A,Movie B,Movie C`;

    const response = await client.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }], // ✅ FIXED: Using "user" role
      model: "gpt-4o",
      temperature: 1,
      max_tokens: 4096,
      top_p: 1,
    });

    if (response.choices && response.choices.length > 0) {
      console.log("Chat GPT Response:", response.choices[0].message.content);
      console.log("Chat GPT Full Response:", response);
    } else {
      console.error("No response from OpenAI!");
    }

    const responceMovieArray = response.choices[0]?.message?.content.split(",");

    //for eacg  movies first get IMDM ID
    const PromiseArrayID = responceMovieArray.map((movie) =>
      search_IMDB_ID(movie)
    );
    const imdbIDResults = await Promise.all(PromiseArrayID);
    console.log("IMDB ID Result: ");
    console.log(imdbIDResults);

    //using IDDB ID disply mobies on screen
    const PromiseArrayMovieResult = imdbIDResults.map((id) =>
      search_Movie_By_ID(id)
    );
    const imdmMovieResult = await Promise.all(PromiseArrayMovieResult);
    console.log("Search Movie in IMDB result:");
    console.log(imdmMovieResult);
    dispatch(
      addGPTMovieResult({
        movieName: responceMovieArray,
        movieResult: imdmMovieResult,
      })
    );
  };

  // const handleGPTSearchClick = async () => {
  //   const searchTextVal = searchText.current.value;
  //   console.log(searchTextVal);
  //   //make api call to openai and get GPT results

  //   const gtpQuery =
  //     "Act as a Movie Reccomdation system and sugegst some moves for the query" +
  //     searchTextVal +
  //     "only give list of 5 movie names like this 1. DDLJ 2.Kuch Kuch Hota he 3.K3G ";

  //   // const chatCompletion = await openai.chat.completions.create({
  //   //   messages: [{ role: "user", content: gtpQuery }],
  //   //   model: "gpt-3.5-turbo",
  //   // });

  //   const chatCompletion = await client.chat.completions.create({
  //     messages: [{ role: "system", content: gtpQuery }],
  //     model: "gpt-4o",
  //     temperature: 1,
  //     max_tokens: 4096,
  //     top_p: 1,
  //   });

  //   console.log(chatCompletion.choices);
  // };

  useEffect(() => {
    handleGPTSearchClick();
  }, []);

  //console.log(LanguageConstant.languageSelected.GPTSearchPlaceholder);
  return (
    <div className=" pt-[7%] flex justify-center">
      <form
        className="w-1/2 bg-black rounded-lg text-white grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <div
          className="absolute inset-0 -z-10 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${LOGIN_BSCKGROUND_IMG})` }}
        ></div>

        <input
          ref={searchText}
          className="p-4 m-4 rounded-md col-span-9 text-black"
          type="text"
          placeholder={LanguageConstant[languageSelected].GPTSearchPlaceholder}
        ></input>
        <button
          onClick={handleGPTSearchClick}
          className="bg-red-600 text-white rounded-md mr-4 mt-5 p-2 h-[50px] col-span-3"
        >
          {LanguageConstant[languageSelected].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
