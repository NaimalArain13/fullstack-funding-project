import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <Image
        src="/images.jpg" 
        alt="Helping Hands"
        layout="fill"
        objectFit="cover"
        className="opacity-70"
      />
      
      {/* Overlay Text and Button */}
      <div className="relative z-10 text-center text-white p-4 md:p-8 mb-4">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Fund <span className="block md:inline">Help Others</span>
        </h1>
        <p className="text-lg md:text-xl mt-4">Make a difference by supporting those in need.</p>
        <Link href="#" className="mt-6 inline-block px-6 py-3 bg-blue-400 hover:bg-blue-600 text-gray-900 font-semibold rounded-full transition-colors">
         
            Start Fundraising
      
        </Link>
      </div>
      
      {/* Optional Gradient Overlay for Darker Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-40"></div>
    </section>
  );
};

export default HeroSection;
