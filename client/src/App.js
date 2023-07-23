import dotenv from 'dotenv';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import LoginForm from "./components/Login/LoginForm";

import 'react-app-polyfill/ie11'; // Para soporte en Internet Explorer 11
import 'react-app-polyfill/stable'; // Para soporte en otros navegadores antiguos

dotenv.config();


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<LoginForm />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
