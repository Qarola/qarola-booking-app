import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Qarola-Booking</span>
        </Link>
        <div className="navItems">
          {user ? (
            <div className="loggedInUser">
              <span>Welcome, {user.displayName}</span>
              <button className="navButton">Logout</button>
            </div>
          ) : (
            <Navbar />
              
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
