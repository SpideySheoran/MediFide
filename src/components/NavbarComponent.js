import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, NavbarBrand, Button } from 'reactstrap';

const Navbarr = (props) => {
    return (
        <Navbar dark color="danger">
            <div className="container">
            <NavbarBrand href="/"><h1>MediFide</h1></NavbarBrand>
            
                <Button class="nav-item" color="standard"><a class="nav-link" href="#"><span class="fa fa-address-card fa-lg"></span> View Medical history</a></Button>
            
            </div>
        </Navbar>

    );
}

export default Navbarr;