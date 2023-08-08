// firebaseAuth.js
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
  } from "firebase/auth";
  import { app } from "./firebaseGoogleConfig.js";
  
  const auth = getAuth(app);
  
  export const registerWithEmailAndPassword = async (email, password, displayName) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      // Actualiza el objeto user con el nombre de usuario
      user.displayName = displayName;
  
      console.log('New User Registered:', user);
      return user;
    } catch (error) {
      console.error('Error creating user:', error.message);
      throw error;
    }
  };
  
  export const loginWithEmailAndPassword = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("Logged in user:", user);
      return user;
    } catch (error) {
      console.error('Error signing in:', error.message);
      throw error;
    }
  };
  

    /* const handleEmailLogin = async (event) => {
    event.preventDefault();

    dispatch({ type: "LOGIN_START" }); // Iniciar el estado de carga
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: { user },
      });

      console.log("Usuario autenticado:", user);
      navigate("/");
    } catch (error) {
      dispatch({
        type: "LOGIN_FAILURE",
        payload: error.message,
      });
      console.error("Error al iniciar sesión:", error);
    }
  };

  const handleEmailRegister = async (event) => {
    event.preventDefault();

    dispatch({ type: "LOGIN_START" }); // Iniciar el estado de carga

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Actualiza el objeto user con el nombre de usuario
      user.displayName = "NombreDeUsuario"; // Puedes cambiar esto por el nombre que desees

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: { user },
      });

      console.log("Usuario registrado:", user);
      navigate("/");
    } catch (error) {
      dispatch({
        type: "LOGIN_FAILURE",
        payload: error.message,
      });
      console.error("Error al registrar usuario:", error);
    }
  }; */

   
   
   
    /* createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // El usuario ha sido creado exitosamente
        const user = userCredential.user;

        dispatch({
          type: "LOGIN_SUCCESS",
          payload: { user },
        });
        console.log("Usuario registrado:", user);
        navigate("/");
      })
      .catch((error) => {
        // Manejar errores si ocurren durante el registro
        dispatch({
          type: "LOGIN_FAILURE",
          payload: error.message,
        });
        console.error("Error de registro:", error);
      });
  };
 */