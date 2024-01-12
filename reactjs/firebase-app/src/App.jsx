import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Add from "./Pages/Add";
import View from "./Pages/View";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Play from "./Pages/Play";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSt86MyzC_0HHGoUKhGoWBrTJ2fv1mBhw",
  authDomain: "wsjp-07-55551.firebaseapp.com",
  projectId: "wsjp-07-55551",
  storageBucket: "wsjp-07-55551.appspot.com",
  messagingSenderId: "860691503851",
  appId: "1:860691503851:web:96a96a27af9071695b7cae",
  measurementId: "G-5CRBQW6MZ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {

  const routes = createBrowserRouter(
    [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            path: "/",
            element: <View />
          },
          {
            path: "/add",
            element: <Add />
          },
          {
            path: "/login",
            element: <Login/> 
          },
          {
            path:"/signup",
            element: <Signup/>
          },
          {
            path:"/play",
            element:<Play/>
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
