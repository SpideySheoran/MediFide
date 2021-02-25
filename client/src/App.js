import React, { Component } from "react"
import { BrowserRouter, Route } from "react-router-dom"
import { Navbar, NavbarBrand, Button } from "reactstrap"
import Login from "./components/Login"
import SignUp from "./components/SignUpPage"
import Dashboard from "./components/DashboardPage"
import "./App.css"
import axios from "axios";

class App extends Component {
	state = {
    current_user: [],
    error: false,
    loginStatus: false,
    loadStatus: false
  }
  componentDidMount(){
      axios.get("/api/current_user")
		  .then(response => {
		
          this.setState({error:false,loadStatus:true,loginStatus:response.data.loggedIn, current_user: response.data.user});
          console.log(this.state.current_user,this.state.loginStatus);
      }).catch(function (error) {
          console.log("ERROR LOADING DATA");
          console.log(error);
        });
	}
	logout() {
		console.log("yww");
		axios.get("/api/logout");
	}
	render() {
		return (
            <div>
				<BrowserRouter>
					{this.state.loginStatus ? (
						<div>
							<Navbar dark color="danger">
								<div className="container">
									<div className="col-8">
										<NavbarBrand href="/">
											<h1>MediFide</h1>
										</NavbarBrand>
									</div>
									<h2>{ this.state.current_user.name}</h2>
									<a href="http://localhost:5000/api/logout"><Button color="secondary">Logout</Button></a>
								</div>
							</Navbar>
							<Route exact path="/" component={Dashboard} />
						</div>
					) : (
						<Route exact path="/" component={Login} />
					)}
				</BrowserRouter>
            </div>
        );
	}
}

export default App
