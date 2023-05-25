import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Components
import Navbar from "./components/Navbar";
import Workshop_1 from "./Pages/workshop1/Workshop_1";
import Workshop_2 from './Pages/workshop2/Workshop_2.jsx'
import HomePage from './Pages/HomePage'

function App() {


  return (
    
    <div>
           <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/workshop_1" element={<Workshop_1/>}/>
            <Route path="/workshop_2" element={<Workshop_2/>}/>
        </Routes>
    </BrowserRouter>



    </div>

  );
}

export default App;
