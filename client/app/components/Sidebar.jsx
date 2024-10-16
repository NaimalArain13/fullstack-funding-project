"use client";
import { useState } from "react";
import { Montserrat } from "next/font/google";
import { TiThMenu } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import { LayoutDashboard, MessageSquare, Users, Ticket, Settings } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const montserrat = Montserrat({
  weight: "600",
  subsets: ["latin"],
});

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/admin-dashboard",
    color: "text-blue-500",
  },
  {
    label: "Manage Beneficiaries",
    icon: Users,
    href: "#",
    color: "text-violet-500",
  },
  {
    label: "Manage Applications",
    icon: MessageSquare,
    href: "#",
    color: "text-pink-700",
  },
  {
    label: "Manage Vouchers",
    icon: Ticket,
    href: "#",
    color: "text-orange-700",
  },
  {
    label: "Manage Providers",
    icon: Users,
    href: "#",
    color: "text-emerald-700",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "#",
  },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true); // State to manage sidebar visibility
  const pathname = usePathname();

  const closeSidebar = () => setIsOpen(false); // Set isOpen to false to close sidebar
  const toggleSidebar = () => setIsOpen((prev) => !prev); // Toggle sidebar open/close

  return (
    <div className="max-h-full">
      <div className={`flex ${isOpen ? "w-64" : "w-16"} transition-all duration-300 h-full bg-[#203e80] text-white`}>
        <div className="space-y-4 py-4 flex flex-col h-full">
          <div className="px-3 py-2 flex-1">
            <Link href="/admin-dashboard" className="flex items-center pl-3 mb:14">
              <div className="relative w-8 h-8 mr-4">
                <Image fill alt="logo" src="/download.jpg" />
              </div>
              {isOpen && (
                <h1 className={cn("text-2xl font-bold", montserrat.className)}>Funders</h1>
              )}
            </Link>
            <div className="space-y-1">
              {routes.map((route) => (
                <Link
                  href={route.href}
                  key={route.href}
                  onClick={closeSidebar} // Close sidebar when a link is clicked
                  className={cn(
                    "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                    pathname === route.href ? "text-white bg-white/10" : "text-zinc-400"
                  )}
                >
                  <div className="flex flex-center flex-1">
                    <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                    {isOpen && route.label} {/* Show label only if sidebar is open */}
                  </div>
                </Link>
              ))}
            </div>
          </div>
          {/* Toggle Button */}
          <button 
            onClick={toggleSidebar}
            className="hidden md:flex md:items-center md:justify-center w-full p-2 text-sm text-white hover:bg-white/10 rounded-b-lg transition"
          >
            {isOpen ? <IoMdClose size={40} /> : <TiThMenu size={40} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
