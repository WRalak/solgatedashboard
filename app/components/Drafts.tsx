'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FiSearch, FiMoreHorizontal, FiEdit, FiTrash2,} from "react-icons/fi";
import { IoCheckmarkDoneSharp } from "react-icons/io5";


const ProductTable: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Live");
  const [currentPage, setCurrentPage] = useState(1);
  const [showDropdown, setShowDropdown] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);
  const itemsPerPage = 10;
  const totalPages = 15;

  const products = Array.from({ length: 142 }, (_, i) => ({
    id: `P${i + 1}`,
    productName: `Nike Flow 2020 ISPA  `,
    sellingPrice: `${(Math.random() * 5000).toFixed(2)} `,
    shop: ` Kenyan Shop ${Math.floor(Math.random() * 10) + 1}`,
    gender: ["Male", "Female", "Unisex", "Kids"][i % 4],
    category: ["Shoes", "Hoodies", "Shirts", "Sweatpants"][i % 4],
    condition: i % 2 === 0 ? "New" : "Pre-Owned",
  }));

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const toggleDropdown = (productId: string) => {
    setShowDropdown(showDropdown === productId ? null : productId);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

  if (!isClient) {
    return null;
  }

  return (
    <div className="w-full max-w-5xl mx-auto p-4 border border-gray-300 rounded-md">
    {/* Header */}
    <div className="flex justify-between items-center mb-2">
      {/* Tabs */}
      <div className="flex space-x-4">
        {["Drafts"].map((tab) => (
          <button
            key={tab}
            className={`text-xs ${activeTab === tab ? "text-orange-500" : "text-gray-600"}`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
  
      {/* Filter & Search */}
      <div className="flex items-center space-x-4">
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
    <hr className="border-gray-300" />
  
    {/* Table */}
    <div>
      {/* Table Headers */}
      <div className="grid grid-cols-9 font-semibold text-xs text-gray-600 py-3 border-b border-gray-300">
        <span className="col-span-3 pl-2">Product Name</span>
        <span className="text-center">Selling Price (Ksh)</span>
        <span className="text-center">Shop</span>
        <span className="text-center">Gender</span>
        <span className="text-center">Category</span>
        <span className="text-center">Condition</span>
        <span className="text-center">Action</span>
      </div>
  
      {/* Table Rows */}
      <div className="divide-y divide-gray-200 text-xs text-gray-700">
        {currentProducts.map((product) => (
          <div
            key={product.id}
            className="grid grid-cols-9 py-4 items-center"
          >
            {/* Checkbox, Image, and Product Name */}
            <div className="flex items-center col-span-3 space-x-2">
            <input
  type="checkbox"
  className="w-3 h-3 peer text-white appearance-none border border-gray-400 rounded-sm checked:bg-orange-500 checked:border-orange-500 focus:outline-none"
/>

              <Image
                src="/shoe.jpeg"
                alt={product.productName}
                className="rounded"
                width={50}
                height={50}
              />
              <span>{product.productName}</span>
            </div>
            {/* Selling Price */}
            <span className="text-center">{product.sellingPrice}</span>
            {/* Shop */}
            <span className="text-center underline text-sky-600">{product.shop}</span>
            {/* Gender */}
            <span className="text-center">{product.gender}</span>
            {/* Category */}
            <span className="text-center">{product.category}</span>
            {/* Condition */}
            <span className="text-center">{product.condition}</span>
            {/* Action Dropdown */}
            <div className="relative text-center">
              <button
                className="text-orange-500 hover:text-orange-700"
                onClick={() => toggleDropdown(product.id)}
              >
                <FiMoreHorizontal />
              </button>
              {showDropdown === product.id && (
                <div className="absolute top-6 right-0 bg-white border z-50 border-gray-300 rounded shadow-lg p-2 w-40">
                  <button className="flex items-center text-gray-700 text-xs space-x-2">
                  <FiEdit className="text-orange-500" /> <span>Edit Product</span>
                </button>
                <button className="flex items-center text-gray-700 mt-5 text-xs space-x-2">
                  <FiTrash2 className="text-orange-500" /> <span>Delete Product</span>
                </button>
                <button className="flex items-center text-gray-700 mt-5 text-xs space-x-2">
                  <IoCheckmarkDoneSharp  className="text-orange-500" /> <span>Publish Product</span>
                </button>
              
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
  
      <hr className="border-gray-300" />
    </div>
  
    {/* Footer */}
    <div className="flex justify-between items-center text-xs text-gray-600 mt-4">
      <span>
        Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, products.length)} of {products.length} results
      </span>
      <div className="flex items-center space-x-2">
        <button
          className="p-1"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          &larr;
        </button>
        <button
          className="p-1 text-orange-500"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          &rarr;
        </button>
      </div>
    </div>
  </div>
  
  );
};

export default ProductTable;

