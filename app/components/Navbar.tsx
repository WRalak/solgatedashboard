"use client";

import Image from "next/image";
import React, { useState } from "react";
import { CiBellOn, CiSearch } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";


const Navbar: React.FC = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white text-black z-50 shadow-md">
      {/* Navbar Content */}
      <div className="flex items-center justify-between px-12 md:px-20 py-6">
        {/* Logo Section */}
        <div className="flex items-center">
          <Image
            src="/Layer 2.svg"
            alt="Solgates Logo"
            width={120}
            height={80}
            className="h-8 w-auto"
          />
        </div>

        {/* Search Section */}
        <div className="flex items-center flex-grow max-w-lg mx-auto">
          {searchOpen && (
            <div className="flex w-full items-center border border-orange-500 rounded-lg bg-white shadow-md">
              <CiSearch className="text-orange-500 mx-3" />
              <input
                type="text"
                placeholder="Search..."
                className="flex-grow px-2 py-2 text-black outline-none"
              />
            </div>
          )}
          {searchOpen && (
            <div className="flex space-x-2 ml-2">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Search
              </button>
              <button
                onClick={() => setSearchOpen(false)}
                className="text-gray-700  px-2"
              >
                <IoClose size={12} />
              </button>
            </div>
          )}
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-2">
          {/* Search Icon */}
          {!searchOpen && (
            <button
              onClick={() => setSearchOpen(true)}
              className="flex items-center justify-center w-8 h-8"
            >
              <CiSearch />
            </button>
          )}

          {/* Notification Icon */}
          <button className="flex items-center justify-center w-8 h-8">
            <CiBellOn />
          </button>

          {/* Avatar and Username */}
          <div className="flex items-center space-x-2">
            <Image
              src="/user-avatar.png"
              alt="User Avatar"
              width={50}
              height={50}
              className="w-8 h-8 rounded-full border border-gray-600"
            />
            <span className="hidden sm:block">John Doe</span>
            <FaChevronDown size={12} className="text-xs" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

  