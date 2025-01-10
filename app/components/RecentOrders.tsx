'use client'

import React, { useState } from "react";
import { FiSearch, FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";

const RecentOrders = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [viewAll, setViewAll] = useState(false);

  const orders = [
    { id: "A0B1C003", items: "1", date: "32 mins ago", customer: "John Doe", payment: "Paid", delivery: "Delivered", amount: "52,432.34" },
    { id: "A0B1C077", items: "3", date: "3 days ago", customer: "Jane Smith", payment: "Unpaid", delivery: "Pending", amount: "582,325.03" },
    { id: "A0B1C072", items: "4", date: "34 mins ago", customer: "Jane Smith", payment: "Unpaid", delivery: "Pending", amount: "582,525.03" },
    { id: "A0B1C074", items: "5", date: "45 mins ago", customer: "Jane Smith", payment: "Unpaid", delivery: "Pending", amount: "582,325.05" },
    { id: "A0B1C070", items: "2", date: "31 mins ago", customer: "Sam Wilson", payment: "Paid", delivery: "Delivered", amount: "581,325.03" },
    { id: "A0B1C075", items: "3", date: "5 days ago", customer: "Anna Johnson", payment: "Paid", delivery: "Delivered", amount: "582,325.23" },
    { id: "A0B1C085", items: "4", date: "11 mins ago", customer: "Michael Lee", payment: "Unpaid", delivery: "Pending", amount: "582,325.04" },
    { id: "A0B1C025", items: "3", date: "39 mins ago", customer: "Chris Brown", payment: "Paid", delivery: "Delivered", amount: "589,325.03" },
    { id: "A0B1C055", items: "4", date: "32 mins ago", customer: "Patricia Evans", payment: "Paid", delivery: "Delivered", amount: "592,325.03" },
    { id: "A0B1C005", items: "5", date: "38 mins ago", customer: "Sam Wilson", payment: "Paid", delivery: "Delivered", amount: "582,325.03" },
    { id: "A0B1C035", items: "5", date: "39 mins ago", customer: "Anna Johnson", payment: "Paid", delivery: "Delivered", amount: "1,181.87" },
    { id: "A0B1C045", items: "4", date: "56 mins ago", customer: "Michael Lee", payment: "Unpaid", delivery: "Pending", amount: "18,543.00" },
    // ... other orders
  ];

  const ordersPerPage = 5;
  const visibleOrders = viewAll
    ? orders
    : orders.slice((currentPage - 1) * ordersPerPage, currentPage * ordersPerPage);

  const totalPages = Math.ceil(orders.length / ordersPerPage);

  const handleDelete = (id) => {
    console.log("Delete order with ID:", id);
  };

  return (
    <div className="p-6 bg-gray-50 rounded-md">
      <div className="flex justify-between items-center mb-4 flex-wrap">
        <h2 className="text-lg font-semibold text-gray-800 w-full md:w-auto">Recent Orders</h2>
        <div className="relative w-full md:w-1/3">
          <input
            type="text"
            placeholder="Search orders..."
            className="border border-gray-300 rounded-md py-2 pl-8 pr-3 text-sm text-gray-600 focus:outline-none focus:ring-1 focus:ring-orange-400 w-full"
          />
          <FiSearch className="absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-500 text-lg" />
        </div>
      </div>

      {/* Orders Table */}
      <div className="border border-gray-200 rounded-xs overflow-hidden">
        <div className="flex items-center font-semibold text-xs text-gray-600 bg-gray-100 py-2 px-4 flex-wrap">
          <span className="flex-1 text-left">Order ID</span>
          <span className="flex-1 text-left">Items</span>
          <span className="flex-1 text-left">Date/Time</span>
          <span className="flex-1 text-left">Customer</span>
          <span className="flex-1 text-left">Payment</span>
          <span className="flex-1 text-left">Delivery</span>
          <span className="flex-1 text-left">Amount</span>
          <span className="flex-1 text-left">Action</span>
        </div>

        {visibleOrders.map((order) => (
          <div
            key={order.id}
            className="flex items-center text-xs text-gray-700 border-b py-2 px-4 flex-wrap"
          >
            <span className="flex-1 text-left">{order.id}</span>
            <span className="flex-1 text-left">{order.items}</span>
            <span className="flex-1 text-left">{order.date}</span>
            <span className="flex-1 text-left">{order.customer}</span>
            <span className="flex-1 text-left">
              <button
                className={`py-1 px-3 rounded-full text-xs ${
                  order.payment === "Paid"
                    ? "bg-green-100 text-green-600"
                    : "bg-red-100 text-red-600"
                }`}
              >
                {order.payment}
              </button>
            </span>
            <span className="flex-1 text-left">
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
            <span className="flex-1 text-left">{order.amount}</span>
            <span className="flex-1 text-left">
            <RiDeleteBinLine   
                className=" cursor-pointer"
                onClick={() => handleDelete(order.id)}
              />
            </span>
          </div>
        ))}
      </div>

      {/* Pagination & View All */}
      <div className="flex justify-between items-center mt-4 flex-wrap">
        <span className="text-xs text-gray-600">
          Showing {currentPage * ordersPerPage - ordersPerPage + 1} to{" "}
          {Math.min(currentPage * ordersPerPage, orders.length)} of {orders.length} results
        </span>
        <div className="flex items-center space-x-4 mt-2 sm:mt-0">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className={`${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <FiArrowLeft />
          </button>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            className={`text-orange-500 ${
              currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <FiArrowRight />
          </button>
          <button
            onClick={() => setViewAll(!viewAll)}
            className="py-2 flex px-4 text-xs  text-orange-500"
          >
            {viewAll ? "View Less Orders" : "View All Orders"}
            <FiArrowRight className="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecentOrders;
