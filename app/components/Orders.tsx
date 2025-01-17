'use client'

import React, { useState } from "react";
import {
  FiFilter,
  FiSearch,
  FiTrash,
  FiArrowLeft,
  FiArrowRight,
} from "react-icons/fi";

interface Order {
  id: string;
  items: number;
  dateTime: string;
  customer: string;
  paymentStatus: "Paid" | "Unpaid";
  deliveryStatus: "Pending" | "Unpaid";
  amount: string;
}

interface OrdersTableProps {
  orders?: Order[];
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const OrdersTable: React.FC<OrdersTableProps> = ({
  orders = [],
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const itemsPerPage = 10;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentOrders = orders.slice(startIndex, endIndex);

  return (
    <div className="w-[980px] h-[606px] border border-gray-300 rounded-md p-4">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">Orders / Sales</h2>
        <div className="flex items-center gap-4">
          <button className="text-sm text-gray-600 flex items-center">
            <FiFilter className="mr-2" /> Filter
          </button>
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-48 border border-gray-300 rounded py-1 pl-8 pr-2 text-sm focus:outline-none text-gray-600"
            />
            <FiSearch className="absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-500 text-[1rem]" />
          </div>
        </div>
      </div>

      {/* Horizontal Rule */}
      <hr className="my-4 border-gray-300" />

      {/* Table Section */}
      {currentOrders.length > 0 ? (
        <div>
          {/* Table Headers */}
          <div className="grid grid-cols-8 font-semibold text-sm text-gray-600 py-2">
            <span>Order ID</span>
            <span>Items</span>
            <span>Date/Time</span>
            <span>Customer</span>
            <span>Payment</span>
            <span>Delivery Status</span>
            <span>Amount</span>
            <span>Action</span>
          </div>
          <hr className="border-gray-300" />

          {/* Table Rows */}
          <div className="divide-y divide-gray-200 text-sm text-gray-700">
            {currentOrders.map((order) => (
              <div key={order.id} className="grid grid-cols-8 py-2 items-center">
                <span>{order.id}</span>
                <span>{order.items}</span>
                <span>{order.dateTime}</span>
                <span>{order.customer}</span>
                <span
                  className={`font-medium ${
                    order.paymentStatus === "Paid" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {order.paymentStatus}
                </span>
                <span
                  className={`font-medium ${
                    order.deliveryStatus === "Pending" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {order.deliveryStatus}
                </span>
                <span>{order.amount}</span>
                <button className="text-red-600 hover:text-red-800">
                  <FiTrash />
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500 py-4">No orders available.</p>
      )}

      {/* Footer Section */}
      <hr className="my-4 border-gray-300" />
      <div className="flex justify-between items-center text-sm text-gray-600">
        <span>
          Showing {startIndex + 1} to {Math.min(endIndex, orders.length)} of{" "}
          {orders.length} results
        </span>
        <div className="flex items-center space-x-2">
          <button
            className="p-1 border border-gray-300 rounded hover:bg-gray-100"
            disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
          >
            <FiArrowLeft />
          </button>
          <button
            className="p-1 border border-gray-300 rounded hover:bg-gray-100"
            disabled={currentPage === totalPages}
            onClick={() => onPageChange(currentPage + 1)}
          >
            <FiArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const orders: Order[] = Array.from({ length: 142 }, (_, i) => ({
    id: `A${i + 1}B${i + 2}C${i + 3}`,
    items: Math.floor(Math.random() * 5) + 1,
    dateTime: `${i + 1} days ago`,
    customer: `Customer ${i + 1}`,
    paymentStatus: i % 2 === 0 ? "Paid" : "Unpaid",
    deliveryStatus: i % 3 === 0 ? "Pending" : "Unpaid",
    amount: `${(Math.random() * 1000).toFixed(2)}`,
  }));

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(orders.length / itemsPerPage);

  return (
    <OrdersTable
      orders={orders}
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={(page) => setCurrentPage(page)}
    />
  );
};

export default App;
