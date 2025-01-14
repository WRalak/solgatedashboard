'use client';

import React, { useState } from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";

const Page = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [countryCode, setCountryCode] = useState('+254');

  const countryCodes = ['+1', '+44', '+91', '+254', '+81', '+33']; // Example country codes

  return (
    <div className="ml-[330px] space-y-6">
      {/* Section 1: Customer Details */}
      <section className="w-[580px] h-[241px] border border-gray-300 rounded-md bg-white p-6">
  <h2 className="text-sm font-semibold text-gray-700">Enter Customer Details</h2>
  <hr className="border-gray-300 my-4" />
  <div className="grid grid-cols-3 gap-4">
    {/* First Name */}
    <input
      type="text"
      className="w-[260px] h-[45px] border border-gray-300 rounded-md text-xs px-3"
      placeholder="First Name"
    />

    {/* Phone Number */}
    <input
      type="text"
      className="w-[260px] h-[45px] border border-gray-300 rounded-md text-xs px-3"
      placeholder="Phone Number"
    />

    {/* Last Name */}
    <input
      type="text"
      className="w-[260px] h-[45px] border border-gray-300 rounded-md text-xs px-3"
      placeholder="Last Name"
    />

    {/* Last Name (2nd occurrence) */}
    <input
      type="text"
      className="w-[260px] h-[45px] border border-gray-300 rounded-md text-xs px-3"
      placeholder="Last Name"
    />

    {/* ID Number */}
    <input
      type="text"
      className="w-[260px] h-[45px] border border-gray-300 rounded-md text-xs px-3"
      placeholder="ID Number"
    />

    {/* Gender */}
    <div className="relative">
      <select
        className="w-[260px] h-[45px] border border-gray-300 rounded-md text-xs px-3 appearance-none"
      >
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
        ▼
      </div>
    </div>
  </div>
</section>


      {/* Section 2: Shop Details */}
      <section className="w-[580px] h-[121px] border border-gray-300 rounded-md bg-white p-6">
  <h2 className="text-sm font-semibold text-gray-700">Shop Details</h2>
  <hr className="border-gray-300 my-2" />
  <div className="flex space-x-4">
    {/* Name of the Shop */}
    <input
      type="text"
      className="w-[260px] h-[45px] text-xs border border-gray-300 rounded-md px-3"
      placeholder="Name of the shop"
    />

    {/* Shop Location with Icon */}
    <div className="relative">
      <input
        type="text"
        className="w-[260px] h-[45px] text-xs border border-gray-300 rounded-md px-3 pr-10"
        placeholder="Shop Location"
      />
      <MdOutlineLocationOn className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
    </div>
  </div>
</section>


      {/* Section 3: Wallet Details */}
      <section className="w-[580px] h-[259px] border border-gray-300 rounded-md bg-white p-6">
  <h2 className="text-sm font-semibold text-gray-700">Wallet Details</h2>
  <hr className="border-gray-300 my-4" />
  <p className="text-xs text-gray-600 mb-4">
    How would the customer like to receive their funds?
  </p>

  {/* Radio Buttons in Column */}
  <div className="flex flex-col space-y-2 mb-4">
    <div className="flex items-center space-x-2">
      <input
        type="radio"
        id="mpesa"
        name="funds"
        className="w-5 h-5 text-orange-500 focus:ring-orange-500 cursor-pointer"
        onChange={() => setSelectedOption('mpesa')}
        checked={selectedOption === 'mpesa'}
      />
      <label htmlFor="mpesa" className="text-gray-700 text-xs cursor-pointer">
        Through Mpesa
      </label>
    </div>
    <div className="flex items-center space-x-2">
      <input
        type="radio"
        id="bank"
        name="funds"
        className="w-5 h-5 text-orange-500 focus:ring-orange-500 cursor-pointer"
        onChange={() => setSelectedOption('bank')}
        checked={selectedOption === 'bank'}
      />
      <label htmlFor="bank" className="text-gray-700 text-xs cursor-pointer">
        Through Bank
      </label>
    </div>
  </div>

  {/* Mpesa Option */}
  {selectedOption === 'mpesa' && (
    <div className="flex space-x-4 mb-4">
      <div className="flex w-[260px] h-[45px] border border-gray-300 rounded-md items-center px-3">
        {/* Country Code Dropdown */}
        <select
          className="appearance-none bg-transparent text-gray-700 text-xs focus:outline-none cursor-pointer"
          value={countryCode}
          onChange={(e) => setCountryCode(e.target.value)}
        >
          <option value="" disabled>
            +
          </option>
          {countryCodes.map((code, index) => (
            <option key={index} value={code}>
              {code}
            </option>
          ))}
        </select>

        {/* Separator Line */}
        <div className="w-[1px] h-[60%] bg-gray-300 mx-3" />

        {/* Mpesa Number Placeholder */}
        <input
          type="text"
          className="flex-1 bg-transparent text-xs text-gray-700 placeholder-gray-500 focus:outline-none"
          placeholder="Mpesa Number"
        />
      </div>
      <input
        type="text"
        className="w-[260px] h-[45px] border border-gray-300 rounded-md text-xs px-3"
        placeholder="Mpesa Name"
      />
    </div>
  )}

  {/* Bank Option */}
  {selectedOption === 'bank' && (
    <div className="grid grid-cols-2 gap-4 mb-4">
      <input
        type="text"
        className="w-[260px] h-[45px] border border-gray-300 rounded-md text-xs px-3"
        placeholder="Bank Name"
      />
      <div className="relative">
        <input
          type="text"
          className="w-[260px] h-[45px] border border-gray-300 rounded-md text-xs px-3"
          placeholder="Bank Branch"
        />
        <AiOutlineSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
      </div>
      <input
        type="text"
        className="w-[260px] h-[45px] border border-gray-300 rounded-md text-xs px-3"
        placeholder="Account Number"
      />
      <div className="relative">
        <input
          type="text"
          className="w-[260px] h-[45px] border border-gray-300 rounded-md text-xs px-3"
          placeholder="SWIFT Code"
        />
        <AiOutlineSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
      </div>
    </div>
  )}

  {/* Buttons */}
  <div className="flex justify-end space-x-4">
    <button className="bg-white border border-orange-500 text-orange-500 px-4 py-2 rounded">
      Cancel
    </button>
    <button className="bg-orange-500 text-white px-4 py-2 rounded">
      Save
    </button>
  </div>
</section>



    </div>
  );
};

export default Page;
