
import React from "react";
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return <header className="header">
        <div className="logo-and-heading">

            <NavLink to="/"><img className="logo" src="./mylogo.png" alt="logo" /></NavLink>

            <h1>Pokemon App 2.0</h1>


        </div>

        <div className="nav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/pokemons">Pokemon-List</NavLink>

        </div>

    </header>
};

export default Header;