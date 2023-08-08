import { createContext, useEffect, useReducer } from "react";

const INITIAL_STATE = {
  use: null,
  loading: false,
  isLogged: false,
  error: null,
};

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        user: action.payload.user,
        isLogged: true,
        loading: false,
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        /*         user: null,*/
        ...state,
        loading: false,
        error: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        isLogged: false,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};
export const AuthContext = createContext();

// Proveedor del contexto
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    // Actualiza el valor de isLogged en localStorage
    localStorage.setItem("isLogged", state.isLogged);
  }, [state.isLogged]);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
