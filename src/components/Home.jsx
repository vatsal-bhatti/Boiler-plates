import React, { useEffect, useState } from "react";
import { FallingLines } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import NavbarHoc from "../Hoc/NavbarHoc.";
import { action1 } from "../redux/actions/actions";
import Loader from "./common/Loader";
import Card from "./common/Pagination/Card";
import Pagination from "./common/Pagination/Pagination";
import RegisterLogin from "./Login-Register/Register";
import { authState } from "../Firebase/EmailPassword";
import { auth } from "../Firebase/Firebase";



function Home() {
  const dispatch = useDispatch();
  const mystate1 = useSelector((state) => state.reducer1);

const [currentPage,setCurrentPage] = useState(1);


const displayArray = Array.from(Array(1001).keys()).slice(1)
console.log(displayArray);
useEffect(()=>{
  // console.log(authState());
  authState()
},[authState])

  // dispatch(action1);

  return (<div>Home Component

{/* <div className=""><Pagination data={displayArray}  recordsPerPage={10}/> 
</div> */}
{/* <div className="gap-5 grid grid-cols-1 lg:grid-cols-2 w-fit p-6 mx-auto">

<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
</div> */}

<RegisterLogin login={true}/>






  </div>);
}

export default Home;
