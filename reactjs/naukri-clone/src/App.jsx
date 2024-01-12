import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./Pages/Main";
import Home from "./Pages/Home";
import Jobs from "./Pages/Jobs";

function App() {
  const routes = createBrowserRouter(
    [
      {
        path: "/",
        element: <Main />,
        children: [
          {
            path: "",
            element: <Home />
          },
          {
            path: "jobs",
            element: <Jobs />
          }
        ]
      }
    ]
  )
  return (
    <RouterProvider router={routes} />
  );
}

export default App;
