"use client";
import Link from "next/link";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: "700",
  subsets: ["latin"],
});

const Navbar = () => {
  return (
    <nav className="bg-[#203e80] text-white shadow-md fixed w-full z-50">
      <div className="flex items-center justify-between p-4 max-w-7xl ">
        {/* Left Side - Logo */}
        <Link href="/">
          <h1 className={`${montserrat.className} text-2xl font-bold`}>Funder</h1>
        </Link>

       
      </div>
    </nav>
  );
};

export default Navbar;
