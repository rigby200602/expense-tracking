import { useState } from "react";
import { Link } from "react-router";
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [logIn, setLogIn] = useState(false);
  return (
    <div className="absolute right-0 pr-[1%]">
      <div>
        {!logIn ? <Link to="/login">Login</Link> : 
      <div>
        <FaRegUserCircle className="text-3xl cursor-pointer" />
    </div>}</div>
    </div>
  );
};

export default Navbar;
