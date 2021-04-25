import React, { Component } from "react"
import { BrowserRouter, Route } from "react-router-dom"
import { Navbar, NavbarBrand, Button } from "reactstrap"
import Login from "./components/Login"
import Dashboard from "./components/DashboardPage"
import "./App.css"
import axios from "axios";
import DocProfiles from "./components/DocProfilesComponent"
import DoctoProfile from "./components/DoctorsProfile/DoctorProfile"
import Doc2 from "./components/DocProfile2.js"
import Doc3 from "./components/DocProfile3.js"
import UserDetails from "./components/UpdateDetailsComponent.js"
import Schedule from "./components/DocSchedule.js"


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
									<div className="col-sm-4">
										<NavbarBrand href="/">
											<h1>MediFide</h1>
										</NavbarBrand>
									</div>
									<a href="./Details"><Button color="info">Update your details</Button></a>
									<a href="./Details"><Button color="info">View Medical history</Button></a>
									<h2>{ this.state.current_user.name}</h2>
									<a href="/api/logout"><Button color="secondary">Logout</Button></a>
								</div>
							</Navbar>
							<Route exact path="/" component={Dashboard} />
							<Route path="/BAApp" component={DocProfiles} />
							<Route path="/docProfile/:id" component={DoctoProfile} />
							<Route path="/Doc2" component={Doc2} />
							<Route path="/Doc3" component={Doc3} />
							<Route path="/Details" component={UserDetails} />
							<Route path="/Schedule" component={Schedule} />
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
