import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar(){
    return (
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <NavLink to="/" className="nav-link">Home</NavLink>
                        <NavLink to="/cruduser" className="nav-link">Users</NavLink>
                        <NavLink to="/about" className="nav-link">About</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}