import React, { useEffect, useState } from 'react';
import { Navbar, NavbarBrand, Button } from 'reactstrap';
import axios from "axios";

const Navbarr = (props) => {
    return (
        <Navbar dark color="danger">
								<div className="container">
									<div className="col-sm-4">
										<NavbarBrand href="/">
											<h1>MediFide</h1>
										</NavbarBrand>
									</div>
									
									<a href="/api/logout"><Button color="secondary">Logout</Button></a>
								</div>
							</Navbar>

    );
}

export default Navbarr;