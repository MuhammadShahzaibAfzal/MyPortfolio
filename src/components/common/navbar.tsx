"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image
          src={assets.header_bg_color}
          alt="Shahzaib's Portfolio Logo"
          className="w-full"
        />
      </div>
      <header className="w-full fixed  z-10 py-4">
        <nav className="flex container justify-between items-center">
          <a href="#top">
            <Image src={assets.logo} alt="Shahzaib's Portfolio Logo" className="w-28" />
          </a>

          <ul className="hidden md:flex px-12 py-3 rounded-full gap-6 lg:gap-8 bg-white shadow-sm bg-opacity-50">
            <li>
              <a href="#top" className="font-ovo">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="font-ovo">
                About Me
              </a>
            </li>
            <li>
              <a href="#projects" className="font-ovo">
                Projects
              </a>
            </li>
            <li>
              <a href="#services" className="font-ovo">
                Services
              </a>
            </li>
          </ul>

          <div className="flex items-center gap-4">
            <button>
              <Image src={assets.moon_icon} alt="Moon Icon" className="w-6" />
            </button>
            <a
              href="#contact"
              className="hidden md:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4"
            >
              Contact <Image src={assets.arrow_icon} alt="Arrow Icon" className="w-3" />
            </a>
            <button className="block md:hidden" onClick={() => setIsMenuOpen(true)}>
              <Image src={assets.menu_black} alt="Moon Icon" className="w-6" />
            </button>
          </div>

          {/* Mobile Menu */}
          <ul
            className={`flex flex-col md:hidden gap-4 py-20 px-10 fixed  top-0 bottom-0 w-64 z-50 bg-rose-50 transition-all duration-500 ${
              isMenuOpen ? "-right-0" : "-right-64"
            }`}
          >
            <button
              className="absolute top-6 right-6"
              onClick={() => setIsMenuOpen(false)}
            >
              <Image src={assets.close_black} alt="Close Icon" className="w-6" />
            </button>
            <li>
              <a href="#top" className="font-ovo">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="font-ovo">
                About Me
              </a>
            </li>
            <li>
              <a href="#projects" className="font-ovo">
                Projects
              </a>
            </li>
            <li>
              <a href="#services" className="font-ovo">
                Services
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
export default Navbar;
