import React from 'react'

const CheckBoxes = () => {
  return (
    <div>
      <div className="space-y-2 mt-16 ">
  {/* Section 1: Menu/Category */}
  <div className="w-[380px] h-[112px] border border-gray-300 rounded-md p-2">
    <p className="text-xs font-semibold">Menu/Category</p>
    <hr className="my-2 border-gray-300" />
    <div className="grid grid-cols-2 gap-2">
      <div>
        <label className="flex items-center space-x-1">
          <input type="checkbox" className="w-3 h-3 text-orange-500" />
          <span className="text-xs">Women</span>
        </label>
        <label className="flex items-center space-x-1">
          <input type="checkbox" className="w-3 h-3 text-orange-500" />
          <span className="text-xs">New Releases</span>
        </label>
      </div>
      <div>
        <label className="flex items-center space-x-1">
          <input type="checkbox" className="w-3 h-3 text-orange-500" />
          <span className="text-xs">Kids</span>
        </label>
        <label className="flex items-center space-x-1">
          <input type="checkbox" className="w-3 h-3 text-orange-500" />
          <span className="text-xs">Women&apos;s </span>
        </label>
      </div>
    </div>
  </div>

  {/* Section 2: Item/Product */}
  <div className="w-[380px] h-[188px] border border-gray-300 rounded-md p-2">
    <p className="text-xs font-semibold">Item/Product</p>
    <hr className="my-2 border-gray-300" />
    <div className="grid grid-cols-2 gap-2">
      <div>
        {Array.from({ length: 5 }).map((_, index) => (
          <label key={index} className="flex items-center space-x-1">
            <input type="checkbox" className="w-3 h-3 text-orange-500" />
            <span className="text-xs">Item {index + 1}</span>
          </label>
        ))}
      </div>
      <div>
        {Array.from({ length: 5 }).map((_, index) => (
          <label key={index} className="flex items-center space-x-1">
            <input type="checkbox" className="w-3 h-3 text-orange-500" />
            <span className="text-xs">Item {index + 6}</span>
          </label>
        ))}
      </div>
    </div>
  </div>

  {/* Section 3: Type */}
  <div className="w-[380px] h-[136px] border border-gray-300 rounded-md p-2">
    <p className="text-xs font-semibold">Type</p>
    <hr className="my-2 border-gray-300" />
    <div className="grid grid-cols-2 gap-2">
      <div>
        <label className="flex items-center space-x-1">
          <input type="checkbox" className="w-3 h-3 text-orange-500" />
          <span className="text-xs">Basket Ball</span>
        </label>
        <label className="flex items-center space-x-1">
          <input type="checkbox" className="w-3 h-3 text-orange-500" />
          <span className="text-xs">Football Cleats</span>
        </label>
        <label className="flex items-center space-x-1">
          <input type="checkbox" className="w-3 h-3 text-orange-500" />
          <span className="text-xs">Lifestyle</span>
        </label>
      </div>
      <div>
        <label className="flex items-center space-x-1">
          <input type="checkbox" className="w-3 h-3 text-orange-500" />
          <span className="text-xs">Running/Working</span>
        </label>
        <label className="flex items-center space-x-1">
          <input type="checkbox" className="w-3 h-3 text-orange-500" />
          <span className="text-xs">Boots</span>
        </label>
        <label className="flex items-center space-x-1">
          <input type="checkbox" className="w-3 h-3 text-orange-500" />
          <span className="text-xs">Sandals/Slide</span>
        </label>
      </div>
    </div>
  </div>

  {/* Section 4: Brand */}
  <div className="w-[380px] h-[184px] border border-gray-300 rounded-md p-2">
    <p className="text-xs font-semibold">Brand</p>
    <hr className="my-2 border-gray-300" />
    <div className="grid grid-cols-2 gap-2">
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
    <div className="flex items-center space-x-2">
      <label className="flex items-center space-x-1">
        <input type="checkbox" className="w-3 h-3 text-orange-500" />
        <span className="text-xs">New Pre-owned</span>
      </label>
      <label className="flex items-center space-x-1">
        <input type="checkbox" className="w-3 h-3 text-orange-500" />
        <span className="text-xs">New</span>
      </label>
    </div>
  </div>

  {/* Section 6: Color */}
  <div className="w-[380px] h-[285px] border border-gray-300 rounded-md p-2">
  {/* Header Section */}
  <div className="flex items-center justify-between">
    <p className="text-xs font-semibold">Color</p>
    <span className="text-xs text-blue-500 cursor-pointer">+ New Color</span>
  </div>
  <hr className="my-2 border-gray-300" />
  
  {/* Checkboxes */}
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
    <div className="flex items-center space-x-2">
      <label className="flex items-center space-x-1">
        <input type="checkbox" className="w-3 h-3 text-orange-500" />
        <span className="text-xs">Male</span>
      </label>
      <label className="flex items-center space-x-1">
        <input type="checkbox" className="w-3 h-3 text-orange-500" />
        <span className="text-xs">Female</span>
      </label>
      <label className="flex items-center space-x-1">
        <input type="checkbox" className="w-3 h-3 text-orange-500" />
        <span className="text-xs">Kids</span>
      </label>
    </div>
  </div>

  {/* Section 8: Size */}
  <div className="w-[380px] h-[424px] border border-gray-300 rounded-md p-2">
    <p className="text-xs font-semibold">Size</p>
    <hr className="my-2 border-gray-300" />
    <div className="grid grid-cols-2 gap-2">
      {Array.from({ length: 12 }).map((_, index) => (
        <label key={index} className="flex items-center space-x-1">
          <input type="checkbox" className="w-3 h-3 text-orange-500" />
          <span className="text-xs">Size {index + 1}</span>
        </label>
      ))}
    </div>
  </div>
</div>

    </div>
  )
}

export default CheckBoxes
