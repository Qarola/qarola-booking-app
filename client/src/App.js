import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { AuthProvider } from './components/Login/AuthProvider';
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import LoginForm from "./components/Login/LoginForm";



function App() {


  return (
    <BrowserRouter>
        <AuthProvider>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/register" element={<LoginForm />}/>
      </Routes>
      </AuthProvider>

    </BrowserRouter>
  );
}

export default App;
