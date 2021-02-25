import React, { Component } from "react"
import { BrowserRouter, Route } from "react-router-dom"
import { Navbar, NavbarBrand } from "reactstrap"
import Login from "./components/Login"
import SignUp from "./components/SignUpPage"
import DashboardPage from "./components/DashboardPage"
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
		// return (
		// 	<BrowserRouter>
		// 		<div>
		// 			{
		// 				<Navbar dark color="danger">
		// 					<div className="container">
		// 						<NavbarBrand href="/">
		// 							<h1>MediFide</h1>
		// 						</NavbarBrand>
		// 					</div>
		// 				</Navbar>
		// 			}
		// 			<Route exact path="/" component={Login} />
		// 			<Route exact path="/dashboard" component={DashboardPage} />
		// 		</div>
		// 	</BrowserRouter>
		// )
		return (
            <div>
                {this.state.loginStatus ? (
                    <div>
						<h1>Hi { this.state.current_user.name}</h1>
						<a href="http://localhost:5000/api/logout">Logout</a>
                    </div>
                ) : (
                    <Login></Login>
                )}
            </div>
        );
	}
}

export default App
