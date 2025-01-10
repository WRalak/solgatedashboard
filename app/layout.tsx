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
          <div className=" hidden md:block h-screen w-[320px] border-r bg-gray-50 mt-10">
            <Sidebar />
          </div>
          {/* Main content area */}
          
          <div className="flex-1 p-9 mt-24">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
