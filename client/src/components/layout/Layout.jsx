import React, { useState, useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { setRole } from "../../redux/actions/RegisterLoginActions";

function Layout() {
  const [userDetails, setUserDetails] = useState({});
  const [isAuth, setIsAuth] = useState(false);
  const [role, setrole] = useState("");
  const [roleDetails, setRoleDetails] = useState([]);

  const loginState = useSelector((state) => state.registerLoginReducer);
  const dispatch = useDispatch();


useEffect(()=>{
  const storedUserDetails =
  JSON.parse(localStorage.getItem("userDetails")) || {};
  dispatch(
    setRole(
      storedUserDetails.roleDetails,
      storedUserDetails.role,
      storedUserDetails.isAuth
    )
  );

},[])


  useEffect(() => {
    // Retrieve user details from local storage
    
    setUserDetails(loginState);
    setIsAuth(loginState.isAuth);
    setRole(loginState.role);
    setRoleDetails(loginState.roleDetails);
   
  }, [loginState]);

  // const loginState = useSelector((state) => state.registerLoginReducer);
  // console.log(loginState);
console.log(loginState)
  return (
    <div>
      <Navbar role={role} isAuth={isAuth} />
      <Outlet />
      {/* Uncomment or remove components as needed */}
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
