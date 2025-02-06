import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTopBoxOfficeUs } from "../utils/Movie250TopSlice";
import { OPTIONS, BOXOFFICEUS_URL } from "../utils/Constants";

const useTopBoxOfficeUS = () => {
  //fetch data from api and update the store
  const dispatch = useDispatch();

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    //const url = "https://imdb236.p.rapidapi.com/imdb/top250-movies";
    try {
      const response = await fetch(BOXOFFICEUS_URL, OPTIONS);
      const result = await response.json();
      dispatch(addTopBoxOfficeUs(result));

      console.log("topBoxOfficeUs-movies");
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };
};

export default useTopBoxOfficeUS;
