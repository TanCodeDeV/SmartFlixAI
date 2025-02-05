import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTop250Movies } from "../utils/Movie250TopSlice";
import { OPTIONS, URL } from "../utils/Constants";

const useTop250Movies = () => {
  //fetch data from api and update the store
  const dispatch = useDispatch();

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    //const url = "https://imdb236.p.rapidapi.com/imdb/top250-movies";
    try {
      const response = await fetch(URL, OPTIONS);
      const result = await response.json();
      dispatch(addTop250Movies(result));

      console.log("top250-movies");
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };
};

export default useTop250Movies;
