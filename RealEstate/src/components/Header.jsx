
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import { assets } from "../assets/data";

import { useTranslation } from "react-i18next";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState(false);
  // const [menuOpened, setMenuOpened] = useState(false);
  // const [showSearch, setShowSearch] = useState(true);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => i18n.changeLanguage(lng);

  const location = useLocation();

  // 🧠 Scroll handling logic
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setActive(true); // When scrolled down, make header sticky with background
      } else {
        setActive(false); // Reset on top
      }
    };

    // Attach event listener
    window.addEventListener("scroll", handleScroll);

    // Run once on mount to apply correct state
    handleScroll();

    // Cleanup on unmount ✅
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]); // re-run on route change

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-200 ${active ? "bg-white shadow-md" : "bg-transparet"
        }`}
    >
      <div className="max-padd-container">
        <div className="flexBetween h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src={assets.logoImg}
              alt="Logo"
              className="h-11 w-auto object-contain"
            />
          </Link>

          {/* Navbar */}
          <div className="hidden md:flex">
            <Navbar />
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-5">
            {/* Searchbar */}
            {/* {showSearch &&<div className="hidden sm:block">
              <input
                type="text"
                placeholder="Search properties..."
                className="px-3 py-2 border border-gray-300 rounded-full text-[14px] w-40 lg:w-56 focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>} */}

            {/* {showSearch && <div className="hidden md:block">Searchbar</div>} */}

            <select
              value={i18n.language}
              onChange={(e) => changeLanguage(e.target.value)}
              className="bg-gray-100 text-gray-800 px-2 py-1 rounded"
            >
              <option value="en">English</option>
              <option value="hi">हिंदी</option>
            </select>

            <button
              className="btn-secondary flexCenter gap-2 rounded-full"
              onClick={() => alert("Login Clicked")}
            >
              Login
              <img src={assets.user} alt="usericon" className="h-5 w-5" />
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-full border border-gray-300"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-100">
            <Navbar />
          </div>
        )}


      </div>
    </header>
  );
};

export default Header;
