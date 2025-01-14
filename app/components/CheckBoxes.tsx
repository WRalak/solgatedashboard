import React from 'react';

const CheckBoxes = () => {
  return (
    <div className="space-y-4 mt-12">
      {/* Section 1: Menu/Category */}
      <div className="w-[380px] h-[112px] border border-gray-300 rounded-md p-2">
        <p className="text-xs font-semibold">Menu/Category</p>
        <hr className="my-2 border-gray-300" />
        <div className="grid grid-cols-2 gap-y-2">
          {['Women', 'New Releases', 'Kids', "Women's"].map((label, index) => (
            <label key={index} className="flex items-center space-x-1">
              <input type="checkbox" className="w-3 h-3 text-orange-500" />
              <span className="text-xs">{label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Section 2: Item/Product */}
      <div className="w-[380px] h-[188px] border border-gray-300 rounded-md p-2">
        <p className="text-xs font-semibold">Item/Product</p>
        <hr className="my-2 border-gray-300" />
        <div className="grid grid-cols-2 gap-y-2">
          {Array.from({ length: 10 }).map((_, index) => (
            <label key={index} className="flex items-center space-x-1">
              <input type="checkbox" className="w-3 h-3 text-orange-500" />
              <span className="text-xs">Item {index + 1}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Section 3: Type */}
      <div className="w-[380px] h-[136px] border border-gray-300 rounded-md p-2">
        <p className="text-xs font-semibold">Type</p>
        <hr className="my-2 border-gray-300" />
        <div className="grid grid-cols-2 gap-y-2">
          {[
            'Basket Ball',
            'Football Cleats',
            'Lifestyle',
            'Running/Walking',
            'Boots',
            'Sandals/Slides',
          ].map((label, index) => (
            <label key={index} className="flex items-center space-x-1">
              <input type="checkbox" className="w-3 h-3 text-orange-500" />
              <span className="text-xs">{label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Section 4: Brand */}
      <div className="w-[380px] h-[184px] border border-gray-300 rounded-md p-2">
        <p className="text-xs font-semibold">Brand</p>
        <hr className="my-2 border-gray-300" />
        <div className="grid grid-cols-2 gap-y-2">
          {Array.from({ length: 10 }).map((_, index) => (
            <label key={index} className="flex items-center space-x-1">
              <input type="checkbox" className="w-3 h-3 text-orange-500" />
              <span className="text-xs">Brand {index + 1}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Section 5: Condition */}
      <div className="w-[380px] h-[88px] border border-gray-300 rounded-md p-2">
        <p className="text-xs font-semibold">Condition</p>
        <hr className="my-2 border-gray-300" />
        <div className="flex items-center space-x-4">
          {['New Pre-owned', 'New'].map((label, index) => (
            <label key={index} className="flex items-center space-x-1">
              <input type="checkbox" className="w-3 h-3 text-orange-500" />
              <span className="text-xs">{label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Section 6: Color */}
      <div className="w-[380px] h-[285px] border border-gray-300 rounded-md p-2">
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold">Color</p>
          <span className="text-xs text-blue-500 cursor-pointer">+ New Color</span>
        </div>
        <hr className="my-2 border-gray-300" />
        <div className="grid grid-cols-4 gap-2 mt-4">
          {Array.from({ length: 17 }).map((_, index) => (
            <label key={index} className="flex items-center space-x-1">
              <input type="checkbox" className="w-3 h-3 text-orange-500" />
              <span className="text-xs">Color {index + 1}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Section 7: Gender */}
      <div className="w-[380px] h-[112px] border border-gray-300 rounded-md p-2">
        <p className="text-xs font-semibold">Gender</p>
        <hr className="my-2 border-gray-300" />
        <div className="flex items-center space-x-4">
          {['Male', 'Female', 'Kids'].map((label, index) => (
            <label key={index} className="flex items-center space-x-1">
              <input type="checkbox" className="w-3 h-3 text-orange-500" />
              <span className="text-xs">{label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Section 8: Size */}
      <div className="w-[380px] h-[424px] border border-gray-300 rounded-md p-2">
        <p className="text-xs font-semibold">Size</p>
        <hr className="my-2 border-gray-300" />
        <div className="grid grid-cols-2 gap-y-2">
          {Array.from({ length: 12 }).map((_, index) => (
            <label key={index} className="flex items-center space-x-1">
              <input type="checkbox" className="w-3 h-3 text-orange-500" />
              <span className="text-xs">Size {index + 1}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CheckBoxes;
