import React, { useEffect, useState } from 'react';
import { Navbar, NavbarBrand, Button } from 'reactstrap';
import axios from "axios";

const Navbarr = (props) => {
    const [state, setState] = useState({current_user: [],
                                        error: false,
                                        loginStatus: false,
                                        loadStatus: false}
                                    );
      axios.get("/api/current_user")
		  .then(response => {
		
          setState({error:false,loadStatus:true,loginStatus:response.data.loggedIn, current_user: response.data.user});
      }).catch(function (error) {
          console.log("ERROR LOADING DATA");
          console.log(error);
        });
    return (
        <Navbar dark color="danger">
								<div className="container">
									<div className="col-sm-4">
										<NavbarBrand href="/">
											<h1>MediFide</h1>
										</NavbarBrand>
									</div>
									<h2>{ state.current_user.name}</h2>
									<a href="./Details"><Button color="info">Update details</Button></a>
									<a href="./History"><Button color="info">Medical history</Button></a>
									<a href="/api/logout"><Button color="secondary">Logout</Button></a>
								</div>
							</Navbar>

    );
}

export default Navbarr;