"use client";
import Navbar from "./components/LandingPage/Navbar";
import JoinFundSection from "./components/LandingPage/JoinFundSection";
import HeroSection from "./components/LandingPage/HeroSection"
import { Card } from "../components/ui/card";
import FaqSection from "./components/LandingPage/FAQs";

const obj = [
  {
    imageSrc: "/download.jpg",
    title: "Create a Campaign",
    content: "Start your own fundraiser to support a cause you care about. Set your goals, share your story, and make a difference.",
  },
  {
    imageSrc: "/download.jpg",
    title: "Donate to Causes",
    content: "Browse through campaigns and donate to those that resonate with you. Support projects that bring real change.",
  },
  {
    imageSrc: "/download.jpg", 
    title: "Volunteer Opportunities",
    content: "Join hands with us and volunteer your time and skills for different initiatives across communities.",
  },
];

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      
      {/* Cards Section */}
      <div className="mb-10 text-center pt-5 max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Fund, Fast as <span className="italic text-gray-700">Flash</span></h1>
        <p className="text-gray-500 mb-8 text-lg">Fundraise at the speed of thought! Elevate your cause in just a minute with our lightning-fast fundraising platform.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          {obj.map((object, index) => (
            <Card key={index} {...object} />
          ))}
        </div>
      </div>
      
      <JoinFundSection />
      <FaqSection />
    </div>
  );
}
