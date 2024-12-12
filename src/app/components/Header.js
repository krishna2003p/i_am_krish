"use client";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-white to-transparent">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold text-gray-900">
          Krishna
        </a>

        {/* Hamburger Menu */}
        <button
          onClick={toggleMenu}
          className="lg:hidden flex flex-col items-center justify-center w-10 h-10 focus:outline-none"
        >
          <span
            className={`block w-6 h-0.5 bg-gray-800 transition-transform ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-gray-800 my-1 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-gray-800 transition-transform ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>

        {/* Navigation Links */}
        <ul
          className={`fixed inset-y-0 right-0 w-2/3 bg-white p-8 shadow-lg transform transition-transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } lg:static lg:transform-none lg:flex lg:items-center lg:w-auto lg:bg-transparent lg:shadow-none`}
        >
          {["Home", "About", "Portfolio", "Testimonial", "Blog", "Contact"].map(
            (section) => (
              <li key={section} className="my-4 lg:my-0">
                <a
                  href={`#${section.toLowerCase()}`}
                  className="block text-gray-800 hover:text-gray-600 lg:text-white"
                >
                  {section}
                </a>
              </li>
            )
          )}
          <li className="mt-4 lg:mt-0">
            <a
              href="#"
              className="inline-block px-4 py-2 text-white bg-purple-600 rounded-lg hover:bg-purple-700"
            >
              Components
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
