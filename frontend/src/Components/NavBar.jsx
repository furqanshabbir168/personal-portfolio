import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logoo.png";

function NavBar() {

  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div className="w-full fixed top-0 left-0 bg-white z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-15" />
          <h1 className="text-4xl font-extrabold tracking-wide text-gray-900 uppercase">Furqan</h1>
        </div>

        {/* Desktop Menu */}
        <ul className=" text-[18px] hidden md:flex items-center gap-10 text-black font-bold">
          <li className="hover:text-gray-500 cursor-pointer transition"><a href="#hero">Home</a></li>
          <li className="hover:text-gray-500 cursor-pointer transition"><a href="#about">About me</a></li>
          <li className="hover:text-gray-500 cursor-pointer transition"><a href="#projects">Projects</a></li>
          <li className="hover:text-gray-500 cursor-pointer transition"><a href="#skills">Skills</a></li>
          <li className="hover:text-gray-500 cursor-pointer transition"><a href="#contact">Contact</a></li>
        </ul>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden text-3xl cursor-pointer text-black"
          onClick={() => setMobileMenu(true)}
        >
          <Menu size={32} />
        </div>

      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white p-6 z-50 shadow-xl transform transition-transform duration-300 ${
          mobileMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Icon */}
        <div
          className="w-full flex justify-end text-black cursor-pointer"
          onClick={() => setMobileMenu(false)}
        >
          <X size={28} />
        </div>

        <ul className="mt-10 flex flex-col gap-6 text-black font-bold">
          <li className="hover:text-gray-500 cursor-pointer transition"><a href="#hero">Home</a></li>
          <li className="hover:text-gray-500 cursor-pointer transition"><a href="#about">About me</a></li>
          <li className="hover:text-gray-500 cursor-pointer transition"><a href="#projects">Projects</a></li>
          <li className="hover:text-gray-500 cursor-pointer transition"><a href="#skills">Skills</a></li>
          <li className="hover:text-gray-500 cursor-pointer transition"><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
