import React, { Component } from "react"
import { BrowserRouter, Route } from "react-router-dom"
import Login from "./components/Login"
import Dashboard from "./components/DashboardPage"
import "./App.css"
import axios from "axios";
import DocProfiles from "./components/DocProfilesComponent"
import DoctoProfile from "./components/DoctorsProfile/DoctorProfile"
import Navbarr from "./components/NavbarComponent"
import UserDetails from "./components/UpdateDetailsComponent.js"
import PatientHistory from "./components/DoctorsProfile/PatientHistory"
import AddDoc from "./components/Admin/AddDoctor"
import LoginComponent from "./components/Admin/LoginComponent"
import ViewDoc from "./components/Admin/ViewDoctor"
import Schedule from "./components/DocSchedule"

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
							<Route exact path="/" component={Dashboard} />
							<Route path="/BAApp" component={DocProfiles} />
							<Route path="/docProfile/:id" component={DoctoProfile} />
							<Route path="/Details" component={UserDetails} />
							<Route path="/Schedule" component={Schedule} />
							<Route path="/History" component={PatientHistory}/>
							<Route path="/admin/login" component={LoginComponent}/>
							<Route path="/admin/add" component={AddDoc}/>
							<Route path="/admin/view" component={ViewDoc}/>
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
