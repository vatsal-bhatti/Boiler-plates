import React from "react";
import { Button } from "../Button";

function MainListItem({ cardData }) {


  console.log(cardData)
  return (
    <>
      <div
        href="#"
        className="bg-gray-100 flex flex-col md:flex-row text-gray-700 border-l-8 border-blue-500 rounded-md shadow-md shadow-blue-500 px-3 py-2 w-auto  h-auto md:h-[70px]"
      >
        <div className="w-full">
        <div className="font-bold">
        {cardData?cardData.firstName:"Name"} 
        </div>
        
        <div className="text-gray-500 font-bold text-sm pt-1">
          <span>   {cardData ?cardData.email : "email"  } </span>
          {/* <span>MCQs: {mcqs}</span> */}
        </div>
        </div>
       
        <div className="w-full space-x-3   flex mt-2 md:mt-0 justify-center p-[1px] md:p-[4px] ">
       <Button
          variant="green"
          buttonStyle="m-0 bg-green-500 text-xs md:text-sm font-bold py-1 md:py-1  "
        >
          View Details
        </Button>
        <Button
          variant="primary"
          buttonStyle="m-0 bg-blue-500 text-xs md:text-sm font-bold py-1 md:py-1  "
        >
          Apply Now
        </Button>
        <Button
          variant="danger"
          buttonStyle="m-0 bg-red-700 text-xs md:text-sm font-bold md:py-1  px6"
        >
          Delete
        </Button>
       </div>   
      </div>




     
    </>
  );
}
export default MainListItem;
