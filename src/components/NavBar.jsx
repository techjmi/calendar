import React, { useState, useEffect } from 'react';

const NavBar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full p-4 transition-all duration-300 ${
        scrolling ? 'bg-blue-600' : 'bg-black'
      }`}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-4">
          <img
            src="logo_.jpg"
            alt="Logo"
            className="w-10 h-10 rounded-full"
          />
          <span className="text-sm md:text-lg font-semibold text-white ">My Website</span>
        </div>
        <div className="space-x-6">
          {/* <a href="#home" className="text-white">Home</a> */}
          {/* <a href="#services" className="text-white">Services</a> */}
          <a href="#contact" className="text-white">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

