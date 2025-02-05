import React, { useEffect } from "react";
import Browse from "./Browse";
import Login from "./Login";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";

const Body = () => {
  

  const appRouter = createBrowserRouter([
    { path: "/", element: <Login></Login> },
    { path: "/browse", element: <Browse></Browse> },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
