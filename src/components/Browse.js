import Header from "./Header";
import useTop250Movies from "../Hooks/useTop250Movies";
import useTopBoxOfficeUS from "../Hooks/useTopBoxOfficeUS";
import useMostPopularMovies from "../Hooks/useMostPopularMovies";
import MainContainer from "./MovieContainer/MainContainer";
import SecondaryContainer from "./MovieContainer/SecondaryContainer";
import GPTSearchPage from "./GPTSugestionContainer/GPTSearchPage";
import { useSelector } from "react-redux";

const Browse = () => {
  //fetch data from api and update the store
  useTop250Movies();
  useTopBoxOfficeUS();
  useMostPopularMovies();

  const GPTSuggestion = useSelector(
    (store) => store.GPTSuggestion.ShowGPTSuggestion
  );

  return (
    <div>
      <Header />
      {GPTSuggestion ? (
        <GPTSearchPage />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
