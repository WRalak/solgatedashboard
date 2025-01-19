'use client';

import React, { useState, useEffect } from 'react';
import { AiOutlinePlus, AiOutlineEye } from 'react-icons/ai';
import { RiCheckDoubleFill } from "react-icons/ri";

import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoClose } from 'react-icons/io5';

const FiltersSection: React.FC = () => {
  const [addCategoryVisible, setAddCategoryVisible] = useState(false);

  // State to track which dropdown is open
  const [visibleDropdownIndex, setVisibleDropdownIndex] = useState<number | null>(null);

  // Hydration fix: track if the component has mounted on the client
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Set to true when component is mounted on client
  }, []);

  // If it's not mounted on the client yet, render nothing to avoid hydration error
  if (!mounted) {
    return null;
  }

  return (
    <div className="w-full max-w-screen-lg h-auto p-4 bg-white border rounded shadow space-y-4">
      {/* Filters and Search Area */}
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm font-bold">Filters</p>
        <div className="flex items-center space-x-2 mt-2 sm:mt-0">
          <input
            type="text"
            placeholder="Search..."
            className="border rounded px-4 py-2 w-full sm:w-64"
          />
        </div>
      </div>
      <hr className="border-gray-300 mt-2" />

      {/* Table Headings and Data */}
      <div className="space-y-4">
        {/* Table Headings */}
        <div className="flex flex-col sm:flex-row justify-between text-slate-600 font-semibold text-xs">
          <p className="w-full sm:w-1/4">Filter Name</p>
          <p className="w-full sm:w-1/4 text-center">Subcategories</p>
          <p className="w-full sm:w-1/4 text-center">No. of Products</p>
          <p className="w-full sm:w-1/4 text-right">Action</p>
        </div>
        <hr className="border-gray-300" />
        
        {/* Table Rows */}
        {["Sale", "Kids", "Men", "Brands", "Shops", "Releases", "Women's"].map((filter, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row justify-between items-center text-xs py-2 sm:px-4 border-b"
          >
            <p className="w-full sm:w-1/4">{filter}</p>
            <p className="w-full sm:w-1/4 text-center">{Math.floor(Math.random() * 10 + 1)}</p>
            <p className="w-full sm:w-1/4 text-center">{Math.floor(Math.random() * 100 + 1)}</p>
            <div className="w-full sm:w-1/4 text-right relative">
              <button
                className="text-gray-500"
                onClick={() => {
                  // Toggle dropdown visibility for the current row
                  setVisibleDropdownIndex((prev) => (prev === index ? null : index));
                }}
              >
                <HiOutlineDotsHorizontal className="text-red-500" />
              </button>

              {/* Dropdown */}
              {visibleDropdownIndex === index && (
                <div className="absolute right-0 mt-2 bg-white border rounded shadow-lg w-40 p-2 z-50">
                  <button
                    className="flex items-center space-x-2 w-full"
                    onClick={() => {
                      setAddCategoryVisible(true);
                      setVisibleDropdownIndex(null); // Close the dropdown
                    }}
                  >
                    <RiCheckDoubleFill className="text-orange-500" />
                    <span>Add New Category</span>
                  </button>
                  <button className="flex items-center space-x-2 w-full p-2">
                    <AiOutlineEye className="text-blue-500 mr-2" />
                    <span>View Category</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Add New Category Modal */}
      {addCategoryVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-[380px] sm:w-[500px] h-[201px] rounded shadow-lg p-6 space-y-4">
            <div className="flex justify-between items-center">
              <p className="text-sm font-bold">New Category</p>
              <button onClick={() => setAddCategoryVisible(false)}>
                <IoClose className="text-gray-500" />
              </button>
            </div>
            <input
              type="text"
              placeholder="Category Name"
              className="border rounded w-full text-xs px-4 py-2"
            />
            <button className="bg-orange-500 text-white text-xs w-full py-2 rounded">
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FiltersSection;
