import React from "react";
import { FallingLines } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import NavbarHoc from "../Hoc/NavbarHoc.";
import { action1 } from "../redux/actions/actions";
import Loader from "./common/Loader";

function Home() {
  const dispatch = useDispatch();
  const mystate1 = useSelector((state) => state.reducer1);

  // dispatch(action1);

  return (<div>Home Component



{/* <!-- component --> */}
{/* <Loader/> */}

  </div>);
}

export default Home;
