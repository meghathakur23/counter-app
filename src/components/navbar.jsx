import React, { Component } from 'react';

//stateless fucntional Component
const NavBar = props => {
    console.log('NavBar-Rendered');
    return ( 
    <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand">
            Navbar{" "} 
            <span className="badge badge badge-pill badge-secondary">
            {props.totalCounters}
            </span>
        </a>
    </nav>
       );
    }

 
export default NavBar ;