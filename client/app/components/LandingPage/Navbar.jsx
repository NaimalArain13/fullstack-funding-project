"use client";
import Link from "next/link";
import Image from "next/image"
import { Montserrat } from "next/font/google";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { usePathname } from "next/navigation";
import { useState } from "react";

const montserrat = Montserrat({
  weight: "700",
  subsets: ["latin"],
});

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const routes = [
    {
      name: "Home",
      href: "#",
    },
    {
      name: "Donation",
      href: "#",
    },
    {
      name: "How it Works",
      href: "#",
    },
    {
      name: "About Us",
      href: "#",
    },
  ];

  return (
    <nav className="bg-[#203e80] text-white shadow-md sticky top-0 w-full z-10">
      <div className="flex items-center justify-between p-2 max-w-7xl mx-auto">
        {/* Left Side - Logo */}
        <div className="flex space-x-1 items-center">
        <Image src={"/bg-remove-logo.png"}  alt={"logo"} width={100} height={50} className="w-full  max-w-md rounded-full"/>
        <Link href="/">
            <h1 className={`${montserrat.className} text-2xl font-bold`}>
              Funder
            </h1>
          </Link>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <AiOutlineClose size={30} className="text-white" />
            ) : (
              <AiOutlineMenu size={30} className="text-white" />
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-lg">
          {routes.map((route, index) => (
            <Link
              href={route.href}
              key={index}
              className={`${
                route.href === pathname ? "bg-white/10" : "text-white"
              } px-3 rounded-xl`}
            >
              {route.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
        <button className="bg-orange-400 hover:bg-orange-500 px-4 py-2 rounded-xl">Donate</button>
        </div>
        <div className="hidden md:block">
          <Link href={"/login"} className="bg-yellow-600 px-4 py-2 rounded-xl">
          Login
          </Link>
          <Link href={"/register"} className="bg-yellow-600 px-4 py-2 rounded-xl">
          Sign-up
          </Link>
          </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col space-y-4 px-6 py-4 bg-[#203e80] solid text-white">
          {routes.map((route, index) => (
            <Link
              href={route.href}
              key={index}
              className={`${
                route.href === pathname ? "bg-white/10" : "text-white"
              } px-3 py-2 rounded-xl`}
              onClick={() => setMenuOpen(false)} // Close menu on link click
            >
              {route.name}
            </Link>
          ))}
          <button className="bg-yellow-600 px-4 py-2 rounded-xl">Donate</button>
          <div>
          <Link href={"/login"} className="bg-yellow-600 px-4 py-2 rounded-xl">
          Login
          </Link>
          <Link href={"/register"} className="bg-yellow-600 px-4 py-2 rounded-xl">
          Sign-up
          </Link>
          </div>
         
        
        </div>
      )}
    </nav>
  );
};

export default Navbar;
