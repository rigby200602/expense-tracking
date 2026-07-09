import { useEffect, useRef } from "react";
import { Link } from "react-router";
import { FaRegUserCircle, FaArrowDown } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { useAppContext } from "../context/AppContext";
import { sidebarData as data } from "../assets/testData";

const Navbar = () => {
  const {
    isCollapsed,
    setIsCollapsed,
    isLoggedIn,
    isOpen,
    setIsOpen,
    setIsLoggedIn,
  } = useAppContext();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsOpen]);

  return (
    <div>
      {/* Build for big screens divices */}
      <div className="hidden md:block">
        {isLoggedIn ? (
          <Link className="" to="/login">
            Login
          </Link>
        ) : (
          <div className="flex items-center gap-2 p-4 font-medium text-white">
            <FaRegUserCircle className="text-3xl" />
            <p>Le Dien Thanh Tung</p>

            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer"
              >
                <FaArrowDown className="my-1 flex text-xl" />
              </button>

              <ul
                className={`absolute right-0 z-20 mt-2 w-24 rounded-2xl border border-gray-700 bg-gray-800 p-2 text-center text-white transition-all duration-300 ease-in-out ${
                  isOpen
                    ? "translate-y-0 opacity-100 visible"
                    : "-translate-y-2 opacity-0 invisible pointer-events-none"
                }`}
              >
                <li className="hover:text-blue-400">
                  <Link to="/profile">Profile</Link>
                </li>
                <li className="hover:text-blue-400">
                  <Link to="/sign-in" onClick={() => setIsLoggedIn(false)}>
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
      {/* Mobile divices */}
      <div className="md:hidden">
        <button
          onClick={() => setIsCollapsed((curr) => !curr)}
          className="mr-4 mt-4"
        >
          <IoMdMenu className="text-white text-3xl" />
        </button>

        <div
          className={`fixed inset-0 z-40 bg-black/60 transition-opacity duration-300 ${
            isCollapsed ? "pointer-events-none opacity-0" : "pointer-events-auto opacity-60"
          }`}
          onClick={() => setIsCollapsed(false)}
        />

        <div
          className={`fixed right-0 top-0 z-50 h-full w-72 border-l border-gray-700 bg-[#0A0F16] p-4 shadow-xl transition-transform duration-300 ease-in-out ${
            isCollapsed ? "translate-x-full" : "translate-x-0"
          }`}
        >
          <div className="mb-4 flex items-center justify-between">
            <img src="/src/assets/logo.png" className="w-12 h-12"/>
            <button
              onClick={() => setIsCollapsed(true)}
              className="text-2xl text-white"
              aria-label="Close menu"
            >
              ×
            </button>
          </div>

          <ul className="flex flex-col gap-2">
            {data.map((item) => {
              const Icon = item.Icon;
              return (
                <li key={item.label}>
                  <Link
                    to={`/${item.url}`}
                    onClick={() => setIsCollapsed(false)}
                    className="flex items-center gap-3 rounded-md p-2 text-white text-xl transition hover:bg-gray-700"
                  >
                    <Icon className="text-xl" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
