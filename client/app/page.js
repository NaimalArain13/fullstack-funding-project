"use client";
// import LoginForm from "./components/Login";
import Navbar from "./components/Navbar";
import { FaClosedCaptioning } from "react-icons/fa";

import Card from "./components/Card";

const obj = [
  {
    icon: <FaClosedCaptioning />,
    title: "User Profile",
    content: "Manage your personal details, update your profile information, and control privacy settings.",
  },
  {
    icon: <FaClosedCaptioning />,
    title: "Security Settings",
    content: "Configure your security settings, enable two-factor authentication, and update your password.",
  },
  {
    icon: <FaClosedCaptioning />,
    title: "Messages",
    content: "View your inbox, check notifications, and stay updated with the latest communications.",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      {/* <div className="grid grid-cols-3 gap-x-5 max-w-6xl w-full mx-auto px-4 pt-5">
        {obj.map((object, index) => (
          <Card key={index} {...object} />
        ))}
      </div> */}
    </>
  );
}
