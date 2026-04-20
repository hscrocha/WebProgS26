import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Jumbotron from "./mainpage/Jumbotron";
import Footer from "./mainpage/Footer";
import Navbar from "./mainpage/Navbar";
import Home from "./mainpage/Home";
import User from "./mainpage/User";
import About from "./mainpage/About";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Jumbotron />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cruduser" element={<User />} />
                <Route path="/about" element={<About />} />
            </Routes>
            
            <br/><br/><br/>
            <Footer />
        </BrowserRouter>
    </React.StrictMode>
);