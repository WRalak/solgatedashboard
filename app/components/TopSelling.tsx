'use client';

import { Line } from 'react-chartjs-2';
import Image from 'next/image';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const TopSellingProducts = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Sales Performance",
        data: [2000, 2500, 2800, 3200, 3500, 4000, 4200, 4500, 4700, 5000, 5300, 5500],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.1,
      },
    ],
  };

  const products = [
    { name: "Nike Shoes", price: "2500", image: "/nike.jpg" },
    { name: "Running Shoes", price: "2800", image: "/shoe.jpeg" },
    { name: "Converse", price: "3000", image: "/converse.jpg" },
    { name: "Dress", price: "3000", image: "/dress.jpeg" },
    { name: "T-Shirt", price: "3000", image: "/tshirts.jpeg" },
    { name: "Handbag", price: "3000", image: "/handbag.jpeg" },
  ];

  return (
    <div className="flex flex-col md:flex-col lg:flex-row lg:gap-6 px-4 sm:px-6 md:px-8 xl:px-20  mt-40">
    {/* Left Section: Top Selling Products */}
    <div className="flex-shrink-0 lg:w-[280px] lg:h-[395px] w-full p-4 bg-white rounded-md border border-gray-300 overflow-hidden">
      <h6 className="text-sm font-semibold text-gray-800 mb-4">Top Selling Products (KES)</h6>
      <div className="space-y-3 overflow-y-auto h-full">
        {products.map((product, index) => (
          <div key={index} className="flex items-center justify-between">
            {/* Image and Product Name */}
            <div className="flex items-center gap-3">
              <Image
                src={product.image}
                alt={product.name}
                width={20}
                height={20}
                className="w-12 h-12 object-cover rounded"
              />
              <p className="text-sm font-medium text-gray-700 truncate">{product.name}</p>
            </div>
            {/* Price */}
            <p className="text-sm font-medium text-gray-600">KES {product.price}</p>
          </div>
        ))}
      </div>
    </div>
  
    {/* Right Section: Sales Performance Overview */}
      {/* Right Section: Sales Performance Overview */}
<div className="lg:w-[680px] lg:h-[395px] w-full p-4 bg-white rounded-md flex-shrink-0">
  <h6 className="text-xs font-semibold text-gray-800 mb-4">Sales Performance Overview</h6>
  <div className="h-full">
    <Line data={data} options={{ maintainAspectRatio: false }} />
  </div>
</div>

  </div>
  
  

  
  );
};

export default TopSellingProducts;
