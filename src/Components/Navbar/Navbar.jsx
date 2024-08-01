import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        isScrolled ? "h-16" : "h-24"
      } bg-[#2C3E50] border-gray-200 dark:bg-gray-900 text-white fixed top-0 left-0 right-0 transition-all duration-[0.6s] flex justify-center items-center z-[999]`}
      id="nav"
    >
      <div className="container mx-auto">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-2 sm:px-8 xl:px-0">
          <Link
            to=""
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="nav-head text-2xl font-bold whitespace-nowrap uppercase">
              Start Framework
            </span>
          </Link>
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white border-2 border-white rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } w-full md:block md:w-auto transition-all duration-[0.6s]`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col gap-4 py-4 md:p-0 mt-4 md:flex-row md:space-x-4 md:mt-0">
              <li>
                <NavLink
                  to="about"
                  className="py-2 px-4 uppercase font-bold "
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="portfolio"
                  className="py-2 px-4 uppercase font-bold "
                  onClick={() => setIsMenuOpen(false)}
                >
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="contact"
                  className="py-2 px-4 uppercase font-bold "
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
