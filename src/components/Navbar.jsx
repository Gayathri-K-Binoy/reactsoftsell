import React, { useState, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const Navbar = ({ brandName = 'SoftSell', brandIcon }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const defaultBrandIcon = (
    <svg
      className="w-8 h-8 text-blue-600 dark:text-blue-400"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" />
      <path
        d="M2 17L12 22L22 17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 12L12 17L22 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <nav className="w-full py-4 px-6 md:px-12 bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50 transition-colors">
      <div className="container mx-auto flex justify-between items-center">
        {/* Dynamic Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={scrollToTop}>
          {brandIcon || defaultBrandIcon}
          <span className="text-xl font-bold text-blue-600 dark:text-blue-400">{brandName}</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {['#how-it-works', '#why-choose-us', '#testimonials', '#contact'].map((href, i) => (
            <a
              key={i}
              href={href}
              className="text-gray-700 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-transform duration-300 hover:scale-105"
            >
              {href.replace(/[#-]/g, ' ').replace(/\b\w/g, l => l.toUpperCase()).trim()}
            </a>
          ))}
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-transform duration-300 hover:scale-110"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <i className="fas fa-sun text-yellow-400"></i>
            ) : (
              <i className="fas fa-moon text-gray-700"></i>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <div className="relative md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-transform duration-300 hover:scale-110"
              aria-label="Toggle menu"
            >
              <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-gray-800 dark:text-gray-100`}></i>
            </button>

            {mobileMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-50">
                {['#how-it-works', '#why-choose-us', '#testimonials', '#contact'].map((href, i) => (
                  <a
                    key={i}
                    href={href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-2 text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    {href.replace(/[#-]/g, ' ').replace(/\b\w/g, l => l.toUpperCase()).trim()}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;