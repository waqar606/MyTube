import React, { useState } from "react";

import { AiOutlineMenu } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";
import logo from "/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-between fixed top-0 w-[100%] bg-white px-6 py-2 ">
      <div className="flex items-center space-x-4  ">
        <AiOutlineMenu className="text-xl cursor-pointer" />
        <Link to={"/"}>
          <img src={logo} alt="" className="w-28 cursor-pointer" />
        </Link>
      </div>
      <div className="flex w-[35%] items-center ">
        <div className="w-[100%] px-4 py-2 border-[1px] border-gray-400 rounded-l-full">
          <input type="text" placeholder="Search" className=" outline-none" />
        </div>
        <button className="px-4 py-2 border-[1px] border-gray-400 bg-gray-100 rounded-r-full">
          <CiSearch size={"24px"} />
        </button>
        <IoMdMic
          //   size={"42px"}
          className="ml-3 w-[50px] h-[40px] border border-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-200 duration-200"
        />
      </div>
      <div className="flex space-x-5 items-center ">
        <RiVideoAddLine className="text-2xl" />
        <AiOutlineBell className="text-2xl" />
      </div>
    </div>
  );
}

export default Navbar;
