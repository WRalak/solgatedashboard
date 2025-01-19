'use client'

import React, { useState } from 'react';

const CheckBoxes = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      {/* Toggle Button */}
      <div className="flex justify-end">
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="bg-gray-800 text-white px-3 py-1 rounded"
        >
          {isVisible ? 'Hide Filters' : 'Show Filters'}
        </button>
      </div>

      {/* Filters Section */}
      {isVisible && (
        <div className="space-y-4 mt-5 ml-[150px]">
          {/* Section 1: Menu/Category */}
          <div className="w-[380px] h-auto border border-gray-300 rounded-md p-2">
            <p className="text-xs font-semibold">Menu/Category</p>
            <hr className="my-2 border-gray-300" />
            <div className="grid grid-cols-2 gap-y-2">
              {['T-Shirts', 'Shorts', 'New Arrivals', 'Accessories'].map((label, index) => (
                <label key={index} className="flex items-center space-x-1">
                  <input
                    type="checkbox"
                    className="w-3 h-3 text-orange-500 accent-orange-500"
                  />
                  <span className="text-xs">{label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Section 2: Brand */}
          <div className="w-[380px] h-auto border border-gray-300 rounded-md p-2">
            <p className="text-xs font-semibold">Brand</p>
            <hr className="my-2 border-gray-300" />
            <div className="grid grid-cols-2 gap-y-2">
              {[
                'Nike',
                'Adidas',
                'Puma',
                'Reebok',
                'Under Armour',
                'New Balance',
                'Jordan',
                'Asics',
                'Converse',
                'Vans',
              ].map((label, index) => (
                <label key={index} className="flex items-center space-x-1">
                  <input
                    type="checkbox"
                    className="w-3 h-3 text-orange-500 accent-orange-500"
                  />
                  <span className="text-xs">{label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Section 3: Gender */}
          <div className="w-[380px] h-auto border border-gray-300 rounded-md p-2">
            <p className="text-xs font-semibold">Gender</p>
            <hr className="my-2 border-gray-300" />
            <div className="grid grid-cols-2 gap-y-2">
              {['Men', 'Women', 'Unisex', 'Kids'].map((label, index) => (
                <label key={index} className="flex items-center space-x-1">
                  <input
                    type="checkbox"
                    className="w-3 h-3 text-orange-500 accent-orange-500"
                  />
                  <span className="text-xs">{label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Section 4: Type */}
          <div className="w-[380px] h-auto border border-gray-300 rounded-md p-2">
            <p className="text-xs font-semibold">Type</p>
            <hr className="my-2 border-gray-300" />
            <div className="grid grid-cols-2 gap-y-2">
              {['Football', 'Running', 'Boots', 'Sandals', 'Casual', 'Formal', 'Slippers'].map(
                (label, index) => (
                  <label key={index} className="flex items-center space-x-1">
                    <input
                      type="checkbox"
                      className="w-3 h-3 text-orange-500 accent-orange-500"
                    />
                    <span className="text-xs">{label}</span>
                  </label>
                )
              )}
            </div>
          </div>

          {/* Section 5: Color */}
          <div className="w-[380px] h-auto border border-gray-300 rounded-md p-2">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold">Color</p>
              <span className="text-xs text-blue-500 cursor-pointer">+ Add Color</span>
            </div>
            <hr className="my-2 border-gray-300" />
            <div className="grid grid-cols-4 gap-2 mt-4">
              {['Red', 'Blue', 'Green', 'Black', 'White', 'Yellow', 'Orange', 'Purple', 'Pink'].map(
                (label, index) => (
                  <label key={index} className="flex items-center space-x-1">
                    <input
                      type="checkbox"
                      className="w-3 h-3 text-orange-500 accent-orange-500"
                    />
                    <span className="text-xs">{label}</span>
                  </label>
                )
              )}
            </div>
          </div>

          {/* Section 6: Size */}
          <div className="w-[380px] h-auto border border-gray-300 rounded-md p-2">
            <p className="text-xs font-semibold">Size</p>
            <hr className="my-2 border-gray-300" />
            <div className="grid grid-cols-2 gap-y-2">
              {[
                'XS',
                'S',
                'M',
                'L',
                'XL',
                'XXL',
                '3XL',
                '4XL',
                '5XL',
                '5.5',
                '6.5',
                '7.5',
              ].map((label, index) => (
                <label key={index} className="flex items-center space-x-1">
                  <input
                    type="checkbox"
                    className="w-3 h-3 text-orange-500 accent-orange-500"
                  />
                  <span className="text-xs">{label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckBoxes;

