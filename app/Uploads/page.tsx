'use client';

import React, { useState, useRef } from 'react';
import { AiOutlinePicture } from "react-icons/ai";
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaChevronRight } from "react-icons/fa6";
import Link from 'next/link';

const Page = () => {
  const [activeUpload, setActiveUpload] = useState("single");
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      console.log('Selected file:', files[0]);
    }
  };

  return (
    <div className="space-y-6 px-4 md:px-8">
      {/* Header Section */}
      <div className="flex items-center space-x-4">
        <Link href="/Dashboard" className="text-gray-700 hover:text-gray-900">
          <IoIosArrowRoundBack className="text-lg" />
        </Link>

        <h1 className="text-lg font-semibold flex mr-10 items-center space-x-2">
          <Link href="/Dashboard">
            <span className="text-gray-900">Dashboard</span>
          </Link>
          <span className="text-gray-500">
            <FaChevronRight className="text-xs" />
          </span>
          <span className="text-orange-600">New Product</span>
        </h1>
      </div>

      {/* Upload Section */}
      <section className="w-full max-w-[580px]">
        <div className="border border-gray-300 rounded p-4 space-y-4">
          <div className="flex justify-between">
            <p className="text-gray-700 text-sm font-semibold">Upload Product</p>
            <div className="flex space-x-4">
              <p
                className={`text-xs font-medium cursor-pointer ${
                  activeUpload === "single" ? "text-blue-500" : "text-gray-500"
                }`}
                onClick={() => setActiveUpload("single")}
              >
                Single Upload
              </p>
              <p
                className={`text-xs font-medium cursor-pointer ${
                  activeUpload === "bulk" ? "text-blue-500" : "text-gray-500"
                }`}
                onClick={() => setActiveUpload("bulk")}
              >
                Bulk Upload
              </p>
            </div>
          </div>
          <hr className="border-t border-gray-300 w-full" />

          <div className="border-dotted border-2 border-blue-500 bg-blue-50 h-[100px] flex items-center justify-center rounded">
            <div className="text-center">
              <AiOutlinePicture className="text-xl text-center align-middle text-blue-500 mb-1" />
              <p className="text-xs text-gray-500">
                <span
                  className="text-blue-500 cursor-pointer"
                  onClick={handleUploadClick}
                >
                  Click to upload the file
                </span>{" "}
                or drag and drop
              </p>
            </div>
          </div>

          <input
            ref={fileInputRef}
            type="file"
            className="hidden"
            onChange={handleFileChange}
            multiple={activeUpload === "bulk"}
          />
        </div>
      </section>

      {/* Store Section */}
      <section className="w-full max-w-[580px] border border-gray-300 rounded bg-white p-6 space-y-4">
        <p className="font-bold text-sm">Store</p>
        <hr className="border-t border-gray-300 w-full" />
        <div className="relative">
          <input
            type="text"
            className="w-full pl-4 pr-10 py-2 text-xs border border-gray-300 rounded-md"
            placeholder="Store Name"
          />
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 4a7 7 0 1110 10 7 7 0 01-10-10z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.3-5.3"
              />
            </svg>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="peer w-4 h-4 text-orange-500 border-gray-300 rounded-md focus:ring-orange-500 checked:border-orange-500"
            />
            <label className="text-xs text-orange-500">Bids Accepted</label>
          </div>
          <div className="flex space-x-2">
            <button className="bg-white border-2 text-xs border-orange-500 text-orange-500 px-4 py-2 rounded">
              Cancel
            </button>
            <button className="bg-orange-500 text-white text-xs px-4 py-2 rounded">
              Save
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
