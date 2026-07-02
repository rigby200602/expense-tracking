import { useState } from "react";
import { Link } from "react-router";

const Navbar = () => {
  const [logIn, setLogIn] = useState(false);
  return (
    <div className="absolute right-0 pr-[1%]">
      <div>{logIn ? <Link to="/login">Login</Link> : 
      <div>
        
    </div>}</div>
    </div>
  );
};

export default Navbar;
