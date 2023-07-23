import { Link } from "react-router-dom";
import "./loginForm.css";


const NavbarLogin = () => {

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Qarola-Booking</span>
        </Link>
      </div>
    </div>
  );
};

export default NavbarLogin;
