import React from "react";
import ReactDOM from "react-dom/client";
import ReactRouterDom from "react-router-dom";

import Jumbotron from "./mainpage/Jumbotron";
import Footer from "./mainpage/Footer";
import Navbar from "./mainpage/Navbar";
import Home from "./mainpage/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Jumbotron />
        <Navbar />
        <br/>
        <Home />
        <br/><br/><br/><br/><br/>
        <Footer />
    </React.StrictMode>
);