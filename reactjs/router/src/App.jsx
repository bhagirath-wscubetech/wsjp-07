import { RouterProvider, createBrowserRouter, useLocation } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Gallery from "./Pages/Gallery";

function App() {

  

  const routes = createBrowserRouter(
    [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about-us",
        element: <About />
      },
      {
        path: "/gallery",
        element: <Gallery />
      }
    ]
  )

  return (
    <RouterProvider router={routes} />
  );
}

export default App;
