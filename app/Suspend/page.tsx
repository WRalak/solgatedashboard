'use client';

import React, { useEffect, useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { faker } from '@faker-js/faker';
import {  AiOutlineRight } from 'react-icons/ai';
import { FaArrowLeft } from "react-icons/fa6";
import Link from 'next/link';

interface Order {
  orderId: string;
  items: number;
  payment: 'Fully Paid' | 'Unpaid';
  deliveryStatus: 'Delivered' | 'Pending';
  amount: number;
}

const CustomerDashboard: React.FC = () => {
  const [recentOrders, setRecentOrders] = useState<Order[]>([]);
  const [isRightSectionVisible, setIsRightSectionVisible] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
    lastLogin: '',
    lastShopping: '',
  });

  // Generate Data Dynamically in useEffect
  useEffect(() => {
    const orders = Array.from({ length: 5 }, () => ({
      orderId: faker.string.alphanumeric(8).toUpperCase(),
      items: faker.number.int({ min: 1, max: 10 }),
      payment: faker.helpers.arrayElement(['Fully Paid', 'Unpaid']),
      deliveryStatus: faker.helpers.arrayElement(['Delivered', 'Pending']),
      amount: faker.number.int({ min: 100000, max: 999999 }),
    }));

    const info = {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      phoneNumber: faker.phone.number('+1 ###-###-####'),
      address: `${faker.location.streetAddress()}, ${faker.location.city()}, ${faker.location.state()}, ${faker.location.zipCode()}`,
      lastLogin: faker.date.recent().toISOString().split('T')[0],
      lastShopping: faker.date.past().toISOString().split('T')[0],
      
    };

    setRecentOrders(orders);
    setCustomerInfo(info);
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-4 space-y-6">
      <div className="flex items-center space-x-4">
        <Link href="/Customers" className="flex items-center text-gray-600 text-sm font-medium">
          <FaArrowLeft className="text-xs" />
          <span className="ml-1"> Customers</span>
          <AiOutlineRight className="text-xs" />
        </Link>
        <div className="flex items-center text-orange-500 text-sm font-semibold">
          <span className="mr-1">Wallace Ralak</span>
          
        </div>
      </div>
      {/* Top Sections */}
      <div className="flex flex-col lg:flex-row lg:space-x-8 space-y-6 lg:space-y-0 ml-1">
        {/* Left Section */}
        <div className="bg-white border shadow-md w-full lg:w-[580px] p-4">
          <div className="flex justify-between items-center">
            <h2 className="text-sm font-bold">Customer Info</h2>
           
      <p className='flex text-xs text-red-500'> <FaTrashAlt className="text-red-500 text-xs cursor-pointer" />Suspend Customer</p>
          </div>
          <hr className="my-2" />
          <div className="grid grid-cols-2 gap-y-1">
            <p className="text-xs">
              <span className="font-semibold">First Name:</span> {customerInfo.firstName}
            </p>
            <p className="text-xs">
              <span className="font-semibold">Email:</span> {customerInfo.email}
            </p>
            <p className="text-xs">
              <span className="font-semibold">Last Name:</span> {customerInfo.lastName}
            </p>
            <p className="text-xs">
              <span className="font-semibold">Phone Number:</span> {customerInfo.phoneNumber}
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div
          className={`bg-white border shadow-md w-full lg:w-[380px] p-4 relative transition-all duration-300 ease-in-out ${
            isRightSectionVisible ? 'block' : 'hidden lg:block'
          }`}
        >
          <button
            onClick={() => setIsRightSectionVisible(false)}
            className="absolute top-2 right-2 text-gray-500 text-lg"
          >
            ×
          </button>
          <h2 className="text-sm font-bold">Address Information</h2>
          <hr className="my-2" />
          <p className="text-xs">
            <span className="font-semibold">Shipping Address:</span> {customerInfo.address}
          </p>
        </div>
      </div>

      {/* Bottom Sections */}
      <div className="flex flex-col lg:flex-row lg:space-x-8 space-y-6 lg:space-y-0">
        {/* Left Section */}
        <div className="bg-white border shadow-md w-full lg:w-[580px] p-4">
          <h2 className="text-sm font-bold">Recent Orders</h2>
          <hr className="my-2" />
          <table className="w-full text-xs">
            <thead className="text-left font-semibold text-gray-600">
              <tr>
                <th>Order ID</th>
                <th>Items</th>
                <th>Payment</th>
                <th>Delivery Status</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order, index) => (
                <tr key={index} className="border-t">
                  <td>{order.orderId}</td>
                  <td>{order.items}</td>
                  <td>
                    <button
                      className={`px-3 py-1 rounded text-white ${
                        order.payment === 'Fully Paid'
                          ? 'bg-green-200 text-green-900'
                          : 'bg-red-200 text-red-500'
                      }`}
                    >
                      {order.payment}
                    </button>
                  </td>
                  <td>
                    <button
                      className={`px-3 py-1 rounded text-white ${
                        order.deliveryStatus === 'Delivered'
                          ? 'bg-green-200 text-green-900'
                          : 'bg-red-200 text-red-500'
                      }`}
                    >
                      {order.deliveryStatus}
                    </button>
                  </td>
                  <td>{order.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Right Section */}
        <div className="bg-white border shadow-md w-full lg:w-[380px] p-4 hidden lg:block">
          <h2 className="text-sm font-bold">Customer History</h2>
          <hr className="my-2" />
          <div className="flex justify-between text-xs">
            <p>
              <span className="font-semibold">Last Login:</span> {customerInfo.lastLogin}
            </p>
            <p>
              <span className="font-semibold">Last Shopping:</span> {customerInfo.lastShopping}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;
