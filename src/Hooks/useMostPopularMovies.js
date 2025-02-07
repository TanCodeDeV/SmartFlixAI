import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMostPopularMovies } from "../utils/Movie250TopSlice";
import { OPTIONS, MOSTPOPULARMOVIE_URL } from "../utils/Constants";

const useMostPopularMovies = () => {
  //fetch data from api and update the store
  const dispatch = useDispatch();

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    //const url = "https://imdb236.p.rapidapi.com/imdb/top250-movies";
    try {
      const response = await fetch(MOSTPOPULARMOVIE_URL, OPTIONS);
      const result = await response.json();
      dispatch(addMostPopularMovies(result));

      // console.log("top250-movies");
      // console.log(result);
    } catch (error) {
      console.error(error);
    }
  };
};

export default useMostPopularMovies;
