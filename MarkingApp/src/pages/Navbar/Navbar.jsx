import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className=" w-full flex bg-gray-100 p-4 px-24 ">
      <div className="flex justify-center items-center mx-96 gap-20">
        <Link to={"/"}>
          <div className="text-gray-800 hover:text-gray-600">
            <h2>Home</h2>
          </div>
        </Link>
        <Link to={"/convener"}>
          <div className="text-gray-800 hover:text-gray-600">
            <h2>Convener</h2>
          </div>
        </Link>
        <Link to={"/student"}>
          <div className="text-gray-800 hover:text-gray-600">
            <h2>Student</h2>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
