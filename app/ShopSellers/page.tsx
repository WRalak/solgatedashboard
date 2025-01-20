'use client';

import React, { useState } from "react";
import { IoStatsChartOutline } from "react-icons/io5";
import { LuShirt } from "react-icons/lu";
import { RiMoneyDollarBoxLine, RiStoreLine } from "react-icons/ri";
import { GrGroup } from "react-icons/gr";
import { FiChevronDown } from "react-icons/fi";
import { CiCalendar } from "react-icons/ci";
import Link from "next/link";
import Shop from "../components/Shop";

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
    <div className="p-4 space-y-6">
      {/* Header Section */}
      <div className="flex justify-between items-center flex-wrap gap-4">
        <h1 className="text-lg font-bold text-slate-900">Shop Seller</h1>
        <div className="flex flex-wrap gap-2">
          <Link href="/NewSeller">
            <button className="bg-blue-700 text-white px-4 py-2 rounded text-sm sm:text-xs">
              New Seller
            </button>
          </Link>
          <Link href="/NewProduct">
            <button className="bg-orange-500 text-white px-4 py-2 rounded text-sm sm:text-xs">
              New Product
            </button>
          </Link>
        </div>
      </div>

      {/* Account Summary Section */}
      <div className="border border-gray-300 rounded-lg p-4 bg-white space-y-4 max-w-[980px]">
  {/* Account Summary Header */}
  <div className="flex justify-between items-center flex-wrap gap-4">
    <h2 className="text-sm font-semibold">Account Summary</h2>
    <div className="relative">
      <button
        className="flex items-center text-xs px-3 py-2 border rounded-md"
        onClick={() => setDaysDropdown(!daysDropdown)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") setDaysDropdown(!daysDropdown);
        }}
      >
        <CiCalendar className="mr-2 text-gray-500 text-" />
        <span className="text-xs">Last 7 Days</span>
        <FiChevronDown className="ml-2 text-gray-500 text-xs" />
      </button>
      {daysDropdown && (
        <ul className="absolute right-0 mt-2 w-40 bg-white border text-xs rounded-md shadow-lg z-10">
          {["Last 7 Days", "Last 14 Days", "Last 30 Days"].map((day) => (
            <li
              key={day}
              className="px-4 py-2 text-sm hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
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
        className="flex flex-col items-center text-center p-3 "
      >
        <span className="text-xs text-blue-500 mb-2">{stat.icon}</span>
        <p className="text-xs sm:text-xs text-gray-600">{stat.label}</p>
        {stat.number && <span className="text-xs sm:text-xs font-bold">{stat.number}</span>}
      </div>
    ))}
  </div>
</div>

      <Shop />
    </div>
  );
};

export default Dashboard;
