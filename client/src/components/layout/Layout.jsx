import React from "react";
import Navbar from "./Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import MainPage from "../common/MainPages/MainPage";
import HackathonsPage from "./HackathonPages/HackathonsPage";
import HostHackathonsPage from "./HostPages/HostHackathonsPage";
import AdminMainPage from "./AdminPages/AdminMainPage";
import ParticipantProfile from "./ParticipantPages/ParticipantProfile";
import ViewDetailsPage from "./HackathonPages/ViewDetailsPage";
import MainListPage from "../common/MainPages/MainListItem";
import RegisterLogin from "../Login-Register/RegisterLogin";
import AddHackathonForm from "./HackathonPages/AddHackathonsForm";
import ApplyNow from "./HackathonPages/ApplyNowPage";
function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      {/* <MainPage /> */}
      {/* <HackathonsPage/> */}
      {/* <HostHackathonsPage/> */}
      {/* <AdminMainPage/> */}
      {/* <ParticipantProfile /> */}
      {/* <ViewDetailsPage/> */}
      {/* <MainListPage/> */}
      {/* <RegisterLogin login={false}/> */}
       {/* <AddHackathonForm/> */}
       {/* <ApplyNow/> */}
      <Footer id="footer" />
     
    </div>
  );
}

export default Layout;
