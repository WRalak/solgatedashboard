'use client'
import React, { useState, useEffect } from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import {  MdCancel } from "react-icons/md";

import { RiArrowRightLine } from "react-icons/ri";
import { RiArrowLeftLine } from "react-icons/ri";
import { RiCheckDoubleFill } from "react-icons/ri";
import { FaRegFileAlt } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";

interface TableRow {
  shop: string;
  phone: string;
  status: "Complete" | "Pending";
  date: string;
  completedBy: string;
}

const PickupRequests: React.FC = () => {
  const [data, setData] = useState<TableRow[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [openMenu, setOpenMenu] = useState<number | null>(null); // Track which row's menu is open
  const rowsPerPage = 10;

  useEffect(() => {
    // Generate 142 rows of mock data
    const fetchData = () => {
      const rows: TableRow[] = Array.from({ length: 142 }, (_, index) => ({
        shop: `Shop ${index + 1}`,
        phone: `07123${(45678 + index).toString().slice(-4)}`,
        status: index % 2 === 0 ? "Complete" : "Pending",
        date: `2025-01-${String((index % 31) + 1).padStart(2, "0")}`,
        completedBy: index % 2 === 0 ? "John Doe" : "Jane Smith",
      }));
      return rows;
    };
    setData(fetchData());
  }, []);

  // Pagination calculations
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(data.length / rowsPerPage);

  const toggleMenu = (index: number) => {
    setOpenMenu(openMenu === index ? null : index); // Toggle the menu for the specific row
  };

  return (
    <div className="p-4 space-y-4">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h1 className="text-sm font-bold">Pick-Up Requests</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded-md px-4 py-2"
          />
        </div>
      </div>
      <hr className="border-t border-gray-200" />

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="text-xs">
              <th className="px-4 py-2 text-left">Shop/Seller</th>
              <th className="px-4 py-2 text-left">Phone</th>
              <th className="px-4 py-2 text-center">Pick-Up Status</th>
              <th className="px-4 py-2 text-left">Pick-Up Date</th>
              <th className="px-4 py-2 text-left">Completed By</th>
              <th className="px-4 py-2 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentRows.map((row, index) => (
              <tr key={index} className="border-t border-gray-200 text-xs">
                <td className="px-4 py-2">{row.shop}</td>
                <td className="px-4 py-2">{row.phone}</td>
                <td className="px-4 py-2 text-center">
                  <button
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      row.status === "Complete"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {row.status}
                  </button>
                </td>
                <td className="px-4 py-2">{row.date}</td>
                <td className="px-4 py-2">{row.completedBy}</td>
                <td className="px-4 py-2 text-center">
                  <div className="relative">
                    <button
                      className="text-red-500 hover:text-gray-700"
                      onClick={() => toggleMenu(index)} // Toggle the menu for the specific row
                    >
                      <FiMoreHorizontal size={20} />
                    </button>
                    {/* Show menu only if it's the selected row */}
                    {openMenu === index && (
                      <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10">
                        <button
                          className="flex items-center w-full px-4 py-2 text-left text-xs text-gray-700 "
                          onClick={() => alert("Pick-Up Completed")}
                        >
                          <RiCheckDoubleFill className="mr-2 text-red-500" />
                          Pick-Up Completed
                        </button>
                        <button
                          className="flex items-center w-full px-4 py-2 text-left text-xs text-gray-700"
                          onClick={() => alert("View Pick-Up Date")}
                        >
                          <FaRegFileAlt className="mr-2 text-blue-500" />
                          View Pick-Up Date
                        </button>
                        <button
                          className="flex items-center w-full px-4 py-2 text-left text-xs text-gray-700 "
                          onClick={() => alert("Cancel Pick-Up")}
                        >
                          <RiDeleteBin5Line className="mr-2  text-red-500" />
                          Cancel Pick-Up
                        </button>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer Section */}
      <div className="flex justify-between items-center mt-4">
        <p className="text-xs text-gray-600">
          Showing {indexOfFirstRow + 1} to{" "}
          {Math.min(indexOfLastRow, data.length)} of {data.length} rows
        </p>
        <div className="flex space-x-2">
          <button
            className="text-xs "
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            <RiArrowLeftLine />
          </button>
          <button
            className=" text-orange-600 "
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            <RiArrowRightLine />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PickupRequests;
