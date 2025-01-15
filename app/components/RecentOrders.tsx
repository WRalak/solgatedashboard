'use client';

import React, { useState } from "react";
import { FiSearch, FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";

interface Order {
  id: string;
  items: string;
  date: string;
  customer: string;
  payment: string;
  delivery: string;
  amount: string;
}

const RecentOrders: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [viewAll, setViewAll] = useState<boolean>(false);

  const orders: Order[] = [
    { id: "A0B1C003", items: "1", date: "32 mins ago", customer: "John Doe", payment: "Fully Paid", delivery: "Delivered", amount: "52,432.34" },
    { id: "A0B1C077", items: "3", date: "3 days ago", customer: "Jane Smith", payment: "Unpaid", delivery: "Pending", amount: "582,325.03" },
    // Add more orders as needed
  ];

  const ordersPerPage = 4;
  const totalPages = Math.ceil(orders.length / ordersPerPage);

  const visibleOrders = viewAll
    ? orders
    : orders.slice((currentPage - 1) * ordersPerPage, currentPage * ordersPerPage);

  const handleDelete = (id: string) => {
    console.log("Delete order with ID:", id);
  };

  return (
    <div
      className={`border border-gray-200 rounded-md overflow-hidden p-4 md:p-6 ${
        viewAll ? "h-auto" : "lg:h-[324px] lg:w-[980px]"
      } transition-all duration-300`}
    >
      {/* Title and Search */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 space-y-3 md:space-y-0">
        <h2 className="text-base font-semibold text-gray-800">Recent Orders</h2>
        <div className="relative w-full md:w-48">
          <input
            type="text"
            placeholder="Search"
            className="w-full border border-gray-300 rounded py-2 pl-8 pr-3 text-sm text-gray-600 focus:outline-none"
          />
          <FiSearch className="absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-500 text-base" />
        </div>
      </div>

      {/* Orders Table */}
      <div
        className={`w-full overflow-x-auto ${
          viewAll ? "max-h-full" : "max-h-[200px]"
        } transition-all duration-300`}
      >
        {/* Table Header */}
        <div className="hidden md:grid grid-cols-8 font-semibold text-sm text-gray-600 py-2 px-4">
          <span>Order ID</span>
          <span>Items</span>
          <span>Date/Time</span>
          <span>Customer</span>
          <span>Payment</span>
          <span>Delivery</span>
          <span>Amount</span>
          <span>Action</span>
        </div>
        {/* Table Rows */}
        {visibleOrders.map((order) => (
          <div
            key={order.id}
            className="grid grid-cols-1 md:grid-cols-8 gap-2 items-center text-sm text-gray-700 border-b py-2 px-4"
          >
            <span>{order.id}</span>
            <span>{order.items}</span>
            <span>{order.date}</span>
            <span>{order.customer}</span>
            <span>
              <button
                className={`py-1 px-3 rounded-full text-xs ${
                  order.payment.trim() === "Fully Paid"
                    ? "bg-green-100 text-green-600"
                    : "bg-red-100 text-red-600"
                }`}
              >
                {order.payment}
              </button>
            </span>
            <span>
              <button
                className={`py-1 px-3 rounded-full text-xs ${
                  order.delivery === "Delivered"
                    ? "bg-green-100 text-green-600"
                    : "bg-red-100 text-red-600"
                }`}
              >
                {order.delivery}
              </button>
            </span>
            <span>{order.amount}</span>
            <span>
              <RiDeleteBinLine
                className="cursor-pointer text-gray-600"
                onClick={() => handleDelete(order.id)}
              />
            </span>
          </div>
        ))}
      </div>

      {/* Pagination & View All */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-4 space-y-3 md:space-y-0">
        <span className="text-sm text-gray-600">
          Showing {viewAll ? `1 to ${orders.length}` : `${currentPage * ordersPerPage - ordersPerPage + 1} to ${
            Math.min(currentPage * ordersPerPage, orders.length)
          }`} of {orders.length} results
        </span>
        <div className="flex items-center space-x-2">
          {!viewAll && (
            <>
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                className={`p-2 ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                <FiArrowLeft />
              </button>
              <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                className={`p-2 text-orange-500 ${
                  currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                <FiArrowRight />
              </button>
            </>
          )}
          <button
            onClick={() => setViewAll(!viewAll)}
            className="text-sm flex items-center text-orange-500"
          >
            {viewAll ? "View Less Orders" : "View All Orders"}
            <FiArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecentOrders;
