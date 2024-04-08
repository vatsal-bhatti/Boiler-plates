import React from "react";
import { Button } from "./Button";

function Card({tag}) {
  let themeArray = ["blockchain", "iot/hardware", "healthcare", "government"];
  themeArray = themeArray.map((theme) => {
    return theme.toUpperCase();
  });

  return (
    <>
      <div className="relative max-w-2xl  hover:shadow-xl hover:shadow-gray-400">
        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1  bg-blue-500 rounded-lg"></span>
        <div className="relative   h-full p-3 bg-white border-2 border-blue-500 rounded-lg">
          <div className="flex items-center -mt-1">
            <svg
              className="w-8 h-8 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
            </svg>
            <h3 className="my-2 ml-3 text-2xl font-extrabold  text-gray-800   ">
              Hackathon Name  : {tag}
            </h3>
          </div>

          <div className="font-semibold  my-3 text-lg ">
            tag line Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Labore
          </div>
          <div className="my-2 text-gray-600 flex flex-col">
            <div className="flex ">
              <div className="flex flex-col  ">
                <div className="font-bold text-gray-400 ">THEME</div>
                <div className="flex flex-col md:flex-row  gap-y-2 gap-x-2 w-full h-auto ">
                  {themeArray && themeArray.length > 0 ? (
                    <>
                      {themeArray.slice(0, 3).map((theme) => (
                        <div className="font-bold text-gray-400 mt-[0.1rem] py-[0.10rem] px-3 w-fit border-2 border-gray-300 rounded-3xl">
                          {theme}
                        </div>
                      ))}
                    </>
                  ) : (
                    <>
                      <div className="font-medium text-sm text-gray-400 py-[0.10rem] px-3 w-[9.75rem] md:w-[14.4rem] border-2 border-gray-300 rounded-3xl">
                        NO RESTRICTIONS
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div className="w-fit  flex flex-col items-center font-bold justify-center ml-auto text-base text-green-600  ">
                100+
                <div>participaters</div>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-wrap md:flex-row my-6 items-center justify-center gap-3 md:gap-7 ">
            <div className="font-semibold  text-gray-800  py-3  px-6 w-fit bg-gray-100 border-0 border-gray-100 rounded-2xl  text-sm md:text-base">
              OPEN
            </div>
            <div className="font-semibold  text-gray-800  py-3  px-3 w-fit bg-gray-100 border-0 border-gray-100 rounded-2xl text-sm md:text-base ">
              STARTS DD/MM//YYYY
            </div>
            <div className="font-semibold  text-gray-800  py-3  px-6 w-fit bg-gray-100 border-0 border-gray-100 rounded-2xl text-sm md:text-base ">
              ONLINE
            </div>

            <div className="  font-semibold  text-gray-800  py-3  px-6 w-fit bg-gray-100 border-0 border-gray-100 rounded-2xl text-sm md:text-base ">
              LOCATION
            </div>
          </div>
          <div className="w-full flex items-center justify-center gap-x-7 ">
            <Button
              variant="green"
              buttonStyle="m-0 bg-green-500 font-bold py-4  px-6"
            >
              View Details
            </Button>
            <Button
              variant="primary"
              buttonStyle="m-0 bg-blue-500 font-bold py-4  px-6"
            >
              Apply Now
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
