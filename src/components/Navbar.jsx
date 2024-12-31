import {useState} from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-10">
      <nav className="px-4 lg:px-6 py-2.5 mt-3">
        <div className="backdrop-blur bg-white/50 flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-6 shadow-lg rounded-xl">
          {/* Logo */}
          <h1 className="text-xl font-bold text-gray-800">
            <span className="text-gray-400">RAFLIDIO</span>DEV
          </h1>

          {/* Mobile Menu Button */}
          <button
            id="menu-toggle"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>

          {/* Navigation Links */}
          <div
            id="navbar"
            className={`${
              isOpen ? "block" : "hidden"
            } w-full md:flex md:w-auto transition-all duration-300`}
          >
            <ul className="flex flex-col items-center font-medium mt-4 md:mt-0 md:flex-row md:space-x-8">
              <li>
                <a
                  href="#home"
                  className="block py-2 px-4 text-gray-800 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="block py-2 px-4 text-gray-800 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
                >
                  Project
                </a>
              </li>
              <li>
                <a
                  href="#rooms"
                  className="block py-2 px-4 text-gray-800 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
                >
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
