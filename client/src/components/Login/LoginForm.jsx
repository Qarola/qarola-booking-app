import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithGoogle } from "./signInWithGoogle";
import { AuthContext } from "../../context/AuthContext";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./signInWithGoogle";
import Navbar from "../navbar/Navbar";
import { AiFillFacebook } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import "./loginForm.css";

const LoginForm = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleGoogleLogin = async () => {
    try {
      signInWithGoogle().then((user) => {
        // Actualiza el estado de autenticación con el nombre de usuario
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: { user },
        });
        navigate("/");
      });
    } catch (error) {
      console.error("Error de inicio de sesión con Google:", error);
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleCombinedAction = async (event) => {
    event.preventDefault();

    dispatch({ type: "LOGIN_START" }); // Iniciar el estado de carga

    try {
      // Intenta iniciar sesión
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: { user },
      });

      console.log("Usuario autenticado:", user);
      navigate("/");
    } catch (loginError) {
      // Si el inicio de sesión falla, realiza el registro
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;

        // Actualiza el objeto user con el nombre de usuario
        user.displayName = user.email; // Puedes cambiar esto por el nombre que desees

        dispatch({
          type: "LOGIN_SUCCESS",
          payload: { user },
        });

        console.log("Usuario registrado:", user);
        navigate("/");
      } catch (registerError) {
        dispatch({
          type: "LOGIN_FAILURE",
          payload: registerError.message,
        });
        console.error("Error al registrar usuario:", registerError);
      }
    }
  };

  return (
    <>
      <Navbar />
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
            onClick={handleCombinedAction}
          >
            Continue
          </button>
        </form>
        <p>
          <div className="d-line">
            <span className="divider-line"></span>
            or use one of these options
            <span className="divider-line"></span>
          </div>
        </p>

        <div className="social-login-container">
          <div className="icon-container-fb">
            {/*   <FacebookLoginComponent className='fb-login'/> */}
            <button className="btnFacebook">
              <AiFillFacebook className="facebook-icon" />
            </button>
          </div>
          <button className="btnGoogle" onClick={handleGoogleLogin}>
            <FcGoogle className="google-icon" />
          </button>
        </div>
        <br />
        <p>
          <div className="d-line-2">
            <span className="divider-line-2"></span>
            <p>
              By signing in or creating an account, you agree with our{" "}
              <a href="/terms">Terms & conditions</a> and{" "}
              <a href="/privacy">Privacy statement</a>
            </p>
            <span className="divider-line-2"></span>
          </div>
        </p>

        <p>All rights reserved. Copyright 2023 - Qarola-Booking™</p>
      </div>
    </>
  );
};

export default LoginForm;
