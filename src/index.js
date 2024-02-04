import React from "react";
import ReactDOM from "react-dom/client";  
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './style.css'
import Home from "./pages/Home";    


function App () {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);