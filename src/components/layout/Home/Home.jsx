import React, { useEffect, useState } from "react";
import { FallingLines } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import Herosection from "./Herosection";
import NavbarHoc from "../../../Hoc/NavbarHoc.";
import { action1 } from "../../../redux/actions/actions";
import Loader from "../../common/Loader";
import Card from "../../common/Card";
import Pagination from "../../common/Pagination/Pagination";
import RegisterLogin from "../../Login-Register/Register";
import { authState } from "../../../Firebase/EmailPassword";
import { auth } from "../../../Firebase/Firebase";
// import GIF from "../../utils/images/Animation.gif"

import RobotAnim from "../../../utils/herosection/robotjson.json";
import Animation from "../../common/Animation/Animation";
import Text from "../../../utils/herosection/newtext.json";
import HappeningNow from "./HappeningNow";

function Home() {
  const dispatch = useDispatch();
  const mystate1 = useSelector((state) => state.reducer1);

  const [currentPage, setCurrentPage] = useState(1);

  const displayArray = Array.from(Array(1001).keys()).slice(1);
  console.log(displayArray);
  useEffect(() => {
    // console.log(authState());
    authState();
  }, [authState]);

  // dispatch(action1);

  return (
    <div>
      <Herosection />
      <HappeningNow />

      {/* <img src={GIF} /> */}
      {/* <Animation path={Text} height="10%" width="10%" /> */}
    </div>
  );
}

export default Home;
