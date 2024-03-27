import React from "react";
import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoutes/PrivateRoute";

const Error404 = React.lazy(() => import("../components/Error404"));
const Layout = React.lazy(() => import("../components/layout/Layout"));
const Login = React.lazy(() => import("../components/Login-Register/Login"));
const Cart = React.lazy(() => import("../components/Cart"));
const Home = React.lazy(() => import("../components/Home"));
const Register = React.lazy(() =>
  import("../components/Login-Register/Register")
);

function Router() {
  const condition = false;
  return createBrowserRouter([
    {
      path: "*",
      element: <Error404 />,
    },
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          element: <PrivateRoute isAuth={condition ? true : false} />,
          children: [
            {
              path: "cart",
              element: <Cart />,
            },
            {
              path: "cart",
              element: <Cart />,
            },
          ],
        },
      ],
    },
  ]);
}

export default Router;
