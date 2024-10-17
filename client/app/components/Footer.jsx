import Image from "next/image"
import Link from "next/link"
import { IoLogoFacebook } from "react-icons/io5";
import { FaTwitterSquare } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";


const Footer = () => {
    return (
        <div className="bg-orange-100">
        <footer className="bg-[#203e80] rounded-2xl mx-auto w-full max-w-7xl p-8 text-white">
            <div className="grid md:grid-cols-2 gap-8">
                {/* Left Section */}
                <div className="max-w-md w-full text-center md:text-left">
                    <Image src={"/bg-remove-logo.png"}  alt={"logo"} width={150} height={50} className=" rounded-full"/>
                    <p className="text-white hover:text-orange-400">
                        Brief description or mission statement about the organization, purpose, or values.
                    </p>
                </div>

                {/* Right Section with Links */}
                <div className="grid grid-cols gap-y-4 text-center md:grid-cols-3 md:gap-4">
                    <div>
                        <h4 className="text-lg font-semibold hover:text-orange-400">Donate</h4>
                        <ul className="flex flex-col space-x-1">
                           <Link href={"#"}>Education</Link>
                           <Link href={"#"}>Healthcare</Link>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold hover:text-orange-400">Help</h4>
                        <ul className="flex flex-col space-x-1">
                        <Link href={"#"}>FAQs</Link>
                        <Link href={"#"}>Contact Us</Link>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold hover:text-orange-400">Company</h4>
                        <ul className="flex flex-col space-x-1">
                        <Link href={"#"}>About Us</Link>
                        <Link href={"#"}>Services</Link>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="border border-t-gray-800 "></div>
            {/* Bottom Section */}
            <div className="grid grid-cols md:grid-cols-2 gap-8">
            <div className="mt-8 text-center md:text-left text-gray-white">
                &copy; 2024 Funder. <br /> All rights reserved.
            </div>
            <div className="hidden md:flex  md:space-x-4 md:items-center md:pt-5">
            <button className="bg-orange-400 hover:bg-orange-500 px-11 py-2  rounded-full flex items-center "><IoLogoFacebook  size={25}/>Facebook</button>
            <button className="bg-orange-400 hover:bg-orange-500 px-11 py-2 rounded-full flex items-center "><FaTwitterSquare size={25}/>Twitter</button>
            <button className="bg-orange-400 hover:bg-orange-500 px-11 py-2 rounded-full flex items-center"><MdOutlineEmail size={25}/>Email</button>
            
            </div>
            <div className="flex space-x-4 justify-center items-center md:hidden">
            <button className="bg-orange-400 hover:bg-orange-500 items-center "><IoLogoFacebook  size={25}/></button>
            <button className="bg-orange-400 hover:bg-orange-500 items-center "><FaTwitterSquare size={25}/></button>
            <button className="bg-orange-400 hover:bg-orange-500 items-center"><MdOutlineEmail size={25}/></button>
            
            </div>

            </div>
        </footer>
        </div>
    );
};

export default Footer;
