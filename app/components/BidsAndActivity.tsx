"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FiSearch, FiArrowRight, FiArrowLeft, FiMoreHorizontal } from "react-icons/fi";
import { RiCheckDoubleLine, RiEyeLine } from "react-icons/ri";

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
  type?: string;
}

const productsData: Product[] = [
  { name: "Nike Flow 2020 ISPA ISE", description: "High-performance sports shoe", sellingPrice: 1000, bids: 10, highestBid: 1200, image: "/nike.jpg" },
  { name: "Adidas Ultra Boost 2021", description: "Comfortable running shoe", sellingPrice: 1500, bids: 8, highestBid: 1400, image: "/handbag.jpeg" },
  { name: "Puma RS-X3", description: "Stylish sports shoe", sellingPrice: 1300, bids: 15, highestBid: 1250, image: "/jacket.jpg" },
  { name: "Nike Flow 2020 ISPA ISE", description: "High-performance sports shoe", sellingPrice: 1000, bids: 10, highestBid: 1200, image: "/nike.jpg" },
  { name: "Adidas Ultra Boost 2021", description: "Comfortable running shoe", sellingPrice: 1500, bids: 8, highestBid: 1400, image: "/handbag.jpeg" },
  { name: "Puma RS-X3", description: "Stylish sports shoe", sellingPrice: 1300, bids: 15, highestBid: 1250, image: "/jacket.jpg" },
  { name: "Nike Flow 2020 ISPA ISE", description: "High-performance sports shoe", sellingPrice: 1000, bids: 10, highestBid: 1200, image: "/nike.jpg" },
  { name: "Adidas Ultra Boost 2021", description: "Comfortable running shoe", sellingPrice: 1500, bids: 8, highestBid: 1400, image: "/handbag.jpeg" },
  { name: "Puma RS-X3", description: "Stylish sports shoe", sellingPrice: 1300, bids: 15, highestBid: 1250, image: "/jacket.jpg" },
  { name: "Nike Flow 2020 ISPA ISE", description: "High-performance sports shoe", sellingPrice: 1000, bids: 10, highestBid: 1200, image: "/nike.jpg" },
  { name: "Adidas Ultra Boost 2021", description: "Comfortable running shoe", sellingPrice: 1500, bids: 8, highestBid: 1400, image: "/handbag.jpeg" },
  { name: "Puma RS-X3", description: "Stylish sports shoe", sellingPrice: 1300, bids: 15, highestBid: 1250, image: "/jacket.jpg" },
  
  

];

const activityData: Activity[] = [
  { name: "Nike Flow 2020 ISPA ISE", price: 405.51, time: "10:23 PM", image: "/nike.jpg" },
  { name: "Adidas Ultra Boost 2021", price: 1200.75, time: "9:15 AM", image: "/tshirts.jpeg" },
];

const PendingBids = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [viewAll, setViewAll] = useState(false);
  const [showActionMenu, setShowActionMenu] = useState<number | null>(null);

  const productsPerPage = 5;
  const visibleProducts = viewAll
    ? productsData
    : productsData.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage);
  const totalPages = Math.ceil(productsData.length / productsPerPage);

  const ProductRow = ({ product, index }: { product: Product; index: number }) => (
    <div className="grid grid-cols-6 md:grid-cols-7 gap-2 items-center text-sm text-gray-700 border-b py-3 px-4">
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
        {showActionMenu === index && (
          <div className="absolute top-0 left-0 bg-white p-6 z-40 shadow-md rounded-md">
            <button className="flex items-center text-xs mb-2">
              <RiCheckDoubleLine size={14} className="mr-2 text-orange-700" /> Accept the highest Bid
            </button>
            <button className="flex  items-center text-xs">
              <RiEyeLine className="mr-2 text-blue-500" /> View All Bids
            </button>
          </div>
        )}
      </span>
    </div>
  );

  return (
    <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-8 px-4 sm:px-6 md:px-8 xl:px- mt-20">
      {/* Left Section: Pending Bids */}
      <div className="lg:w-3/4  border border-gray-200 rounded-md p-4 sm:p-6">
  <div className="flex justify-between items-center mb-4 gap-4">
    <h6 className="text-base font-semibold text-gray-800">
      Pending Bids ({productsData.length})
    </h6>
    <div className="relative w-full sm:w-48">
      <input
        type="text"
        placeholder="Search"
        className="w-full border border-gray-300 rounded py-2 pl-8 pr-3 text-xs text-gray-600 focus:outline-none"
      />
      <FiSearch className="absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-500 text-[0.75rem]" />
    </div>
  </div>

  {/* Removed overflow-x-auto */}
  <div className="overflow-x-hidden">
    <div className="grid grid-cols-6 md:grid-cols-7 font-semibold text-xs text-gray-600 py-2 px-4">
      <span className="col-span-2">Product Details</span>
      <span>Selling Price (Ksh)</span>
      <span>Bids</span>
      <span>Highest Bid (Ksh)</span>
      <span>Action</span>
    </div>
    {visibleProducts.length > 0 ? (
      visibleProducts.map((product, index) => <ProductRow key={index} product={product} index={index} />)
    ) : (
      <p className="text-center text-gray-500 py-4">No products available.</p>
    )}
  </div>

  {/* Pagination */}
  <div className="flex justify-between items-center mt-4">
    <span className="text-xs text-gray-600">
      Showing {currentPage * productsPerPage - productsPerPage + 1} to{" "}
      {Math.min(currentPage * productsPerPage, productsData.length)} of {productsData.length} results
    </span>
    <div className="flex items-center text-xs space-x-2">
      <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1}>
        <FiArrowLeft />
      </button>
      <button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}>
        <FiArrowRight />
      </button>
      <button className="text-orange-600" onClick={() => setViewAll(!viewAll)}>
        {viewAll ? "View Less" : "View All"}
      </button>
    </div>
  </div>
</div>


      {/* Right Section: Recent Activity */}
      <div className="w-full lg:w-1/4 border border-gray-200 rounded-md p-4">
        <h6 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h6>
        <div className="flex flex-col space-y-4">
          {activityData.map((activity, index) => (
            <div key={index} className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <Image src={activity.image} alt={activity.name} width={48} height={48} className="object-cover rounded" />
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-gray-800">{activity.name}</span>
                  <p className="text-xs text-gray-600">{activity.type || "New Sell"}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-gray-800">Ksh {activity.price}</p>
                <span className="text-xs text-gray-500">{activity.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PendingBids;
