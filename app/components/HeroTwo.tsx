/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-object-type */
 'use client';

import Image from 'next/image';
import React, { useState, ChangeEvent } from 'react';
import { FaPhotoVideo } from 'react-icons/fa';
import { IoIosInformationCircleOutline } from 'react-icons/io';

interface UploadSectionProps {}

const UploadSection: React.FC<UploadSectionProps> = () => {
  const [imageFile, setImageFile] = useState<string | null>(null);
  const [videoFile, setVideoFile] = useState<string | null>(null);

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      setImageFile(URL.createObjectURL(file));
    } else {
      alert('Please upload a valid image file.');
    }
  };

  const handleVideoUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('video/')) {
      setVideoFile(URL.createObjectURL(file));
    } else {
      alert('Please upload a valid video file.');
    }
  };

  return (
    <div className="space-y-6">
        <h1>Dashboard</h1>
      {/* Top Section */}
      <div
        className="border rounded-[5px] border-gray-300 bg-white p-4"
        style={{ maxWidth: '580px' }}
      >
        <div className="flex items-center justify-between px-4 py-2 border-b">
          <p className="font-semibold text-sm text-gray-700">Images & Videos</p>
          <div className="flex space-x-4">
            <a href="#single-upload" className="text-blue-500 text-xs font-medium">
              Single Upload
            </a>
            <a href="#bulk-upload" className="text-gray-500 text-xs font-medium">
              Bulk Upload
            </a>
          </div>
        </div>
        <hr className="border-t border-gray-300 w-full" />
        <div className="grid grid-cols-2 gap-4 pt-4">
          {/* Image Upload */}
          <label
            htmlFor="image-upload"
            className="border-2 border-dashed border-blue-500 bg-blue-100 rounded-[5px] p-4 text-center cursor-pointer w-full flex justify-center items-center"
          >
            <div className="flex flex-col items-center">
              <FaPhotoVideo className="text-gray-400 mb-1 text-sm" />
              <p className="text-xs">
                <span className="text-blue-500 font-bold">Upload an image </span> or drag and drop
              </p>
              <p className="text-gray-500 text-xs">PNG, JPG, GIF up to 10MB</p>
            </div>
            <input
              type="file"
              id="image-upload"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>
          {/* Video Upload */}
          <label
            htmlFor="video-upload"
            className="border-2 border-dashed border-blue-500 bg-blue-100 rounded-[5px] p-4 text-center cursor-pointer w-full flex justify-center items-center"
          >
            <div className="flex flex-col items-center">
              <FaPhotoVideo className="text-gray-400 mb-1 text-sm" />
              <p className="text-xs">
                <span className="text-blue-500">Upload a video</span> or drag and drop
              </p>
              <p className="text-gray-500 text-xs">Vid, GIF up to 10MB</p>
            </div>
            <input
              type="file"
              id="video-upload"
              accept="video/*"
              onChange={handleVideoUpload}
              className="hidden"
            />
          </label>
        </div>
      </div>

      {/* Product Info Section */}
      <div
        className="border border-gray-300 rounded-[5px] bg-white p-6"
        style={{ maxWidth: '580px' }}
      >
        <p className="font-bold text-sm mb-4">Product Info</p>
        <div className="grid grid-cols-2 gap-4 mb-6">
          {/* Product Name */}
          <input
            type="text"
            className="w-full h-[45px] text-xs border border-gray-300 rounded-[5px] p-2"
            placeholder="Product Name"
          />
          {/* Quantity */}
          <input
            type="text"
            className="w-full h-[45px] text-xs border border-gray-300 rounded-[5px] p-2"
            placeholder="Quantity"
          />
        </div>
        <textarea
          className="w-full border text-xs border-gray-300 p-3"
          rows={4}
          placeholder="Description"
        ></textarea>
      </div>

      {/* Pricing Section */}
       
      <div
  className="border border-gray-300 rounded-[5px] bg-white p-6 space-y-4"
  style={{ maxWidth: '580px' }}
>
  <div className="grid grid-cols-2 gap-6">
    {/* Selling Price */}
    <div>
      <label className="block text-sm font-semibold">Selling Price</label>
      <input
        type="text"
        className="w-full border border-gray-300 text-xs  rounded-[5px] p-2"
        placeholder="Pricing"
      />
    </div>
    <div className="flex items-center">
      <input type="checkbox" className="w-4 h-4 text-orange-500" />
      <label className="ml-2 text-xs text-gray-500">On sale</label>
    </div>
  </div>
  <div className="grid grid-cols-2 gap-6">
    <div>
      <div className="relative mb-6">
        <input
          type="text"
          className="w-full border text-xs border-gray-300 rounded-[5px] p-2 pr-12"
          placeholder="Discount"
        />
        {/* % sign */}
        <div className="absolute right-10 top-1/2 transform -translate-y-1/2 bg-orange-200 text-orange-500 text-xs px-2 py-1 rounded-r-md">
          %
        </div>
        {/* Ksh */}
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white text-xs px-2 py-1 rounded">
          Ksh
        </div>
      </div>
    </div>
    <div>
      <input
        type="text"
        className="w-full border text-xs border-gray-300 rounded-[5px] p-2"
        placeholder="Sale Price"
      />
    </div>
    {/* Add a flex container for the 3 input fields */}
    <div className="flex space-x-4">
      <div className="relative">
        <input
          type="text"
          className="w-[170px] h-[45px] border border-gray-300 rounded-[5px] pl-2 pr-8"
          placeholder=""
        />
        <IoIosInformationCircleOutline className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-500" />
      </div>
      <div className="relative">
        <input
          type="text"
          className="w-[170px] h-[45px] border border-gray-300 rounded-[5px] pl-2 pr-8"
          placeholder=""
        />
        <IoIosInformationCircleOutline className="absolute right-2 top-1/2 transform -translate-y-1/2  text-blue-700" />
      </div>
      <div className="relative">
        <input
          type="text"
          className="w-[170px] h-[45px] border border-gray-300 rounded-[5px] pl-2 pr-8"
          placeholder=""
        />
        <IoIosInformationCircleOutline className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-500" />
      </div>
    </div>
  </div>
</div>





      {/* Store Section */}
      <div
  className="border border-gray-300 rounded-[5px] bg-white p-6 space-y-4"
  style={{ maxWidth: '580px' }}
>
  {/* Title */}
  <p className="font-bold text-sm">Store</p>

  {/* Store Name Input */}
  <div className="relative mb-6">
    <input
      type="text"
      className="w-full pl-4 pr-10 py-4 text-xs border border-gray-300 rounded-[5px]"
      placeholder="Store Name"
    />
    {/* Search Icon */}
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

  {/* Checkbox and Buttons Section */}
  <div className="flex items-center justify-between">
    {/* Checkbox */}
    <div className="flex items-center space-x-2">
      <input
        type="checkbox"
        className="peer w-4 h-4 text-orange-500 border-gray-300 rounded-md focus:ring-orange-500 checked:border-orange-500"
      />
      <label className="text-xs text-orange-500">Bids Accepted</label>
    </div>

    {/* Buttons */}
    <div className="flex space-x-2">
      <button className="bg-white border-2 border-orange-500 text-orange-500 px-4 py-2 rounded-xl">
        Cancel
      </button>
      <button className="bg-orange-500 text-white px-4 py-2 rounded-xl">
        Save
      </button>
    </div>
  </div>
</div>

    </div>
  );
};

export default UploadSection;
