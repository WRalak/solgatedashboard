"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FiSearch, FiArrowRight, FiArrowLeft, FiMoreHorizontal } from "react-icons/fi";
import { RiCheckDoubleLine, RiEyeLine } from "react-icons/ri";

// Define types for Product and Activity
interface Product {
  name: string;
  description: string;
  sellingPrice: number;
  bids: number;
  highestBid: number;
  image: string;
}

interface Activity {
  name: string;
  price: number;
  time: string;
  image: string;
  type?: string; // Optional field for activity type
}

const PendingBids: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [viewAll, setViewAll] = useState<boolean>(false);
  const [showActionMenu, setShowActionMenu] = useState<number | null>(null);

  // Sample product data
  const products: Product[] = [
    { name: "Nike Flow 2020 ISPA ISE", description: "High-performance sports shoe", sellingPrice: 1000, bids: 10, highestBid: 1200, image: "/nike.jpg" },
    { name: "Adidas Ultra Boost 2021", description: "Comfortable running shoe", sellingPrice: 1500, bids: 8, highestBid: 1400, image: "/nike.jpg" },
    { name: "Puma RS-X3", description: "Stylish sports shoe", sellingPrice: 1300, bids: 15, highestBid: 1250, image: "/converse.jpg" },
    { name: "Nike Flow 2020 ISPA ISE", description: "High-performance sports shoe", sellingPrice: 1000, bids: 10, highestBid: 1200, image: "/nike.jpg" },
    { name: "Adidas Ultra Boost 2021", description: "Comfortable running shoe", sellingPrice: 1500, bids: 8, highestBid: 1400, image: "/nike.jpg" },
    { name: "Puma RS-X3", description: "Stylish sports shoe", sellingPrice: 1300, bids: 15, highestBid: 1250, image: "/converse.jpg" },
    { name: "Nike Flow 2020 ISPA ISE", description: "High-performance sports shoe", sellingPrice: 1000, bids: 10, highestBid: 1200, image: "/nike.jpg" },
    { name: "Adidas Ultra Boost 2021", description: "Comfortable running shoe", sellingPrice: 1500, bids: 8, highestBid: 1400, image: "/nike.jpg" },
    { name: "Puma RS-X3", description: "Stylish sports shoe", sellingPrice: 1300, bids: 15, highestBid: 1250, image: "/converse.jpg" },
    { name: "Nike Flow 2020 ISPA ISE", description: "High-performance sports shoe", sellingPrice: 1000, bids: 10, highestBid: 1200, image: "/nike.jpg" },
    { name: "Adidas Ultra Boost 2021", description: "Comfortable running shoe", sellingPrice: 1500, bids: 8, highestBid: 1400, image: "/nike.jpg" },
    { name: "Puma RS-X3", description: "Stylish sports shoe", sellingPrice: 1300, bids: 15, highestBid: 1250, image: "/converse.jpg" },
    // More products...
  ];

  // Sample activity data
  const recentActivity: Activity[] = [
    { name: "Nike Flow 2020 ISPA ISE", price: 405.51, time: "10:23 PM", image: "/nike.jpg" },
    { name: "Adidas Ultra Boost 2021", price: 1200.75, time: "9:15 AM", image: "/nike.jpg" },
    // Add more activity data as needed...
  ];

  const productsPerPage = 5;
  const visibleProducts = viewAll ? products : products.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage);
  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <div className="flex flex-col lg:flex-row lg:max-w-[980px] mt-10 w-full mx- space-y-6 lg:space-y-0 lg:space-x-8 px-4 sm:px-6 md:px-8 xl:px- ">
      {/* Left Section: Pending Bids */}
      <div className="lg:w-3/4 border border-gray-200 rounded-md p-4 sm:p-6">
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

        {/* Product Table */}
        <div className="overflow-x-auto">
          <div className="grid grid-cols-6 md:grid-cols-7 gap-10 font-semibold text-xs text-gray-600 py-2 px-4">
            <span className="col-span-2">Product Details</span>
            <span className="text-center">Selling Price (Ksh)</span>
            <span className="text-center">Bids</span>
            <span className="text-center">Highest Bid (Ksh)</span>
            <span className="text-center">Action</span>
          </div>
          {visibleProducts.map((product, index) => (
            <div
              key={index}
              className="grid grid-cols-6 md:grid-cols-7 gap-2 items-center text-sm text-gray-700 border-b py-3 px-4"
            >
              {/* Product Name and Image */}
              <div className="col-span-2 flex items-start space-x-4">
                <Image src={product.image} alt={product.name} width={48} height={48} className="object-cover rounded" />
                <div>
                  <p className="font-semibold text-xs">{product.name}</p>
                </div>
              </div>
              <span className="text-center">{`Ksh ${product.sellingPrice}`}</span>
              <span className="text-center">{product.bids}</span>
              <span className="text-center">{`Ksh ${product.highestBid}`}</span>
              <span className="relative flex justify-center">
                <FiMoreHorizontal
                  className="text-orange-500 cursor-pointer"
                  onClick={() => setShowActionMenu(showActionMenu === index ? null : index)}
                />
                {showActionMenu === index && (
                  <div className="absolute top-0 left-0 bg-white p-4 z-40 shadow-md rounded-md">
                    <button className="flex items-center text-xs mb-2">
                      <RiCheckDoubleLine size={14} className="mr-2 text-orange-700" /> Accept the highest Bid
                    </button>
                    <button className="flex items-center text-xs">
                      <RiEyeLine className="mr-2 text-blue-500" /> View All Bids
                    </button>
                  </div>
                )}
              </span>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex flex-wrap justify-between items-center mt-4 gap-4">
          <span className="text-xs text-gray-600">
            Showing {currentPage * productsPerPage - productsPerPage + 1} to{" "}
            {Math.min(currentPage * productsPerPage, products.length)} of {products.length} results
          </span>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className={`p-2 ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              <FiArrowLeft />
            </button>
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              className={`p-2 text-orange-500 ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              <FiArrowRight />
            </button>
            <button onClick={() => setViewAll(!viewAll)} className="text-xs flex text-orange-500">
              {viewAll ? "View Less" : "View All"}
              <FiArrowRight />
            </button>
          </div>
        </div>
      </div>

      {/* Right Section: Recent Activity */}
      <div className="w-full lg:w-1/4 border border-gray-200 rounded-md p-4">
        <h6 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h6>
        <div className="flex flex-col space-y-4">
          {recentActivity.map((activity, index) => (
            <div key={index} className="flex justify-between items-center border-b py-2">
              <div className="flex items-center space-x-2">
                <Image src={activity.image} alt={activity.name} width={40} height={40} className="object-cover rounded" />
                <div>
                  <p className="font-semibold text-xs">{activity.name}</p>
                  <span className="text-gray-500 text-xs">{activity.time}</span>
                </div>
              </div>
              <span className="text-sm font-semibold">{`Ksh ${activity.price}`}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PendingBids;
