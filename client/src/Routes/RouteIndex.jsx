import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import ViewDetailsPage from "../components/layout/HackathonPages/ViewDetailsPage";
// import HackathonsPage from "../components/layout/HackathonPages/HackathonsPage";
// import RegisterLogin from "../components/Login-Register/RegisterLogin";
import PrivateRoute from "./PrivateRoutes/PrivateRoute";
// import Error404 from "../components/Error404";
// import Home from "../components/Home";
// import Layout from "../components/layout/Layout";

const Error404 = React.lazy(() => import("../components/Error404"));
const Layout = React.lazy(() => import("../components/layout/Layout"));
const Login = React.lazy(() => import("../components/Login-Register/Login"));
const Cart = React.lazy(() => import("../components/Cart"));
const Home = React.lazy(() => import("../components/layout/Home/Home"));
const RegisterLogin = React.lazy(() =>
  import("../components/Login-Register/RegisterLogin")
);
const HackathonsPage = React.lazy(() => import("../components/layout/HackathonPages/HackathonsPage"));
function Router() {
  // const condition = false;
  const loginState = useSelector((state)=>state.registerLoginReducer);
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
          element: <RegisterLogin login={true} />,
        },
        {
          path: "/register",
          element: <RegisterLogin login={false} />,
        },
        {
          path: "/hackathons",
          element: <HackathonsPage  />,
        },
        {
          element: <PrivateRoute isAuth={loginState.isAuth && loginState.role==="participant" ? true : false} />,
          children: [
            {
              path: "/viewDetailPage",
              element: <ViewDetailsPage/>,
            },
            {
              path: "/applyNowPage",
              element: <ViewDetailsPage/>,
            },
          ],
        },
      ],
    },
  ]);
}

export default Router;
