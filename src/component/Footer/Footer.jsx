import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-white text-sm">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 border-b border-gray-700">
        {/* About */}
        <div>
          <h3 className="font-bold text-gray-400 mb-2">ABOUT</h3>
          <ul className="space-y-1">
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Flipkart Stories</li>
            <li>Press</li>
            <li>Corporate Information</li>
          </ul>
        </div>

        {/* Group Companies */}
        <div>
          <h3 className="font-bold text-gray-400 mb-2">GROUP COMPANIES</h3>
          <ul className="space-y-1">
            <li>Myntra</li>
            <li>Cleartrip</li>
            <li>Shopsy</li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="font-bold text-gray-400 mb-2">HELP</h3>
          <ul className="space-y-1">
            <li>Payments</li>
            <li>Shipping</li>
            <li>Cancellation & Returns</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* Consumer Policy */}
        <div>
          <h3 className="font-bold text-gray-400 mb-2">CONSUMER POLICY</h3>
          <ul className="space-y-1">
            <li>Cancellation & Returns</li>
            <li>Terms of Use</li>
            <li>Security</li>
            <li>Privacy</li>
            <li>Sitemap</li>
            <li>Grievance Redressal</li>
            <li>EPR Compliance</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold text-gray-400 mb-2">Mail Us:</h3>
          <p className="text-gray-300 text-xs">
            Lorem ipsum dolor sit., <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit, <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit, <br />
            Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-wrap justify-between items-center">
        {/* Social Icons */}
        <div className="flex space-x-4">
          <FaFacebookF className="text-gray-400 hover:text-white cursor-pointer" size={18} />
          <FaXTwitter className="text-gray-400 hover:text-white cursor-pointer" size={18} />
          <FaYoutube className="text-gray-400 hover:text-white cursor-pointer" size={18} />
          <FaInstagram className="text-gray-400 hover:text-white cursor-pointer" size={18} />
        </div>

        {/* Links */}
        <div className="hidden md:flex space-x-6">
          <span className="text-yellow-400">Become a Seller</span>
          <span className="text-yellow-400">Advertise</span>
          <span className="text-yellow-400">Gift Cards</span>
          <span className="text-yellow-400">Help Center</span>
        </div>

        {/* Payment Methods */}
        <div className="flex space-x-2">
          <img src="./visa.png" alt="Visa" className="h-6" />
          <img src="./mastercard.png" alt="MasterCard" className="h-6" />
          <img src="./rupay.png" alt="RuPay" className="h-6" />
          <img src="./netbanking.png" alt="Net Banking" className="h-6" />
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-xs py-2 border-t border-gray-700">
        © 2025 
      </div>
    </footer>
  );
};

export default Footer;
