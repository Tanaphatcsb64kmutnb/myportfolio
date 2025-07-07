// src/components/Navbar.js
import React from 'react';

const Navbar = ({ isScrolled }) => {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'text-white bg-black/80 backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex justify-between items-center">
          {/* Left side - TTresume logo (only show when scrolled) */}
          <div className={`transition-opacity duration-500 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}>
            <a href="#" className="text-2xl font-bold tracking-wider hover:text-gray-300 transition-colors duration-300">
              TTresume
            </a>
          </div>
          
          {/* Right side - Navigation links */}
          <div className="flex space-x-12">
            <a href="#about" className="hover:text-gray-300 transition-colors duration-300 text-lg font-light">
              About Me
            </a>
            <a href="#skills" className="hover:text-gray-300 transition-colors duration-300 text-lg font-light">
              Skills
            </a>
            <a href="#projects" className="hover:text-gray-300 transition-colors duration-300 text-lg font-light">
              My Project
            </a>
            <a href="#contact" className="hover:text-gray-300 transition-colors duration-300 text-lg font-light">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;