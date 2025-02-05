import Header from "./Header";
import useTop250Movies from "../Hooks/useTop250Movies";

const Browse = () => {
  //fetch data from api and update the store
  useTop250Movies();

  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
