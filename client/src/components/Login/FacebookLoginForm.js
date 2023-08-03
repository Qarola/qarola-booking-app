import React from "react";
import FacebookLogin from "@greatsumini/react-facebook-login";
import { initializeFacebookApp } from "@greatsumini/react-facebook-login";


// Inicializa el SDK de Facebook con el appId correcto
initializeFacebookApp(process.env.REACT_APP_FB_APP_ID);

const FacebookLoginComponent = () => {
  return (
    <FacebookLogin
      appId={process.env.REACT_APP_FB_APP_ID}
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
  );
};

export default FacebookLoginComponent;
