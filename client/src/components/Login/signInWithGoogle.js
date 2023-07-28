import { signInWithPopup,FacebookAuthProvider,  signInWithCredential, GoogleAuthProvider, getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from './firebaseGoogleConfig.js';

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
 
  signInWithPopup(auth, provider)
    .then((result) => {
      // Aquí se puede manejar la respuesta después de que el usuario inicie sesión con Google
      const user = result.user;
      console.log('Usuario de Google:', user);
    })
    .catch((error) => {
      // Manejar errores si ocurren durante el inicio de sesión con Google
      console.error('Error de inicio de sesión con Google:', error);
    });
  };

  
export const handleEmailRegister = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log('New User Registered:', user);
  } catch (error) {
    console.error('Error creating user:', error.message);
  }
};
  
export const handleEmailLogin = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log('Logged in user:', user);
  } catch (error) {
    console.error('Error signing in:', error.message);
  }
};

export const signInWithFacebook = (accessToken) => {
  const credential = FacebookAuthProvider.credential(accessToken);
  return signInWithCredential(auth, credential);
};