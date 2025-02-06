import Header from "./Header";
import useTop250Movies from "../Hooks/useTop250Movies";
import useTopBoxOfficeUS from "../Hooks/useTopBoxOfficeUS";
import useMostPopularMovies from "../Hooks/useMostPopularMovies";
import MainContainer from "./MovieContainer/MainContainer";
import SecondaryContainer from "./MovieContainer/SecondaryContainer";

const Browse = () => {
  //fetch data from api and update the store
  useTop250Movies();
  useTopBoxOfficeUS();
  useMostPopularMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
