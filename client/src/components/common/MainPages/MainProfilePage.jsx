import React from "react";
import Animation from "../Animation/Animation";
import MaleAnimation from "../../../utils/Profile Page/Male Avatar.json"
import FemaleAnimation from "../../../utils/Profile Page/Female Avatar.json"
import HostAnimation from "../../../utils/Profile Page/HostAnimation.json"
import { Button } from "../Button";
import { useNavigate } from "react-router-dom";
function MainProfilePage({name,tagline,designation,about,role,gender}) {

const navigate = useNavigate();


  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 pt-10 pb-20  mx-auto ">
          <div className="lg:w-4/5 mx-auto flex flex-col  shadow-lg shadow-blue-500 rounded-md p-10">
          <Animation path={gender==="male"?MaleAnimation:gender ==="female"?FemaleAnimation:HostAnimation} width="50%" height="100%"  />
            <div className="lg:w-auto w-full lg:px-10 lg:py-6 mt-6 lg:mt-1 lg:mx-auto text-center    ">
            
              <div className="text-gray-900 text-2xl md:text-3xl title-font font-medium mb-2 border-b-2 border-green-500 w-fit mx-auto ">
            {name}

              </div>
              <h2 className="text-sm title-font text-gray-500 tracking-widest my-2">
               {role==="host"?tagline:designation}
              </h2>
{role==="participant"?(<><h2 className="text-sm title-font text-gray-500 tracking-widest my-2">
             gender({gender}) 
              </h2></>):null}
              

              <p className="leading-relaxed  ">
               {about}
              </p>

              {/* <div className="flex">
          <span className="title-font font-medium text-2xl text-gray-900">$58.00</span>
          <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
          <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg>
          </button>
        </div> */}


<div className="flex flex-col md:flex-row justify-center gap-1 mt-5">
  {role === "Host" && (
    <>
      <Button
        variant="green"
        buttonStyle="m-0 bg-green-500 font-bold py-4"
        onClick={() => navigate(`/HostDashBoard/1`)}
      >
        {role} Dashboard
      </Button>
      <Button
        onClick={() => navigate(`/addNewHackathon`)}
        variant="primary"
        buttonStyle="m-0 bg-blue-500 font-bold py-4"
      >
        Add New Hackathon
      </Button>
    </>
  )}
  {role === "Admin" && (<>
  
    <Button
      variant="green"
      buttonStyle="m-0 bg-green-500 font-bold py-4"
      onClick={() => navigate(`/addNewUser`)}
    >
      Add New User
    </Button>

    <Button
      variant="green"
      buttonStyle="m-0 bg-yellow-500 font-bold py-4"
      onClick={() => navigate(`/AdminDashBoard`)}
    >
      {role} Dashboard
    </Button>

      <Button
      onClick={() => navigate(`/addNewHackathon`)}
      variant="primary"
      buttonStyle="m-0 bg-blue-500 font-bold py-4"
    >
      Add New Hackathon
    </Button>
  
  </>
   
  )}
  {role === "Participant"  && (
    <Button
      variant="green"
      buttonStyle="m-0 bg-green-500 font-bold py-4"
      onClick={() => navigate(`/ParticipantDashBoard/:participantId`)}
    >
      {role} Dashboard
    </Button>
  )}
</div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MainProfilePage;
