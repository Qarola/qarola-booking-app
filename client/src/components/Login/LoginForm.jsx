import React, { useState } from "react";
//import FacebookLoginComponent from "./FacebookLoginForm";
import { signInWithGoogle } from "./signInWithGoogle";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./signInWithGoogle";
import NavbarLogin from "./NavbarLogin";
import "./loginForm.css";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { /* faFacebookSquare, faGoogle } from '@fortawesome/free-brands-svg-icons';
//import GoogleLogin from 'react-google-login';


const LoginForm = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEmailLogin = (event) => {
    event.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // El usuario ha sido creado exitosamente
        const user = userCredential.user;
        console.log("Usuario registrado:", user);
      })
      .catch((error) => {
        // Manejar errores si ocurren durante el registro
        console.error("Error de registro:", error);
      });
  };
  return (
    <>
      <NavbarLogin />
      <div className="login-form-container">
        <h2>Sign in or create an account</h2>
        <form className="login-form">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-input"
            placeholder="Enter your email address"
            value={email}
            onChange={handleEmailChange}
          />
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-input"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
          />
          <button
            type="submit"
            className="form-button"
            onClick={handleEmailLogin}
          >
            Continue with email
          </button>
        </form>
        <p>
          <div className="d-line">
            <span class="divider-line"></span>
            or use one of these options
            <span class="divider-line"></span>
          </div>
        </p>

        <div className="social-login-container">
          <div className="icon-container-fb">
          {/*   <FacebookLoginComponent className='fb-login'/> */}
          </div>
          <button className="btnGoogle" onClick={signInWithGoogle}>
            Sign in with Google
          </button>
        </div>
        <br />
        <p>
          By signing in or creating an account, you agree with our{" "}
          <a href="/terms">Terms & conditions</a> and{" "}
          <a href="/privacy">Privacy statement</a>
        </p>
        <p>All rights reserved. Copyright 2023 - Qarola-Booking™</p>
      </div>
    </>
  );
};

export default LoginForm;
