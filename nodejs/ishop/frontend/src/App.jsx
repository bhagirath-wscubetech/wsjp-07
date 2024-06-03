import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WebsiteMain from "./Pages/Website/Main";
import Home from "./Pages/Website/Home";
import Store from "./Pages/Website/Store";
import Cart from "./Pages/Website/Cart";
import Dashboard from "./Pages/Admin/Dashboard";
import AdminMain from "./Pages/Admin/Main";
import CategoryAdd from "./Pages/Admin/Category/Add";
import CategoryView from "./Pages/Admin/Category/View";

import ColorAdd from "./Pages/Admin/Color/Add";
import ColorView from "./Pages/Admin/Color/View";
import ColorEdit from "./Pages/Admin/Color/Edit";

import CategoryEdit from "./Pages/Admin/Category/Edit";
import ProductAdd from "./Pages/Admin/Product/Add";
import ProductView from "./Pages/Admin/Product/View";
import NotFound from "./Pages/Admin/NotFound";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { lsToCart } from "./reducers/cart";
import Login from "./Pages/Website/Login";
import Register from "./Pages/Website/Register";
import { lsToUser } from "./reducers/user";
import Checkout from "./Pages/Website/Checkout";
import OrderSummary from "./Pages/Website/OrderSummary";
import Trasancation from "./Pages/Admin/Trasancation";
import Order from "./Pages/Admin/Order";
import AdminLogin from "./Pages/Admin/Login";

function App() {
  const dispatch = useDispatch();
  const cart = useSelector(store => store.cart);

  useEffect(
    () => {
      dispatch(lsToCart());
      dispatch(lsToUser());
    },
    []
  )

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
            path: "store/:category_slug?",
            element: <Store />
          },
          {
            path: "cart",
            element: <Cart />
          },
          {
            path: "checkout",
            element: <Checkout />
          },
          {
            path: "order-summary/:order_id/:status?",
            element: <OrderSummary />
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
            path: "transaction",
            element: <Trasancation />
          },
          {
            path: "orders",
            element: <Order />
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
              },
              {
                path: "edit/:c_id",
                element: <CategoryEdit />
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
            path: "color",
            children: [
              {
                path: "add",
                element: <ColorAdd />
              },
              {
                path: "view",
                element: <ColorView />
              },
              {
                path: "edit/:c_id",
                element: <ColorEdit />
              }
            ]
          },
          {
            path: "*",
            element: <NotFound />
          }
        ]
      },
      {
        path: "/admin/login",
        element: <AdminLogin />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/signup",
        element: <Register />
      }
    ]
  )
  return (
    <RouterProvider router={routes} />
  );
}

export default App;
