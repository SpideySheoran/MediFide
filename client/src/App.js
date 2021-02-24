import React, { Component } from "react"
import { BrowserRouter, Route } from "react-router-dom"
import { Navbar, NavbarBrand } from "reactstrap"
import Login from "./components/Login"
import SignUp from "./components/SignUpPage"
import DashboardPage from "./components/DashboardPage"
import "./App.css"

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					{
						<Navbar dark color="danger">
							<div className="container">
								<NavbarBrand href="/">
									<h1>MediFide</h1>
								</NavbarBrand>
							</div>
						</Navbar>
					}
					<Route exact path="/" component={Login} />
					<Route exact path="/dashboard" component={DashboardPage} />
				</div>
			</BrowserRouter>
		)
	}
}

export default App
