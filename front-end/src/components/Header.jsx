/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { images } from "../constants";
import { AiOutlineCloseSquare, AiOutlineMenu } from "react-icons/ai";
import { BiDownArrow } from "react-icons/bi";

const NavItemsInfo = [
  { name: "Home", type: "link" },
  { name: "Articles", type: "link" },
  { name: "Pages", type: "dropdown", items: ["About Us", "Contact Us"] },
  { name: "Pricing", type: "link" },
  { name: "FAQ", type: "link" },
];

const NavItem = ({ item }) => {
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdownHandler = () => {
    setDropdown((currState) => {
      return !currState;
    });
  };

  return (
    <li className="relative group">
      {item.type === "link" ? (
        <>
          <a href="/" className="px-4 py-2">
            {item.name}
          </a>
          <span className="text-blue-500 absolute transition-all duration-500 font-bold right-0 top-0 opacity-0 group-hover:right-[90%] group-hover:opacity-100">
            /
          </span>
        </>
      ) : (
        <div className="flex flex-col items-center">
          <button
            href="/"
            className="px-4 py-2 flex items-center gap-1"
            onClick={toggleDropdownHandler}
          >
            {item.name}
            <BiDownArrow className="animate-all group-hover:rotate-180 duration-300" />
          </button>
          <div
            className={` ${
              dropdown ? " block" : "hidden"
            } bg-dark-soft rounded-xl lg:bg-transparent lg:hidden lg:pt-4 lg:absolute lg:bottom-0 lg:right-0 lg:transform lg:translate-y-full lg:group-hover:block lg:w-max `}
          >
            <ul className="flex flex-col shadow-lg rounded-lg overflow-hidden">
              {item.items.map((page) => (
                // eslint-disable-next-line react/jsx-key
                <a
                  href="/"
                  className="hover:bg-dark-hard hover:text-white px-4 py-2 text-white lg:text-dark-soft w-100"
                >
                  {page}
                </a>
              ))}
            </ul>
          </div>
        </div>
      )}
    </li>
  );
};

const Header = () => {
  const [navIsVisible, setNavIsVisible] = useState(false);
  const navVisibilityHandler = () => {
    setNavIsVisible((curState) => {
      return !curState;
    });
  };

  return (
    <section className="sticky left-0 right-0 top-0 z-50 bg-white">
      <header className="container mx-auto px-5 flex justify-between py-4">
        <div className="flex items-center">
          <img src={images.Logo} alt="Logo" />
        </div>
        <div className="z-50 lg:hidden">
          {navIsVisible ? (
            <AiOutlineCloseSquare
              className="w-6 h-6"
              onClick={navVisibilityHandler}
            />
          ) : (
            <AiOutlineMenu className="w-6 h-6" onClick={navVisibilityHandler} />
          )}
        </div>
        <div
          className={` ${
            navIsVisible
              ? "right-0 animate-in fade-in"
              : "right-full animate-out fade-out"
          } transition-all duration-300 z-[49] mt-[60px] lg:mt-0 fixed -right-full top-0 bottom-0 flex flex-col w-full lg:w-auto items-center justify-center lg:justify-end gap-x-9 lg:static lg:flex-row bg-dark-hard lg:bg-transparent text-white lg:text-dark-hard`}
        >
          <ul className="flex gap-x-3 gap-y-5 items-center font-semibold flex-col lg:flex-row">
            {NavItemsInfo.map((item) => {
              return <NavItem key={item.name} item={item} />;
            })}
          </ul>
          <button className="border-2 border-blue-500 px-6 py-2 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 mt-5 lg:mt-0">
            Sign in
          </button>
        </div>
      </header>
    </section>
  );
};

export default Header;
