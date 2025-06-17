"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-6 py-2">
        {/* Logo */}
        <a
          href="#home"
          className={`text-4xl font-bold font-baloo transition-colors duration-300 ${
            isScrolled ? "text-[#695AA6]" : "text-white"
          }`}
        >
          Krishna
        </a>

        {/* Hamburger Menu */}
        <button
          onClick={toggleMenu}
          className="lg:hidden flex flex-col items-center justify-center w-10 h-10 focus:outline-none"
        >
          <span
            className={`block w-6 h-0.5 transition-transform ${
              isMenuOpen ? "bg-[#695AA6] rotate-45 translate-y-2" : "bg-gray-800"
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 my-1 transition-all ${
              isMenuOpen ? "opacity-0" : "bg-gray-800"
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 transition-transform ${
              isMenuOpen ? "bg-[#695AA6] -rotate-45 -translate-y-2" : "bg-gray-800"
            }`}
          ></span>
        </button>

        {/* Navigation Links */}
        <ul
          className={`fixed inset-y-0 right-0 w-2/3 bg-white p-8 shadow-lg transform transition-transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } lg:static lg:transform-none lg:flex lg:items-center lg:w-auto lg:bg-transparent lg:shadow-none`}
        >
          {["Home", "About", "Projects", "Contact"].map((section) => (
            <li
              key={section}
              className={`text-center font-baloo my-4 p-2 lg:my-0 transition-colors duration-300 ${
                isScrolled ? "text-[#695AA6]" : "text-gray-800 lg:text-white"
              }`}
            >
              <a
                href={`#${section.toLowerCase()}`} // Scroll to section
                className="block hover:text-[#523D85] transition-all"
              >
                {section}
              </a>
            </li>
          ))}

          {/* Login (Opens a new page) */}
          <li className="text-center font-baloo my-4 p-2 lg:my-0">
            <Link
              href="/login"
              className={`block px-4 py-2 rounded transition-all ${
                pathname === "/login"
                  ? "bg-[#523D85] text-white" // Highlight when on login page
                  : "text-[#695AA6] hover:bg-[#523D85] hover:text-white"
              }`}
            >
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
