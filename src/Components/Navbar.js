"use client";
import React, { useState, useEffect } from "react";

const sections = ["home", "about", "gallery", "services", "contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // close menu on mobile
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItemClass = (id) =>
    `px-2 py-1 ${
      activeSection === id ? "text-blue-600 font-bold" : "text-gray-600"
    } hover:text-blue-600 cursor-pointer transition-colors duration-200`;

  return (
    <nav className="flex items-center justify-between py-3 px-4 fixed top-0 w-full bg-white shadow-sm text-gray-800 z-50">
      <div className="flex items-center gap-2">
        <img
          className="h-9 w-10 cursor-pointer"
          src="https://imgs.search.brave.com/CS3K8rmCeTHjDYSjOom6BwCOSBlCriSVoOQe6mlPKhk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/dGhld2lyZWN1dHRl/ci5jb20vd3AtY29u/dGVudC9tZWRpYS8y/MDIyLzEwL2Ryb25l/cy0yMDQ4cHgtMDY5/OC5qcGc_YXV0bz13/ZWJwJnF1YWxpdHk9/NzUmd2lkdGg9MTAy/NA"
          alt="Logo"
        />
        <h4 className="text-base font-semibold text-gray-900">Company Name</h4>
      </div>

      {/* Desktop menu */}
      <div className="hidden md:flex">
        <ul className="flex gap-5 p-2">
          {sections.map((sec) => (
            <li key={sec}>
              <button
                onClick={() => scrollToSection(sec)}
                className={navItemClass(sec)}
              >
                {sec.charAt(0).toUpperCase() + sec.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Hamburger menu button */}
      <button
        className="md:hidden focus:outline-none p-2 rounded-md hover:bg-gray-200 transition cursor-pointer"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <img
          src="https://img.icons8.com/?size=100&id=36389&format=png&color=000000"
          alt="Menu"
          className="w-6 h-6"
        />
      </button>

      {/* Mobile dropdown menu */}
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } md:hidden absolute top-14 left-0 w-full bg-white shadow-md flex-col items-center py-3`}
      >
        <ul className="flex flex-col items-center gap-3 w-full">
          {sections.map((sec) => (
            <li key={sec} className="w-full text-center">
              <button
                onClick={() => scrollToSection(sec)}
                className={`${navItemClass(sec)} block py-2 hover:bg-gray-100 w-full`}
              >
                {sec.charAt(0).toUpperCase() + sec.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
