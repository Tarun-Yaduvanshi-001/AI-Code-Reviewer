import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar w-full h-[8vh] bg-gray-900 text-white flex justify-between items-center px-[2%] shadow-md relative">
      {/* Logo + Title */}
      <div className="flex items-center w-[50%] h-full gap-2">
        <img
          src="/favicon.png"
          alt="Logo"
          className="h-6 w-6 sm:h-12 sm:w-12"
        />
        <h1 className="text-lg sm:text-3xl font-bold sm:ms-2 ms-1">Code Reviewer</h1>
      </div>


      <div className="hidden sm:flex sm:flex-row-reverse sm:items-center gap-3 w-[50%] h-full ">
        <Link
          to="/contact"
          className="bg-blue-500 hover:bg-blue-600 font-bold text-white px-4 py-2 rounded-full hover:border transition"
        >
          Contact
        </Link>
        
        <Link
          to="/about"
          className="bg-blue-500 hover:bg-blue-600 font-bold text-white px-4 py-2 rounded-full hover:border transition"
        >
          About
        </Link>
        
        <Link
          to="/"
          className="bg-blue-500 hover:bg-blue-600 font-bold text-white px-4 py-2 rounded-full hover:border transition"
        >
          Home
        </Link>
      </div>

      {/* Hamburger Icon */}
      <div className="sm:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="focus:outline-none hover:outline hover:rounded "
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Responsive Dropdown menu*/}
      {menuOpen && (
        <div className="absolute top-[8vh] right-[3%] bg-gray-800 p-3 rounded-md shadow-md flex flex-col items-center gap-2 sm:hidden z-50 border">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="text-white hover:text-blue-400 border rounded py-1 px-2"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="text-white hover:text-blue-400 border rounded py-1 px-2"
          >
            About
          </Link>
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="text-white hover:text-blue-400 border rounded py-1 px-1"
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
