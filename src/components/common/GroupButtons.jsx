import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Button } from "./Button";

function CommonButton({
  buttonName,
  className,
  activeButton,
  setActiveButton,
}) {
  return (
    <Button
      onClick={() => setActiveButton(buttonName)}
      buttonStyle={`${twMerge(
        `w-full flex justify-center font-medium px-5 py-2 transition-colors duration-100 m-[3px] rounded-md  ${
          activeButton === buttonName
            ? "border-t border-b bg-blue-500 opacity-100 text-white shadow border-blue-500 "
            : "border bg-blue-50 text-gray-700 border-blue-50 hover:bg-green-200 hover:shadow-lg "
        } `,
        className
      )}`}
    >
      {buttonName}
    </Button>
  );
}

function GroupButtons({ buttonMembers, activeButton, setActiveButton }) {
  //  const members = buttonMembers;

  return (
    <>
      <div className="flex w-full md:max-w-xl mx-4 border-2 shadow-md shadow-blue-500 border-blue-300 rounded-md  ">
        {buttonMembers.map((member, index) => (
          <CommonButton
            key={index}
            buttonName={member}
            activeButton={activeButton}
            setActiveButton={setActiveButton}
          />
        ))}
      </div>
    </>
  );
}

export default GroupButtons;
