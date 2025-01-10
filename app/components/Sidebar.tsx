"use client";

import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation"; // Use this hook for pathname
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

const Sidebar: React.FC = () => {
  const pathname = usePathname(); // Get the current pathname
  const itemRefs = useRef<{ [key: string]: HTMLLIElement | null }>({});

  useEffect(() => {
    // Scroll the active item into view if it exists
    const activeElement = itemRefs.current[pathname];
    if (activeElement) {
      activeElement.scrollIntoView({
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
    <div className="h-screen  bg-gray-50 text-gray-800 ">
      <ul className="flex flex-col space-y-1 pt-24 px-20 font-normal ">
        {sidebarItems.map((item) => (
          <li
            key={item.name}
            ref={(el) => (itemRefs.current[item.path] = el)} // Assign ref to each item
            className={`flex items-center space-x-1 p-1 rounded-sm cursor-pointer  font-normal ${
              pathname === item.path
                ? " text-orange-500" // Orange text for active item
                : "text-gray-500"
            }`}
          >
            <Link href={item.path} className="flex items-center font-medium gap-2">
              <span className="text-sm">{item.icon}</span>
              <span className=" text-xs">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

