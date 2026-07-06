import { useEffect, useRef } from "react";
import { Link } from "react-router";
import { FaRegUserCircle, FaArrowDown } from "react-icons/fa";
import { useAppContext } from "../context/AppContext";

const Navbar = () => {
  const { isLoggedIn, isOpen, setIsOpen, setIsLoggedIn } = useAppContext();
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
    <div className="hidden md:block">
      <div>
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
    </div>
  );
};

export default Navbar;