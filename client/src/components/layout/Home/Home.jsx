import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Herosection from "./Herosection";
import { action1 } from "../../../redux/actions/actions";
import HappeningNow from "./HappeningNow";

function Home() {
  const dispatch = useDispatch();
  const mystate1 = useSelector((state) => state.reducer1);

  const [currentPage, setCurrentPage] = useState(1);

  // dispatch(action1);

  return (
    <div>
      <Herosection id="heroSection" />
      <HappeningNow />
    </div>
  );
}

export default Home;
