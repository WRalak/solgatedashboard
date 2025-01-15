"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  RiHome5Line,
  RiStore2Line,
  RiArchiveLine,
} from "react-icons/ri";
import { LuShirt } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { VscArrowSwap } from "react-icons/vsc";
import { PiShirtFoldedLight, PiHandCoins } from "react-icons/pi";
import { CiFlag1 } from "react-icons/ci";
import { GrGroup } from "react-icons/gr";
import { TfiLayoutListThumb } from "react-icons/tfi";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const Sidebar: React.FC = () => {
  const pathname = usePathname();
  const itemRefs = useRef<{ [key: string]: HTMLLIElement | null }>({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (pathname && itemRefs.current[pathname]) {
      itemRefs.current[pathname]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [pathname]);

  const sidebarItems = [
    { name: "Dashboard", icon: <RiHome5Line />, path: "/Dashboard" },
    { name: "Orders & Sales", icon: <LuShirt />, path: "/OrdersAndSales" },
    { name: "Products/Items", icon: <RiArchiveLine />, path: "/ProductsItems" },
    { name: "Bids", icon: <CiFlag1 />, path: "/Bids" },
    { name: "Customers", icon: <GrGroup />, path: "/Customers" },
    { name: "Categories & Brands", icon: <TfiLayoutListThumb />, path: "/CategoriesAndBrands" },
    { name: "Shops/Sellers", icon: <RiStore2Line />, path: "/ShopSellers" },
    { name: "Loans", icon: <PiHandCoins />, path: "/Loans" },
    { name: "Pick-Up Requests", icon: <PiShirtFoldedLight />, path: "/PickUpRequests" },
    { name: "Mpesa Transactions", icon: <VscArrowSwap />, path: "/MpesaTransactions" },
    { name: "Settings", icon: <IoSettingsOutline />, path: "/Settings" },
  ];

  return (
    <div>
      {/* Mobile Menu Button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 text-orange-600 p-2 rounded-md"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <IoClose size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-50 text-gray-800 transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static lg:w-[309px] z-40`} /* Set width to 309px */
      >
        <ul className="flex flex-col space-y-1 pt-24 px-6 lg:px-10 font-normal">
          {sidebarItems.map((item) => (
            <li
              key={item.name}
              ref={(el) => (itemRefs.current[item.path] = el)}
              className={`flex items-center space-x-2 p-2 rounded-xs cursor-pointer text-xs ${
                pathname === item.path
                  ? "text-customOrange "
                  : "text-gray-600 "
              }`}
            >
              <Link href={item.path} className="flex items-center font-medium gap-2">
                <span className="text-base">{item.icon}</span>
                <span className="text-xs font-bold">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay for Mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 opacity-50 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default Sidebar;
