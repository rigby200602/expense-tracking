import { Link } from "react-router";
import { FaRegUserCircle } from "react-icons/fa";
import { useAppContext } from "../context/AppContext";

const Navbar = () => {
  const { logIn } = useAppContext();

  return (
    <div className="absolute right-0 pr-[1%]">
      <div>
        {logIn ? (
          <Link className="" to="/login">
            Login
          </Link>
        ) : (
          <div className="flex gap-2 font-medium cursor-pointer">
            <FaRegUserCircle className="text-3xl" />
            <p>Le Dien Thanh Tung</p>
            
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
