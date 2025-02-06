import Header from "./Header";
import useTop250Movies from "../Hooks/useTop250Movies";
import MainContainer from "./MovieContainer/MainContainer";
import SecondaryContainer from "./MovieContainer/SecondaryContainer";

const Browse = () => {
  //fetch data from api and update the store
  useTop250Movies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
