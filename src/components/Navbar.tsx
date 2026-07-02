import { useState } from "react";
import { Link } from "react-router";

const Navbar = () => {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="absolute right-0 pr-[1%]">
      <div>{!signIn ? <Link to="/login">Login</Link> : <></>}</div>
    </div>
  );
};

export default Navbar;
