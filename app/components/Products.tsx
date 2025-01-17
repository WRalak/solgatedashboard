'use client'

import React, { useState, useEffect } from "react"; 
import Image from "next/image";
import {  FiSearch, FiMoreHorizontal, FiEdit, FiTrash2 } from "react-icons/fi"; 

const ProductTable: React.FC = () => { 
  const [activeTab, setActiveTab] = useState("Live"); 
  const [currentPage, setCurrentPage] = useState(1); 
  const [showDropdown, setShowDropdown] = useState<string | null>(null); 
  const [isClient, setIsClient] = useState(false); 
  const itemsPerPage = 10; 
  const totalPages = 15; 
  
  const products = Array.from({ length: 142 }, (_, i) => ({ 
    id: `P${i + 1}`, 
    productName: `Nike Flow 2020 ISPA ${i + 1}`, 
    sellingPrice: `${(Math.random() * 5000).toFixed(2)} `, 
    shop: `Shop ${Math.floor(Math.random() * 10) + 1}`, 
    gender: ["Male", "Female", "Unisex","KIds"][i % 4], 
    category: ["Shoes", "Hoodies", "Shirts", "Sweatpants"][i % 4], 
    condition: i % 2 === 0 ? "New" : "Pre-used", 
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
      <div className="flex justify-between items-center mb-4">
        {/* Tabs */}
        <div className="flex space-x-4">
          {["Live", "Drafts", "Sold"].map((tab) => (
            <button
              key={tab}
              className={`text-xs ${activeTab === tab ? "text-orange-500 " : "text-gray-600"}`}
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
        <div className="grid grid-cols-8 font-semibold text-xs text-gray-600 py-2">
          <span>Product Name</span>
          <span>Selling Price(Ksh)</span>
          <span>Shop</span>
          <span>Gender</span>
          <span>Category</span>
          <span>Condition</span>
          <span>Action</span>
        </div>
        <hr className="border-gray-300" />

        {/* Table Rows */}
        <div className="divide-y divide-gray-200 text-xs text-gray-700">
          {currentProducts.map((product) => (
            <div key={product.id} className="grid grid-cols-8 py-2 items-center">
              <span>
                <Image
                  src="/nike.jpg"
                  alt={product.productName}
                  className="inline-block mr-2"
                  width={48}
                  height={48}
                />
                {product.productName}
              </span>
              <span>{product.sellingPrice}</span>
              <span>{product.shop}</span>
              <span>{product.gender}</span>
              <span>{product.category}</span>
              <span>{product.condition}</span>
              <div className="relative">
                <button
                  className="text-orange-500 hover:text-orange-700"
                  onClick={() => toggleDropdown(product.id)}
                >
                  <FiMoreHorizontal />
                </button>
                {/* Dropdown Menu */}
                {showDropdown === product.id && (
                  <div className="absolute top-6 right-0 bg-white border border-gray-300 rounded shadow-lg p-2">
                    <button className="flex items-center text-gray-700 hover:text-orange-500 space-x-2">
                      <FiEdit /> <span>Edit Product</span>
                    </button>
                    <hr className="my-2 border-gray-300" />
                    <button className="flex items-center text-gray-700 hover:text-orange-500 space-x-2">
                      <FiTrash2 /> <span>Delete Product</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center text-sm text-gray-600 mt-4">
        <span>
          Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, products.length)} of {products.length} results
        </span>
        <div className="flex items-center space-x-2">
          <button
            className="p-1 border border-gray-300 rounded hover:bg-gray-100"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            &larr;
          </button>
          <button
            className="p-1 border border-gray-300 rounded hover:bg-gray-100"
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
