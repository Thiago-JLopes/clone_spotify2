import React from "react";
import ReactDOM from "react-dom/client";  
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './style.css'
import Home from "./pages/Home";    
import Registro from "./pages/Registro";
import RegistroForm from "./pages/RegistroForm";
import Login from "./pages/Login";


function App () {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path='login' element={<Login/>}/>
                <Route path="registro" element={<Registro/>}/>
                <Route path="registroForm" element={<RegistroForm/>}/>
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);