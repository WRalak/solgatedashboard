'use client';

import React, { useState } from "react";
import { IoStatsChartOutline } from "react-icons/io5";
import { LuShirt } from "react-icons/lu";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { RiStoreLine } from "react-icons/ri";
import { GrGroup } from "react-icons/gr";
import { FiChevronDown } from "react-icons/fi";
import { CiCalendar } from "react-icons/ci";
import Link from "next/link";

const Dashboard = () => {
  const [daysDropdown, setDaysDropdown] = useState(false);

  const stats = [
    { icon: <IoStatsChartOutline />, label: "Total Sales (Ksh)", number: "87,000.50" },
    { icon: <LuShirt />, label: "Items Sold", number: "45" },
    { icon: <RiMoneyDollarBoxLine />, label: "Total Stock Value (Ksh)", number: "30,000.00" },
    { icon: <RiStoreLine />, label: "Best Performing Shop", number: "Vans & ChuckTaylor" },
    { icon: <GrGroup />, label: "All Customers", number: "856" },
  ];

  return (
    <div className="p-5 space-y-6">
      {/* Header Section */}
      <div className="flex justify-between items-center flex-wrap gap-4">
        <h1 className="text-sm text-slate-900 font-bold">Dashboard</h1>
        <div className="flex space-x-4">
          <Link href="/NewSeller">
            <button className="bg-blue-500 text-white px-4 py-2 rounded text-xs">New Seller</button>
          </Link>
          <Link href="/NewProduct">
            <button className="bg-orange-500 text-white px-4 py-2 rounded text-xs">New Product</button>
          </Link>
        </div>
      </div>

      {/* Bordered Account Summary Section */}
      <div className="border border-gray-300 rounded p-3 bg-white space-y-4">
  {/* Account Summary Header */}
  <div className="flex justify-between items-center flex-wrap">
    <h2 className="text-sm font-semibold">Account Summary</h2>
    <div className="relative">
      <button
        className="flex items-center text-xs px-3 py-2 border rounded-md"
        onClick={() => setDaysDropdown(!daysDropdown)}
      >
        {/* Calendar Icon */}
        <CiCalendar className="text-lg mr-2 text-gray-500" />
        {/* Button Text */}
        <span>Last 7 Days</span>
        {/* Dropdown Icon */}
        <FiChevronDown className="ml-2 text-gray-500" />
      </button>
      {daysDropdown && (
        <ul className="absolute right-0 mt-2 w-40 bg-white border rounded-xl shadow-md">
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
  <div className="flex flex-wrap gap-4">
    {stats.map((stat, index) => (
      <div
        key={index}
        className="flex flex-col items-center p-4 text-center space-y-2  flex-1 min-w-[150px]"
      >
        <span className="text-sm text-blue-500">{stat.icon}</span>
        <p className="text-xs text-gray-600">{stat.label}</p>
        {stat.number && <span className="text-sm font-bold">{stat.number}</span>}
      </div>
    ))}
  </div>
</div>


    </div>
  );
};

export default Dashboard;
