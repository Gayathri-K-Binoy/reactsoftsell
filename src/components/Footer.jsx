import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-12 px-6 md:px-12 bg-gray-900 text-white">
      <div className="container mx-auto grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <svg
              className="w-8 h-8 text-blue-400"
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
            <span className="text-xl font-bold text-blue-400">SoftSell</span>
          </div>
          <p className="text-gray-400 mb-6">Turning unused software into valuable assets since 2019.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <i className="fab fa-facebook text-xl"></i>
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">
                How It Works
              </a>
            </li>
            <li>
              <a href="#why-choose-us" className="text-gray-400 hover:text-white transition-colors">
                Why Choose Us
              </a>
            </li>
            <li>
              <a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-4">Services</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                License Valuation
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Secure Transfer
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                License Verification
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Enterprise Solutions
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-4">Legal</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Refund Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                License Agreement
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
        <p>© {new Date().getFullYear()} SoftSell. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;