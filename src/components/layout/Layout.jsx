import React from "react";
import Navbar from "./Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import MainPage from "../common/MainPages/MainPage";
import HackathonsPage from "./HackathonsPage/HackathonsPage";
import HostHackathonsPage from "./HostPages/HostHackathonsPage";
import AdminMainPage from "./AdminPages/AdminMainPage";
import ParticipantProfile from "./ParticipantPages/ParticipantProfile";
function Layout() {
  return (
    <div>
      <Navbar />
      {/* <Outlet /> */}
      {/* <MainPage /> */}
      {/* <HackathonsPage/> */}
      <HostHackathonsPage/>
      {/* <AdminMainPage/> */}
      {/* <ParticipantProfile /> */}
      <Footer />
    </div>
  );
}

export default Layout;
