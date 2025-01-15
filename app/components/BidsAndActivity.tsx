/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FiSearch, FiMoreHorizontal } from "react-icons/fi";

// Define TypeScript types for the product and activity data
interface Product {
  name: string;
  description: string;
  sellingPrice: number;
  bids: number;
  highestBid: number;
  image: string;
}

interface Activity {
  activity: string;
  date: string;
  time: string;
  image: string;
}

const BidsAndActivity: React.FC = () => {
  const [currentPage] = useState<number>(1);
  const [viewAll] = useState<boolean>(false);
  const [showActionMenu, setShowActionMenu] = useState<number | null>(null);

  // Sample products and activities with appropriate types
  const products: Product[] = [
    { name: "Nike Flow 2020 ISPA ISE", description: "High-performance sports shoe", sellingPrice: 1000, bids: 10, highestBid: 1200, image: "/nike.jpg" },
    { name: "Adidas Ultra Boost 2021", description: "Comfortable running shoe", sellingPrice: 1500, bids: 8, highestBid: 1400, image: "/adidas.jpg" },
    { name: "Puma RS-X3", description: "Stylish sports shoe", sellingPrice: 1300, bids: 15, highestBid: 1250, image: "/puma.jpg" },
  ];

  const recentActivities: Activity[] = [
    { activity: "Accepted bid for Nike Flow 2020", date: "2025-01-13", time: "14:30", image: "/nike.jpg" },
    { activity: "Viewed all bids for Adidas Ultra Boost", date: "2025-01-12", time: "10:15", image: "/adidas.jpg" },
    { activity: "Rejected a bid for Puma RS-X3", date: "2025-01-11", time: "09:45", image: "/puma.jpg" },
  ];

  const productsPerPage = 4;
  const visibleProducts = viewAll
    ? products
    : products.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage);
  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-8 px-4 sm:px-6 md:px-8 mt-20">
      {/* Pending Bids Section */}
      <div className="lg:w-3/4 border border-gray-200 rounded-md p-4 sm:p-6">
        {/* Header */}
        <div className="flex flex-wrap justify-between items-center mb-4 gap-4">
          <h6 className="text-base font-semibold text-gray-800">Pending Bids ({products.length})</h6>
          <div className="relative w-full sm:w-48">
            <input
              type="text"
              placeholder="Search"
              className="w-full border border-gray-300 rounded py-2 pl-8 pr-3 text-xs text-gray-600 focus:outline-none"
            />
            <FiSearch className="absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-500 text-[0.75rem]" />
          </div>
        </div>

        {/* Products Table */}
        <div className="overflow-x-auto">
          <div className="grid grid-cols-6 md:grid-cols-7 font-semibold text-xs text-gray-600 py-2 px-4">
            <span className="col-span-2">Product Details</span>
            <span>Selling Price (Ksh)</span>
            <span>Bids</span>
            <span>Highest Bid (Ksh)</span>
            <span>Action</span>
          </div>
          {visibleProducts.map((product, index) => (
            <div
              key={index}
              className="grid grid-cols-6 md:grid-cols-7 gap-2 items-center text-sm text-gray-700 border-b py-3 px-4"
            >
              <div className="col-span-2 flex items-start space-x-4">
                <Image src={product.image} alt={product.name} width={48} height={48} className="object-cover rounded" />
                <div>
                  <p className="font-semibold text-xs">{product.name}</p>
                </div>
              </div>
              <span>{`Ksh ${product.sellingPrice}`}</span>
              <span>{product.bids}</span>
              <span>{`Ksh ${product.highestBid}`}</span>
              <span className="relative">
                <FiMoreHorizontal
                  className="text-orange-500 cursor-pointer"
                  onClick={() => setShowActionMenu(showActionMenu === index ? null : index)}
                />
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activities Section */}
      <div className="lg:w-1/4 border border-gray-200 rounded-md p-4 sm:p-6">
        <h6 className="text-base font-semibold text-gray-800 mb-4">Recent Activities</h6>
        <ul className="space-y-4">
          {recentActivities.map((activity, index) => (
            <li key={index} className="flex items-start space-x-4">
              <Image src={activity.image} alt={activity.activity} width={40} height={40} className="rounded-full" />
              <div>
                <p className="text-sm text-gray-700 font-medium">{activity.activity}</p>
                <p className="text-xs text-gray-500">{`${activity.date}, ${activity.time}`}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BidsAndActivity;
