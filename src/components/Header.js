import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/UserSlice";
import { NETFLIX_LOGO, USER_LOGO } from "../utils/Constants";
import { addGPTSuggestionToggle } from "../utils/GPTSuggestionSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");

        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });
    //unsubscribe when copmopent unmounts
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const handleGPTSuggestion = () => {
    //Toggle GPT suggestion
    dispatch(addGPTSuggestionToggle());
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <div>
        <img
          className="w-[12rem] h-[3.5rem]"
          src={NETFLIX_LOGO}
          alt="Netflix-logo"
        ></img>
      </div>
      {user && (
        <div className=" flex justify-center">
          <button
            onClick={handleGPTSuggestion}
            className="bg-red-600 text-white rounded-md mr-4 m-2 p-2 h-[45px]"
          >
            GPT Suggestion
          </button>
          <div className="flex flex-col">
            <img className="w-12 h-12" src={USER_LOGO} alt="userON"></img>
            <p
              onClick={handleSignOut}
              className="mr-2 font-medium text-white hover:underline hover:cursor-pointer"
            >
              Sign Out
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
