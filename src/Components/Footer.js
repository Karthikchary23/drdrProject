import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-gray-900 via-blue-950 to-gray-800 text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-blue-400 mb-3">Revon</h2>
          <p className="text-sm text-gray-300">
            Empowering Innovation with Unmanned Solutions. Let's build the future together.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-2 text-white">Quick Links</h3>
          <ul className="space-y-1 text-gray-400">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-2 text-white">Contact</h3>
          <p className="text-gray-300 text-sm">Plot No 36, Pragati Colony,<br />Meerpet, Hyderabad - 500097</p>
          <p className="text-gray-300 text-sm mt-2">📧 revonunmanned@gmail.com</p>
          <p className="text-gray-300 text-sm">📞 +91 7780-661247</p>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-semibold mb-2 text-white">Follow Us</h3>
          <div className="flex space-x-4 text-blue-400 text-xl">
            <a href="#"><FaFacebookF className="hover:text-white" /></a>
            <a href="#"><FaTwitter className="hover:text-white" /></a>
            <a href="#"><FaInstagram className="hover:text-white" /></a>
            <a href="#"><FaLinkedinIn className="hover:text-white" /></a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-400 mt-10 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Revon Unmanned Systems. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
