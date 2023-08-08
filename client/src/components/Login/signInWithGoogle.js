import {
  signInWithPopup,
  FacebookAuthProvider,
  signInWithCredential,
  GoogleAuthProvider,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { app } from "./firebaseGoogleConfig.js";

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  return new Promise((resolve, reject) => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log("Usuario de Google:", user);
        // Puedes acceder a la información del usuario aquí, por ejemplo:
        console.log("Nombre de usuario:", user.displayName);
        console.log("Correo electrónico:", user.email);
        console.log("Foto de perfil:", user.photoURL);
        resolve(user); // Resolvemos la promesa para indicar que el inicio de sesión ha sido exitoso
      })
      .catch((error) => {
        console.error("Error de inicio de sesión con Google:", error);
        reject(error); // Rechazamos la promesa en caso de error
      });
  });
};

/* export const handleEmailRegister = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    console.log("New User Registered:", user);
  } catch (error) {
    console.error("Error creating user:", error.message);
  }
}; */

export const handleEmailLogin = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    console.log("Logged in user:", user);
  } catch (error) {
    console.error("Error signing in:", error.message);
  }
};

export const signInWithFacebook = (accessToken) => {
  const credential = FacebookAuthProvider.credential(accessToken);
  return signInWithCredential(auth, credential);
};



export const handleEmailRegister = async (email, password, displayName) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Actualiza el objeto user con el nombre de usuario
    user.displayName = displayName;

    console.log('New User Registered:', user);
  } catch (error) {
    console.error('Error creating user:', error.message);
    throw error;
  }
};

