'use client'

import React, { useState } from 'react'
import { IoCheckmarkDoneSharp } from 'react-icons/io5'
import { IoIosClose } from 'react-icons/io'
import { FaEllipsis } from 'react-icons/fa6'
import { IoEyeOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import Image from 'next/image'

const BidsPage: React.FC = () => {
  const [viewAllBids, setViewAllBids] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState<number | null>(null)
  const [currentPage, setCurrentPage] = useState(1)

  const itemsPerPage = 5
  const totalItems = 18
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  // Sample Data
  const bidsData = Array.from({ length: totalItems }, (_, i) => ({
    id: i + 1,
    productName: `Nike Air ${i + 1}`,
    sellingPrice: 12000,
    bids: i + 3,
    highestBid: 15000,
  }))

  const paginatedData = bidsData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1)
  }

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1)
  }

  return (
    <div>   
   <h1 className='font-bold ml-6'>Bids</h1>
    
    <div className="max-w-[980px] ml-[20px] mx-auto mt-4 p-4 bg-white border shadow-md sm:p-6 lg:p-8">
      
      {/* Heading and Tabs */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4">
        <h2 className="text-sm font-bold mb-2 sm:mb-0">Pending Bids ({totalItems})</h2>
        <div className="flex items-center space-x-1">
  {/* Wrapper for the buttons */}
  <div className="flex space-x-">
  {/* Active Bids Button */}
  <button className="px-4 py-2 text-xs  text-white bg-orange-500 rounded shadow-md">
    Active Bids
  </button>

  {/* Past Bids Button */}
  <button className="px-4 py-2 text-xs  text-orange-500 bg-orange-200 rounded">
    Past Bids
  </button>
</div>


</div>

      </div>

      {/* Divider */}
      <hr className="border-gray-300 mb-4" />

      {/* Table */}
      <table className="w-full text-left table-auto">
        <thead>
          <tr className="text-xs  text-gray-700 border-b">
            <th className="py-2">Product Name</th>
            <th className="py-2">Selling Price (Ksh)</th>
            <th className="py-2">Bids</th>
            <th className="py-2">Highest Bid (Ksh)</th>
            <th className="py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((bid) => (
            <tr key={bid.id} className="text-xs border-b">
              <td className="py-2">
                <div className="flex items-center space-x-2">
                  <Image
                    src="/nike1.jpeg"
                    alt="Product"
                    className="w-10 h-10"
                    width={50}
                    height={50}
                  />
                  <span>{bid.productName}</span>
                </div>
              </td>
              <td className="py-2">{bid.sellingPrice}</td>
              <td className="py-2">{bid.bids}</td>
              <td className="py-2">{bid.highestBid}</td>
              <td className="py-2 relative">
                <FaEllipsis
                  className="text-orange-500 cursor-pointer"
                  onClick={() =>
                    setDropdownOpen(dropdownOpen === bid.id ? null : bid.id)
                  }
                />
                {dropdownOpen === bid.id && (
                  <div className="absolute right-0 mt-2 w-32 z-50 bg-white shadow-md border rounded">
                    <button
                      className=" w-full flex text-left px-3 py-1 text-xs mb-3  "
                      onClick={() => {
                        setDropdownOpen(null)
                        alert('Accepted Bid!')
                      }}
                    >
                       <IoCheckmarkDoneSharp className="text-red-500 cursor-pointer" />
                      Accept Bid
                    </button>
                    <button
                      className="flex w-full text-left px-2 py-1 text-xs "
                      onClick={() => {
                        setDropdownOpen(null)
                        setViewAllBids(true)
                      }}
                    >
                       <IoEyeOutline className="text-blue-500 cursor-pointer" />
                      View All Bids
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row items-center justify-between mt-4">
        <p className="text-xs text-gray-600 mb-2 sm:mb-0">
          Showing {(currentPage - 1) * itemsPerPage + 1} to{' '}
          {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems} results
        </p>
        <div className="flex space-x-2">
          <button
            className="px-2 py-1 "
            onClick={handlePrevious}
            disabled={currentPage === 1}
          >
            <FaArrowLeft  className='text-xs'/>
          </button>
          <button
            className="px-2 py-1 "
            onClick={handleNext}
            disabled={currentPage === totalPages}
          >
            <FaArrowRight className='text-xs text-orange-500' />
          </button>
        </div>
      </div>

      {/* View All Bids Section */}
      {viewAllBids && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-11/12 sm:w-96 h-auto p-4 rounded shadow-lg relative">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-bold">Submitted Bids</h3>
              <button
                className="text-gray-600"
                onClick={() => setViewAllBids(false)}
              >
                ✕
              </button>
            </div>

            {/* Table */}
            <table className="w-full text-left table-auto">
              <thead>
                <tr className="text-xs gap-5 font-semibold text-gray-600 border-b">
                  <th className="py-2">Amount in (Ksh)</th>
                  <th className="py-2">Number of Bids</th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 6 }).map((_, index) => (
                  <tr key={index} className="text-xs text-gray-700 border-b">
                    <td className="py-2">{(index + 1) * 1000}</td>
                    <td className="py-2">{index + 1}</td>
                    <td className="py-2">
                      <div className="flex items-center space-x-2">
                        <IoCheckmarkDoneSharp className="text-red-500 cursor-pointer" />
                        <span className='text-red-500'> Accept</span>
                        <IoIosClose className="text-gray-500 cursor-pointer" />
                        <button className="text-gray-500">Decline</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
    </div>
  )
}

export default BidsPage
