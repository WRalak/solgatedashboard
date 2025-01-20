'use client';

import React, { useState } from "react";
import '../components/Drafts'
import { IoStatsChartOutline } from "react-icons/io5";
import { LuShirt } from "react-icons/lu";
import { RiMoneyDollarBoxLine, RiStoreLine } from "react-icons/ri";
import { GrGroup } from "react-icons/gr";
import { FiChevronDown } from "react-icons/fi";
import { RiArrowLeftLine } from "react-icons/ri";
import { CiCalendar } from "react-icons/ci";
import { RiArrowRightSLine } from "react-icons/ri";
import Link from "next/link";
import Drafts from "../components/Drafts";

const Dashboard = () => {
  const [daysDropdown, setDaysDropdown] = useState(false);

  const stats = [
    { icon: <IoStatsChartOutline />, label: "Total Sales (Ksh)", number: "87,000.50" },
    { icon: <LuShirt />, label: "Items Sold", number: "45" },
    { icon: <RiMoneyDollarBoxLine />, label: "Deliveries waiting shipment (Ksh)", number: "30,000.00" },
    { icon: <RiStoreLine />, label: "Deliveries in Progress", number: "745" },
    { icon: <GrGroup />, label: "Items Delivered", number: "856" },
  ];

  return (
    <div className="p-5 space-y-6 w-full lg:w-[980px] lg:ml-[-10px] mx-auto">
      {/* Header Section */}
      <div className="flex justify-between items-center flex-wrap gap-4">
      <Link href="/ShopSellers" className="flex items-center gap-2">
  <RiArrowLeftLine className="text-lg text-slate-900" />
  <h1 className="text-sm font-bold text-slate-900">Shop/Sellers</h1>
  <RiArrowRightSLine className="text-lg text-slate-900" />
  <p className="text-sm text-gray-600">Wallace Ralak</p>
</Link>

        
        <div className="flex space-x-4">
          
          <Link href="/NewProduct">
            <button className="bg-customOrange text-white px-4 py-2 rounded text-xs">
              Suspend Seller
            </button>
          </Link>
        </div>
      </div>
      <div className="bg-orange-600 h-[250px] max-w-[980px] w-full flex items-center justify-center px-4 mx-auto ml-330">
      <h1 className="text-white font-extrabold text-6xl leading-none text-center">
        Vans & Chucktaylors
      </h1>
    </div>

      {/* Account Summary Section */}
      <div className="border border-gray-300 rounded-lg p-4 bg-white space-y-4 w-">
        {/* Account Summary Header */}
        <div className="flex justify-between items-center flex-wrap">
          <h2 className="text-md font-semibold">Account Summary</h2>
          <div className="relative">
            <button
              className="flex items-center text-sm px-3 py-2 border rounded-md"
              onClick={() => setDaysDropdown(!daysDropdown)}
            >
              <CiCalendar className="mr-2 text-lg text-gray-500" />
              <span>Last 7 Days</span>
              <FiChevronDown className="ml-2 text-gray-500" />
            </button>
            {daysDropdown && (
              <ul className="absolute right-0 text-xs mt-2 w-40 bg-white border rounded-md shadow-lg">
                {["Last 7 Days", "Last 14 Days", "Last 30 Days"].map((day) => (
                  <li
                    key={day}
                    className="px-4 py-2 text-xs hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      console.log(day);
                      setDaysDropdown(false);
                    }}
                  >
                    {day}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-3 rounded-lg shadow-sm"
            >
              <span className="text-sm text-blue-500">{stat.icon}</span>
              <p className="text-xs text-gray-600">{stat.label}</p>
              {stat.number && <span className="text-sm font-bold">{stat.number}</span>}
            </div>
          ))}
        </div>
      </div>
      <Drafts/>
    </div>
  );
};

export default Dashboard;

  
  