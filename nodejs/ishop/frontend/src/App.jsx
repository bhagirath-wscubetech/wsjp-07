import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WebsiteMain from "./Pages/Website/Main";
import Home from "./Pages/Website/Home";
import Store from "./Pages/Website/Store";
import Cart from "./Pages/Website/Cart";
import Dashboard from "./Pages/Admin/Dashboard";
import AdminMain from "./Pages/Admin/Main";
import CategoryAdd from "./Pages/Admin/Category/Add";
import CategoryView from "./Pages/Admin/Category/View";
import ProductAdd from "./Pages/Admin/Product/Add";
import ProductView from "./Pages/Admin/Product/View";
import NotFound from "./Pages/Admin/NotFound";

function App() {
  const routes = createBrowserRouter(
    [
      {
        path: '/',
        element: <WebsiteMain />,
        children: [
          {
            path: "",
            element: <Home />
          },
          {
            path: "store",
            element: <Store />
          },
          {
            path: "cart",
            element: <Cart />
          }
        ]
      },
      {
        path: '/admin',
        element: <AdminMain />,
        children: [
          {
            path: "",
            element: <Dashboard />
          },
          {
            path: "category",
            children: [
              {
                path: "add",
                element: <CategoryAdd />
              },
              {
                path: "view",
                element: <CategoryView />
              }
            ]
          },
          {
            path: "product",
            children: [
              {
                path: "add",
                element: <ProductAdd />
              },
              {
                path: "view",
                element: <ProductView />
              }
            ]
          },
          {
            path:"*",
            element: <NotFound/>
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
