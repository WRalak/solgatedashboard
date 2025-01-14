'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { IoIosArrowRoundBack } from "react-icons/io";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa6";

const Page = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [countryCode, setCountryCode] = useState('+254');

  const countryCodes = ['+1', '+44', '+91', '+254', '+255', '+256']; // Example country codes

  return (
    <div className="space-y-6">
       <div className="flex items-center ">
        {/* Left arrow link */}
        <Link href="/Dashboard" className="text-gray-700 hover:text-gray-900">
          <IoIosArrowRoundBack className="text-lg " />
        </Link>

        {/* Dashboard > New Product */}
        <h1 className="text-lg font-semibold flex mr-10 items-center space-x-2">
          <Link href="/Dashboard">
            <span className="text-gray-900">Dashboard</span>
          </Link>
          <span className="text-gray-500">
            <FaChevronRight className="text-xs" />
          </span>
          <span className="text-orange-600">New Seller</span>
        </h1>
      </div>
      {/* Section 1: Customer Details */}
      <section className="w-full  mx-auto border border-gray-300 rounded-md bg-white p-6">
        <h2 className="text-sm font-semibold text-gray-700">Enter Customer Details</h2>
        <hr className="border-gray-300 my-4" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            className="w-full h-[45px] border border-gray-300 rounded-md text-xs px-3"
            placeholder="First Name"
          />
           <input
            type="text"
            className="w-full h-[45px] border border-gray-300 rounded-md text-xs px-3"
            placeholder="Last Name"
          />
          <input
            type="text"
            className="w-full h-[45px] border border-gray-300 rounded-md text-xs px-3"
            placeholder="Phone Number"
          />
          <input
            type="text"
            className="w-full h-[45px] border border-gray-300 rounded-md text-xs px-3"
            placeholder="Email"
          />
          <input
            type="text"
            className="w-full h-[45px] border border-gray-300 rounded-md text-xs px-3"
            placeholder="ID Number"
          />
          <div className="relative">
            <select
              className="w-full h-[45px] border border-gray-300 rounded-md text-xs px-3 appearance-none"
            >
              <option value="" className='text-gray-400'> Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
            <FaChevronDown className='text-xs' />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Shop Details */}
      <section className="w-full  mx-auto border border-gray-300 rounded-md bg-white p-6">
        <h2 className="text-sm font-semibold text-gray-700">Shop Details</h2>
        <hr className="border-gray-300 my-2" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            className="w-full h-[45px] text-xs border border-gray-300 rounded-md px-3"
            placeholder="Name of the shop"
          />
          <div className="relative">
            <input
              type="text"
              className="w-full h-[45px] text-xs border border-gray-300 rounded-md px-3 pr-10"
              placeholder="Shop Location"
            />
            <MdOutlineLocationOn className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>
      </section>

      {/* Section 3: Wallet Details */}
      <section className="w-full  mx-auto border border-gray-300 rounded-md bg-white p-6">
        <h2 className="text-sm font-semibold text-gray-700">Wallet Details</h2>
        <hr className="border-gray-300 my-4" />
        <p className="text-xs  mb-4">
          How would the customer like to receive their funds?
        </p>

        {/* Radio Buttons */}
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
            <label htmlFor="mpesa" className=" text-xs cursor-pointer">
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
            <label htmlFor="bank" className=" text-xs cursor-pointer">
              Through Bank
            </label>
          </div>
        </div>

        {/* Mpesa Option */}
        {selectedOption === 'mpesa' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="flex items-center border border-gray-300 rounded-md px-3">
              <select
                className="bg-transparent text-xs text-gray-700 focus:outline-none cursor-pointer"
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
              >
                {countryCodes.map((code, index) => (
                  <option key={index} value={code}>
                    {code}
                  </option>
                ))}
              </select>
              <div className="w-[1px] h-[60%] bg-gray-300 mx-3" />
              <input
                type="text"
                className="flex-1 text-xs text-gray-700 placeholder-gray-500 focus:outline-none"
                placeholder="Mpesa Number"
              />
            </div>
            <input
              type="text"
              className="w-full h-[45px] border border-gray-300 rounded-md text-xs px-3"
              placeholder="Mpesa Name"
            />
          </div>
        )}

        {/* Bank Option */}
        {selectedOption === 'bank' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              className="w-full h-[45px] border border-gray-300 rounded-md text-xs px-3"
              placeholder="Account Name"
            />
            <input
              type="text"
              className="w-full h-[45px] border border-gray-300 rounded-md text-xs px-3"
              placeholder="Bank Name"
          />
            <input
              type="text"
              className="w-full h-[45px] border border-gray-300 rounded-md text-xs px-3"
              placeholder="Branch"
            />
            <input
              type="text"
              className="w-full h-[45px] border border-gray-300 rounded-md text-xs px-3"
              placeholder="Account Number"
            />
          </div>
        )}

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
