import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from './images/4Logo.svg'; // make sure the path is correct

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full fixed top-0 z-50 bg-white shadow-sm px-6 sm:px-10 lg:px-20 py-4 lg:py-5">
      <div className="flex items-center justify-between">
        {/* Left side: Hamburger + Logo */}
        <div className="flex items-center">
          <button onClick={toggleMenu} className="md:hidden text-2xl text-[#131A34] mr-5">
            {isOpen ? (FiX as any)() : (FiMenu as any)()}
          </button>

          {/* Logo as Image */}
          <img src={logo} alt="4orehaus Logo" className="h-5 lg:h-8 w-auto" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-10 text-lg  items-center">
          <Link to="/" className="text-black hover:text-[#131A34] transition">Home</Link>
          <Link to="/about" className="text-[#D6C79D] font-semibold ">About</Link>
          <a href="#contact" className="text-black hover:text-[#131A34] transition">Contact Us</a>
        </div>

        {/* CTA Button */}
        <div>
          <a href="https://www.instagram.com/4orehaus/"  target="_blank" rel="noopener noreferrer" className="bg-[#131A34] text-white px-3 py-2 lg:px-6 lg:py-3 rounded-full font-semibold text-sm shadow hover:opacity-90 transition">
            Start Your Project
          </a>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-3 text-base font-semibold">
          <Link to="/" className="block text-black hover:text-[#131A34]">Home</Link>
          <Link to="/about" className="block text-[#D6C79D]">About</Link>
          <a href="#contact" className="block text-black hover:text-[#131A34]">Contact Us</a>
        </div>
      )}
    </nav>
  );
}
