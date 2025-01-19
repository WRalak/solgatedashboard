'use client';

import React, { useState, useEffect } from 'react';
import { FaEllipsisV, FaTrashAlt } from 'react-icons/fa';
import { MdOutlineBlock } from 'react-icons/md';
import { faker } from '@faker-js/faker';

interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
  joined: string;
  orders: number;
}

const CustomerSection: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const itemsPerPage = 10;
  const totalItems = 142;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Generate random customer data on the client
  useEffect(() => {
    const generatedCustomers: Customer[] = Array.from(
      { length: totalItems },
      (_, i) => ({
        id: i + 1,
        name: faker.name.fullName(),
        email: faker.internet.email(),
        phone: faker.phone.number('+1 ###-###-####'),
        joined: faker.date.past().toISOString().split('T')[0],
        orders: Math.floor(Math.random() * 50),
      })
    );
    setCustomers(generatedCustomers);
  }, []);

  // Paginated data for the current page
  const paginatedData = customers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="max-w-full lg:max-w-[980px] mx-auto mt-4 p-4 bg-white border shadow-md">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between mb-4 gap-2">
        <h1 className="text-2xl font-bold">Customer</h1>
        <input
          type="text"
          placeholder="Search Customers..."
          className="px-4 py-2 text-sm border rounded w-full md:w-60"
        />
      </div>

      {/* Table Headers */}
      <div className="hidden md:flex text-sm font-semibold text-gray-600 border-b py-2">
        <div className="w-2/12">Customer Name</div>
        <div className="w-3/12">Email</div>
        <div className="w-2/12">Phone</div>
        <div className="w-2/12">Joined</div>
        <div className="w-1/12">Orders</div>
        <div className="w-2/12 text-center">Action</div>
      </div>

      {/* Table Rows */}
      {paginatedData.map((customer) => (
        <div
          key={customer.id}
          className="flex flex-wrap md:flex-nowrap items-center text-sm border-b py-2 hover:bg-gray-50"
        >
          <div className="w-full md:w-2/12">{customer.name}</div>
          <div className="w-full md:w-3/12">{customer.email}</div>
          <div className="w-full md:w-2/12">{customer.phone}</div>
          <div className="w-full md:w-2/12">{customer.joined}</div>
          <div className="w-full md:w-1/12">{customer.orders}</div>
          <div className="w-full md:w-2/12 text-center relative">
            <FaEllipsisV
              className="cursor-pointer text-gray-500"
              onClick={() =>
                setDropdownOpen(dropdownOpen === customer.id ? null : customer.id)
              }
            />
            {dropdownOpen === customer.id && (
              <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg z-10">
                <button
                  className="flex items-center px-3 py-2 text-sm text-red-600 hover:bg-gray-100 w-full"
                  onClick={() => alert('Delete Customer')}
                >
                  <FaTrashAlt className="mr-2" /> Delete
                </button>
                <button
                  className="flex items-center px-3 py-2 text-sm text-yellow-600 hover:bg-gray-100 w-full"
                  onClick={() => alert('Suspend Customer')}
                >
                  <MdOutlineBlock className="mr-2" /> Suspend Customer
                </button>
              </div>
            )}
          </div>
        </div>
      ))}

      {/* Pagination */}
      <div className="flex flex-wrap items-center justify-between mt-4 gap-2">
        <p className="text-sm text-gray-600">
          Showing {(currentPage - 1) * itemsPerPage + 1} to{' '}
          {Math.min(currentPage * itemsPerPage, customers.length)} of{' '}
          {customers.length} results
        </p>
        <div className="flex space-x-2">
          <button
            className={`px-2 py-1 border rounded ${
              currentPage === 1 ? 'text-gray-300' : 'text-gray-600'
            }`}
            onClick={handlePrevious}
            disabled={currentPage === 1}
          >
            ‹
          </button>
          <button
            className={`px-2 py-1 border rounded ${
              currentPage === totalPages ? 'text-gray-300' : 'text-gray-600'
            }`}
            onClick={handleNext}
            disabled={currentPage === totalPages}
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerSection;
