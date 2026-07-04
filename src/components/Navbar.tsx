import { Link } from "react-router";
import { FaRegUserCircle, FaArrowDown } from "react-icons/fa";
import { useAppContext } from "../context/AppContext";

const Navbar = () => {
  const { logIn, isOpen, setIsOpen, setLogIn } = useAppContext();

  return (
    <div className="absolute right-0 pr-[1%]">
      <div>
        {logIn ? (
          <Link className="" to="/login">
            Login
          </Link>
        ) : (
          <div className="flex gap-2 font-medium text-white p-4">
            <FaRegUserCircle className="text-3xl" />
            <p>Le Dien Thanh Tung</p>
            <div className="cursor-pointer">
              <button
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
                className="cursor-pointer"
              >
                <FaArrowDown className="flex flex-col text-xl my-1" />
              </button>
              <ul
                className={`absolute right-0 w-24 border rounded-2xl border-gray-700 bg-gray-800 p-2 mx-2 text-center
                transition-all duration-300 ease-in-out
                ${
                  isOpen
                    ? "translate-y-0 opacity-100 visible"
                    : "-translate-y-2 opacity-0 invisible pointer-events-none"
                }`}
              >
                <li className="hover:text-blue-400">
                  <Link to="/profile">Profile</Link>
                </li>
                <li className="hover:text-blue-400">
                  <Link to="/sign-in" onClick={() => setLogIn(false)}>
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
