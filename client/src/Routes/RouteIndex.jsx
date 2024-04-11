import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import ViewDetailsPage from "../components/layout/HackathonPages/ViewDetailsPage";
// import HackathonsPage from "../components/layout/HackathonPages/HackathonsPage";
// import RegisterLogin from "../components/Login-Register/RegisterLogin";
import PrivateRoute from "./PrivateRoutes/PrivateRoute";
// import AddHackathonForm from "../components/layout/HackathonPages/AddHackathonsForm";
// import MainPage from "../components/common/MainPages/MainPage";
// import HostHackathonsPage from "../components/layout/HostPages/HostHackathonsPage";
// import AdminMainPage from "../components/layout/AdminPages/AdminMainPage";
// import ApplyNow from "../components/layout/HackathonPages/ApplyNowPage";
// import Error404 from "../components/Error404";
// import Home from "../components/Home";
// import Layout from "../components/layout/Layout";
// import MainProfilePage from "../components/common/MainPages/MainProfilePage";

const Error404 = React.lazy(() => import("../components/Error404"));
const Layout = React.lazy(() => import("../components/layout/Layout"));
const Login = React.lazy(() => import("../components/Login-Register/Login"));
const Cart = React.lazy(() => import("../components/Cart"));
const Home = React.lazy(() => import("../components/layout/Home/Home"));
const RegisterLogin = React.lazy(() =>
  import("../components/Login-Register/RegisterLogin")
);
const HackathonsPage = React.lazy(() =>
  import("../components/layout/HackathonPages/HackathonsPage")
);
const ApplyNow = React.lazy(() =>
  import("../components/layout/HackathonPages/ApplyNowPage")
);
const ViewDetailsPage = React.lazy(() =>
  import("../components/layout/HackathonPages/ViewDetailsPage")
);
const AdminMainPage = React.lazy(() =>
  import("../components/layout/AdminPages/AdminMainPage")
);
const HostHackathonsPage = React.lazy(() =>
  import("../components/layout/HostPages/HostHackathonsPage")
);
const MainProfilePage = React.lazy(() =>
  import("../components/common/MainPages/MainProfilePage")
);
const MainPage = React.lazy(() =>
  import("../components/common/MainPages/MainPage")
);
const AddHackathonForm = React.lazy(() =>
  import("../components/layout/HackathonPages/AddHackathonsForm")
);
function Router() {
  // const condition = false;
  const loginState = useSelector((state) => state.registerLoginReducer);
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
          path: "/addNewUser",
          element:<RegisterLogin login={false} />,
        },
        {
          path: "/addNewHackathon",
          element:<AddHackathonForm />,
        },

        // {
        //   path: "/hackathons",
        //   element: <HackathonsPage />,
        // },

        {
          path: "/viewDetailPage/:hackathonId",
          element: <ViewDetailsPage />,
        },

        {
          path: "/applyNow/:hackathonId",
          element: <ApplyNow />,
        },

        {
          path: "/hackathons",
          element: (
            <MainPage
      pageName ="HackathonsPage"
     
        buttonMembers={["OPEN", "CLOSED", "UPCOMING"]}
        currentMember="OPEN"
      />
          ),
        },
        {
          path: "/AdminProfile",
          element: (
            <MainProfilePage
              name="Admin "
              role="Admin"
              tagline="Admin is God"
              about="about that host content content contentcontent content contentcontent content contentcontent content contentcontent content contentcontent content content"
            />
          ),
        },

        {
          path: "/AdminDashBoard",
          element: (
            <MainPage
              role="admin"
              pageName ="AdminMainPage"
              buttonMembers={["HACKATHONS", "HOSTS", "PARTICIPANTS"]}
              currentMember="HACKATHONS"
            />
          ),
        },



        {
          path: "/HostProfile",
          element: (
            <MainProfilePage
              name="Host Name"
              role="Host"
              tagline="Tagline of host"
              about="about that host content content contentcontent content contentcontent content contentcontent content contentcontent content contentcontent content content"
            />
          ),
        },

        {
          path: "/HostDashBoard/:hostId",
          element: (
            <MainPage
              role="host"
              buttonMembers={["OPEN", "CLOSED", "UPCOMING"]}
              currentMember="OPEN"
            />
          ),
        },

        {
          path: "/ParticipantProfile",
          element: (
            <MainProfilePage
              name="Participant Name"
              role="Participant"
              gender="male"
              designation="designation (student or developer)"
              about="about that person content content content"
            />
          ),
        },

        {
          path: "/ParticipantDashBoard/:participantId",
          element: (
            <MainPage
              role="Host"
              buttonMembers={["Applied Hackathons", "Past Hackathons"]}
              currentMember={"Applied Hackathons"}
            />
          ),
        },

        {
          element: (
            <PrivateRoute
              isAuth={
                loginState.isAuth && loginState.role === "participant"
                  ? true
                  : false
              }
            />
          ),
          children: [
            // {
            //   path: "/viewDetailPage/:hackathonId",
            //   element: <ViewDetailsPage/>,
            // },
            // {
            //   path: "/applyNowPage",
            //   element: <ViewDetailsPage/>,
            // },
          ],
        },
      ],
    },
  ]);
}

export default Router;
