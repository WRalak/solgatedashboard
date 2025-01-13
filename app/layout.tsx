import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Solgates Fashion",
  description: "House of Fashion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
         <Navbar/>
        <div className="flex">
          {/* Sidebar visible on medium (md) and larger screens */}
          <div className="h-screen border-r bg-gray-50">
  {/* Sidebar for larger screens */}
  <div className="h-screen border-r bg-gray-50">
  {/* Sidebar for all screens */}
  <div className="h-full   bg-gray-50">
    <Sidebar />
  </div>
</div>


  {/* Sidebar for smaller screens */}
  <div className="block md:hidden fixed inset-0 z-50">
    <Sidebar />
  </div>
</div>

          {/* Main content area */}
          
          <div className="flex-1 p-4  items-start">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
