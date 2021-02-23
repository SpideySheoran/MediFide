import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

const Navbarr = (props) => {
    return (
        <Navbar dark color="danger">
            <div className="container">
            <NavbarBrand href="/"><h1>MediFide</h1></NavbarBrand>
            </div>
        </Navbar>

    );
}

export default Navbarr;