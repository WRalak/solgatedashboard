'use client';

import React, { useState, useEffect } from 'react';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { IoTrashOutline } from 'react-icons/io5';
import { RiArrowLeftLine } from "react-icons/ri";
import { RiArrowRightLine } from "react-icons/ri";
import Link from 'next/link';

const DataSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Active');
  const [dropdownVisible, setDropdownVisible] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;
  const totalRows = 142;
  const totalPages = Math.ceil(totalRows / rowsPerPage);

  const [data, setData] = useState(
    [] as { shop: string; email: string; phone: string; products: number; stockValue: string; sales: string }[]
  );

  useEffect(() => {
    const generateStaticData = () => {
      const allData = Array.from({ length: totalRows }, (_, i) => ({
        shop: `Shop ${i + 1}`,
        email: `shop${i + 1}@example.com`,
        phone: `+1234567890${i}`,
        products: Math.floor(Math.random() * 50 + 1),
        stockValue: `${Math.floor(Math.random() * 10000 + 500)}`,
        sales: `${Math.floor(Math.random() * 50000 + 10000)}`,
      }));
      setData(allData);
    };
    generateStaticData();
  }, []);

  const paginatedData = data.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <div className="w-full max-w-[980px] h-auto bg-white p-4 border rounded shadow space-y-4">
      {/* Tabs */}
      <div className="flex flex-wrap justify-between items-center">
        <div className="flex flex-wrap space-x- sm:space-x-4">
          {['Active', 'Pending Approvals', 'Invited Plugs'].map((tab) => (
            <button
              key={tab}
              className={`text-xs font-bold ${
                activeTab === tab ? 'text-orange-500 ' : 'text-gray-600'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="w-full sm:w-auto mt-2  sm:mt-0">
          <input
            type="text"
            placeholder="Search..."
            className="border px-4 py-2  rounded text-xs w-full sm:w-64"
          />
        </div>
        <hr className="border-gray-300" />
      </div>

      {/* Full-width Horizontal Line */}
      

      {/* Table */}
      <Link href='/SuspendSeller'>  
      <div className="overflow-x-auto">
        {/* Table Head */}
        <div className="flex justify-between text-xs font-semibold text-gray-600 min-w-[800px]">
          <p className="w-1/6">Shop/Seller</p>
          <p className="w-1/6">Email</p>
          <p className="w-1/6">Phone</p>
          <p className="w-1/6">Products</p>
          <p className="w-1/6">Stock Value</p>
          <p className="w-1/6">Sales</p>
          <p className="w-1/6 text-right">Action</p>
        </div>
        <hr className="border-gray-300" />

        {/* Table Rows */}
        {paginatedData.map((row, index) => (
          <div
            key={index}
            className="flex items-center justify-between text-xs py-2 border-b min-w-[800px]"
          >
            <p className="w-1/6">{row.shop}</p>
            <p className="w-1/6">{row.email}</p>
            <p className="w-1/6">{row.phone}</p>
            <p className="w-1/6 text-center">{row.products}</p>
            <p className="w-1/6 text-center">{row.stockValue}</p>
            <p className="w-1/6 text-center">{row.sales}</p>
            <div className="w-1/6 text-right relative">
              <button
                className="text-gray-500"
                onClick={() =>
                  setDropdownVisible((prev) => (prev === index ? null : index))
                }
              >
                <HiOutlineDotsHorizontal  className='text-red-500'/>
              </button>
              {dropdownVisible === index && (
                <div className="absolute flex right-0 mt-2 bg-white border rounded shadow-lg w-40 p-2 z-50">
                  <button className="">
                    <IoTrashOutline className='text-red-500' />
                    
                  </button>
                  <button className="">
                    <span className='text-xs'>Suspend Customer</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      </Link>
      {/* Pagination */}
      <div className="flex flex-wrap justify-between items-center text-xs mt-4 space-y-2 sm:space-y-0">
        <p>
          Showing {Math.min((currentPage - 1) * rowsPerPage + 1, totalRows)} to{' '}
          {Math.min(currentPage * rowsPerPage, totalRows)} of {totalRows} results
        </p>
        <div className="flex space-x-2">
          <button
            className={` ${
              currentPage === 1 ? 'text-gray-400' : ''
            }`}
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >
            <RiArrowLeftLine />
          </button>
          <button
            className={` ${
              currentPage === totalPages ? 'text-gray-400' : ''
            }`}
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            <RiArrowRightLine className='text-orange-500' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataSection;
