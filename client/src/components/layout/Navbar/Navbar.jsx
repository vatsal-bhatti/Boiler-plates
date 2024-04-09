import React, { useState } from "react";
import LogoImg from "../../../utils/images/Hackfolic.png";
import { Link } from "react-router-dom";
import { Button } from "../../common/Button";

function NavItem({ item, itemBlue, setItemBlue }) {
  return (
    <Link to="#">
      <div
        onClick={() => setItemBlue(item)}
        className={`w-full px-4 py-2 font-bold rounded-md transition-colors duration-100  border-2  hover:border-blue-500 hover:shadow-xl ${
          itemBlue === item
            ? "text-blue-500    focus:text-gray-700  border-blue-500  hover:border-gray-300"
            : "text-gray-700 border-white hover:text-blue-500 focus:text-blue-500 "
        }  focus:bg-blue-100 focus:outline-none`}
      >
        {item}
      </div>
    </Link>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [itemBlue, setItemBlue] = useState("Home");
  const navigation = ["Home", "About","Hackathons","ContactUs" ];

  return (
    <>
      <div className="w-full border-2 shadow-md ">
        <nav className="container relative flex flex-wrap items-center justify-between mx-auto lg:justify-between ">
          {/* Logo */}
          <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
            <Link to="#">
              <div className="flex items-center space-x-2 text-2xl font-bold text-blue-500">
                <img src={LogoImg} alt="logo" className="h-24 " />
              </div>
            </Link>
            {/* Hamburger menu */}
            <Button
              buttonStyle="relative w-10 h-10 text-gray-500 bg-white rounded-sm focus:outline-none lg:hidden"
              onClick={() => setOpen(!open)}
            >
              <span className="sr-only">Open main menu</span>
              <div className="absolute block w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                <span
                  aria-hidden="true"
                  className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                    open ? "rotate-45" : "-translate-y-1.5"
                  }`}
                ></span>
                <span
                  aria-hidden="true"
                  className={`block absolute h-0.5 w-5 bg-current   transform transition duration-500 ease-in-out ${
                    open && "opacity-0"
                  }`}
                ></span>
                <span
                  aria-hidden="true"
                  className={`block absolute h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out ${
                    open ? "-rotate-45" : "translate-y-1.5"
                  }`}
                ></span>
              </div>
            </Button>
            {/* Menu */}
            <div
              className={`flex flex-col border-t-2 border-gray-200 items-center w-full mb-5 ${
                open ? "block" : "hidden"
              } lg:hidden`}
            >
              {navigation.map((item, index) => (
                <NavItem
                  key={index}
                  item={item}
                  itemBlue={itemBlue}
                  setItemBlue={setItemBlue}
                />
              ))}
              <Link to="#">
                <Button
                  variant="primary"
                  buttonStyle="w-full px-6 py-2 my-0 me-0 bg-green-500 text-center text-base font-bold text-base border-2 transition-colors duration-100 hover:bg-white hover:text-gray-700 hover:border-gray-300 hover:shadow-xl"
                >
                  Sign In
                </Button>
              </Link>
            </div>
          </div>

          {/* Desktop menu */}
          <div className="hidden text-center lg:flex lg:items-center">
            <ul className="items-center justify-end flex-1 pt-6 lg:pt-0 list-reset lg:flex">
              {navigation.map((menu, index) => (
                <li className="mr-3 nav__item" key={index}>
                  <NavItem
                    item={menu}
                    itemBlue={itemBlue}
                    setItemBlue={setItemBlue}
                  />
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden mr-3 space-x-3 lg:flex nav__item">
            <Link to="#">
              <Button
                variant="primary"
                buttonStyle="px-6 py-2 mb-0 bg-green-500 font-bold text-base border-2 transition-colors duration-100 hover:bg-white hover:text-gray-700 hover:border-blue-500 hover:shadow-xl"
              >
                Sign In
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
