import React from "react";
import { FiSearch, FiEdit, FiX } from "react-icons/fi";
import { FaArrowLeft, FaChevronRight } from 'react-icons/fa'
import Image from "next/image";
import Link from "next/link";

const ProductDetailsComponent: React.FC = () => {
  return (
    <div className="max-w-md mx-auto space-y-4 ml-5 ">
     <div className="flex items-center  space-x-2">
  {/* Left Arrow */}
  <FaArrowLeft className="text-gray-500 text-xs cursor-pointer" />

  {/* Link */}
  <Link href="/ProductsItems" className="text-gray-500 text-lg font-bold">
    Products
  </Link>

  {/* Right Arrow */}
  <FaChevronRight className="text-gray-500 text-xs" />

  {/* Title */}
  <h2 className="text-lg font-bold text-orange-500">
    Nike Flow 2020 ISPA
  </h2>
</div>

      {/* Section 1: Images & Videos */}
      <div className="border p-4 w-[580px] h-[181px] ">
        <h2 className="text-sm font-semibold">Images & Videos</h2>
        <hr className="my-2" />
        <div className="flex space-x-2">
          {Array(5)
            .fill(null)
            .map((_, i) => (
              <div
                key={i}
                className="relative group w-[100px] h-[100px] bg-gray-200 flex items-center justify-center"
              >
                <Image
                  src={`/nike${i + 1}.jpeg`} // Image path relative to the 'public' folder
                  alt={`Image ${i + 1}`}
                  width={100}
                  height={100}
                  className="w-full h-full object-cover rounded"
                />
                <div className="absolute bottom-0 w-full bg-black/50 text-white text-xs opacity-0 group-hover:opacity-100 flex text-right p-1">
                  <FiEdit className="cursor-pointer" />
                  <FiX className="cursor-pointer" />
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Section 2: Product Info */}
      <div className="border p-4 w-[580px] h-[216px]">
        <h2 className="text-sm font-semibold">Product Info</h2>
        <hr className="my-2" />
        <div className="flex space-x-2 mb-4">
          <input
            type="text"
            placeholder="Product Name"
            className="border p-2 flex-1 text-xs rounded"
          />
          <input
            type="text"
            placeholder="Category"
            className="border p-2 flex-1 text-xs rounded"
          />
        </div>
        <textarea
          placeholder="Add description"
          className="border w-full p-2 text-xs rounded"
          rows={4}
          defaultValue={`I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.`}
        />
      </div>

      {/* Section 3: Pricing */}
      <div className="border p-4 w-[580px] h-[267px]">
        <h2 className="text-sm font-semibold">Pricing</h2>
        <hr className="my-2" />
        <div className="flex justify-between mb-4">
          <input
            type="text"
            placeholder="Price"
            className="border p-2 w-[60%] text-xs rounded"
          />
          <div className="flex space-x-2 items-center">
            <label className="flex items-center space-x-1 text-xs">
              <input type="checkbox" />
              <span>Verified</span>
            </label>
            <label className="flex items-center space-x-1 text-xs">
              <input type="checkbox" />
              <span>On Sale</span>
            </label>
          </div>
        </div>
        <div className="flex space-x-2 mb-4">
          <input
            type="text"
            placeholder="Input 1"
            className="border p-2 flex-1 text-xs rounded"
          />
          <input
            type="text"
            placeholder="Input 2"
            className="border p-2 flex-1 text-xs rounded"
          />
        </div>
        <hr />
        <div className="flex space-x-2 mt-4">
          {Array(3)
            .fill(null)
            .map((_, i) => (
              <input
                key={i}
                type="text"
                placeholder={`Input ${i + 3}`}
                className="border p-2 flex-1 text-xs rounded"
              />
            ))}
        </div>
      </div>

      {/* Section 4: Shop */}
      <div className="border p-4 w-[580px] h-[121px]">
        <h2 className="text-sm font-semibold">Shop</h2>
        <hr className="my-2" />
        <div className="relative">
          <input
            type="text"
            placeholder="Search Shop"
            className="border p-2 w-full text-xs rounded pl-8"
          />
          <FiSearch className="absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-500" />
        </div>
      </div>

      {/* Section 5: Assisted Check-out */}
      <div className="border p-4 w-[580px] h-[229px]">
        <h2 className="text-sm font-semibold">Assisted Check-out</h2>
        <hr className="my-2" />
        <p className="text-xs text-gray-700 mb-4">
          Assisted check-out helps you add the product to the buyer’s cart for
          them. When you click submit below, they will be notified via
          email/SMS that the product has been added to their cart and they can
          make payment.
        </p>
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Customer Name"
            className="border p-2 w-full text-xs rounded pl-8"
          />
          <FiSearch className="absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-500" />
        </div>
        <div className="flex justify-end space-x-2">
        <button className="bg-white border-2 text-xs border-orange-500 text-orange-500 px-4 py-2 rounded">
        Cancel
      </button>
          <button className="px-4 py-2 bg-orange-500 text-white text-xs rounded">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsComponent;
