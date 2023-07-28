import React, { useState } from "react";
import { signInWithGoogle } from "./signInWithGoogle";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./signInWithGoogle";

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { /* faFacebookSquare, faGoogle } from '@fortawesome/free-brands-svg-icons';
import FacebookLogin from "@greatsumini/react-facebook-login";
//import GoogleLogin from 'react-google-login';

import NavbarLogin from "./NavbarLogin";
import "./loginForm.css";

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
            <FacebookLogin
              appId={process.env.REACT_APP_FACEBOOK_APP_ID}
              onSuccess={(response) => {
                console.log("Login Success!", response);
              }}
              onFail={(error) => {
                console.log("Login Failed!", error);
              }}
              onProfileSuccess={(response) => {
                console.log("Get Profile Success!", response);
              }}
            />
          </div>
          <button className="btnGoogle" onClick={signInWithGoogle}>
            Sign in with Google
          </button>

          {/*    <div className="icon-container-g">
            <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              textButton={
                <>
                  <FontAwesomeIcon className="gIcon" icon={faGoogle} />
                </>
              }
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
            />
          </div> */}
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
