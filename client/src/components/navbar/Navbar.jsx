import React, { useContext , useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { signOut } from 'firebase/auth'; 

import "./navbar.css";

const Navbar = () => {
  const { user, isLogged, dispatch } = useContext(AuthContext);
  console.log("isLogged:", isLogged);
  const [showDropdown, setShowDropdown] = useState(false);
  
  const handleSignOut = async () => {
    try {
      console.log('Cierre de sesión en progreso...');
      await signOut();
      console.log('Cierre de sesión exitoso');
      dispatch({ type: 'LOGOUT' });
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  // Maneja el clic fuera del menú desplegable para cerrarlo
  useEffect(() => {
    const handleOutsideClick = () => {
      if (showDropdown) {
        setShowDropdown(false);
      }
    };

    if (showDropdown) {
      console.log('Abriendo menú desplegable...');

      window.addEventListener('click', handleOutsideClick);
    } else {
      console.log('Cerrando menú desplegable...');

      window.removeEventListener('click', handleOutsideClick);
    }

    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, [showDropdown]);

  console.log('user:', user);
  console.log('isLogged:', isLogged);

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Qarola-Booking</span>
        </Link>
        <div className="navItems">
          {isLogged ? (
            <div className="userProfile">
              <div className="userDetails">
          {user.photoURL && ( <img src={user.photoURL} alt="User Avatar" className="user-avatar" />
          )}
            <div className="username">{user.displayName || user.email}</div>
            </div>
            {showDropdown && (
                <div className="dropdown">
                  <button className="logout-button" onClick={handleSignOut}>
                    Log Out
                  </button>
                </div>
              )}
             </div>
          ) : (
            <>
              <Link
                to="/register"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <button className="navButton">Register</button>
              </Link>
              <Link
                to="/register"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <button className="navButton">Login</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
